import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux'

import { addEntry } from '../actions'

import { getMetricMetaInfo, timeToString, getDailyReminderValue } from '../utils/helpers';
import { submitEntry, removeEntry} from '../utils/api'
import {white, purple} from '../utils/colors';

import UdaciSlider from './UdaciSlider';
import UdaciStepper from './UdaciStepper';
import DateHeader from './DateHeader';
import TextButton from './TextButton';



function SubmitBtn({onPress}){
	return(

		<TouchableOpacity 
			onPress={onPress} 
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn: styles.androidSubmitBtn}
		>	
			<Text style={styles.submitBtnText}>Submit</Text>
		</TouchableOpacity>

	)
}

class AddEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			run: 0,
			bike: 0,
			swim: 0,
			sleep: 0,
			eat: 0
		}
		this.submit = this.submit.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment(metric){
		const { max, step } = getMetricMetaInfo(metric)
		this.setState((state)=>{

			// grabs current metric for each state property
			// and adds the step to the current state prop
			const count = state[metric] + step;
			return {
				// keep all state properties and
				...state,
				// add the specific metric

				[metric]: count > max 
				// if the count reaches the max parameters leave as is and dont increment
				
				? max 
				
				// if not return the count
				: count
			}
		})
	}
	decrement(metric){
		this.setState((state)=>{
			const count = state[metric] - getMetricMetaInfo(metric).step;
			return {
				...state,
				[metric]: count < 0 

				// if count is less than 0 return 0
				? 0 

				// else return count
				: count
			}
		})
	}
	slide(metric, value){
		this.setState(() =>({
			[metric]: value
		}))
	}
	submit(){
		const key = timeToString();
		const entry = this.state;

		this.props.addEntry({ [key] : entry })

		this.setState(() =>({
			run: 0,
			bike: 0,
			swim: 0,
			sleep: 5,
			eat: 0,
		}))

		// navigate to home

		submitEntry({key, entry})

		// clear local notification
	}
	reset(){
		const key = timeToString();

		this.props.addEntry({ [key] : getDailyReminderValue() })

		removeEntry(key);
	}
	
	render(){
		const metaInfo = getMetricMetaInfo();
		// Object.keys(metaInfo) returns an array  with all the properties of the getMetricMetaInfo() function
		// as seen below, utilizing the { } within a functional argument, allows you to return the component argument within the
		// component as seen in the DateHeader below

		if (this.props.alreadyLogged) {
			return(
				<View style={styles.center}>
					<Ionicons
						name={Platform.OS === 'ios' ? 'ios-happy-outline' : 'md-happy'}
						size={150}
					/>
					<Text>You already logged your information for today</Text>
					<TextButton style={styles.reset} onPress={this.reset}>
						Reset
					</TextButton>
				</View>

			)
		}

		return(
			<View style={styles.container}>
				<DateHeader date={(new Date()).toLocaleDateString()}/>
				<Text>{JSON.stringify(this.state)}</Text>
				{Object.keys(metaInfo).map((key) =>{
					const { getIcon, type, ...rest } = metaInfo[key]
					const value = this.state[key]

					return (
						<View key={key} style={styles.row}>
							{getIcon()}
							{type === 'slider'
								? <UdaciSlider
									value={value}
									onChange={(value) => this.slide(key, value)}
									{...rest}
									/>
								: <UdaciStepper
									value={value}
									onIncrement={() => this.increment(key)}
									onDecrement={() => this.decrement(key)}
									{...rest}
									/>
							}
						</View>
					)
				})}
				<SubmitBtn onPress={this.submit} />
			</View>
		)
	}
}

function mapStateToProps(state){
	const key = timeToString()

	return{
		alreadyLogged: state[key] && typeof state[key].today === 'undefined'
	}
}

export default connect(mapStateToProps, {addEntry})(AddEntry)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white,
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
	},
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40
	},
	androidSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 2,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center' 
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	reset:{
		padding: 10
	}
})