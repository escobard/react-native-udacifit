import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getMetricMetaInfo, timeToString } from '../utils/helpers';

import UdaciSlider from './UdaciSlider';
import UdaciStepper from './UdaciStepper';
import DateHeader from './DateHeader';

function SubmitBtn({onPress}){
	return(

		<TouchableOpacity onPress={onPress}>
			<Text>Submit</Text>
		</TouchableOpacity>

	)
}

export default class AddEntry extends Component {
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

		// update redux

		this.setState(() =>({
			run: 0,
			bike: 0,
			swim: 0,
			sleep: 5,
			eat: 0,
		}))

		// navigate to home

		// save to db

		// clear local notification
	}
	render(){
		const metaInfo = getMetricMetaInfo();
		// Object.keys(metaInfo) returns an array  with all the properties of the getMetricMetaInfo() function
		// as seen below, utilizing the { } within a functional argument, allows you to return the component argument within the
		// component as seen in the DateHeader below
		return(
			<View>
				<DateHeader date={(new Date()).toLocaleDateString()}/>
				<Text>{JSON.stringify(this.state)}</Text>
				{Object.keys(metaInfo).map((key) =>{
					const { getIcon, type, ...rest } = metaInfo[key]
					const value = this.state[key]

					return (
						<View key={key}>
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