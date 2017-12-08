import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import UdaciFitnessCalendar from 'udacifitness-calendar'

import { receiveEntries, addEntry } from '../../actions'

import { timeToString, getDailyReminderValue } from '../../utils/helpers'
import { fetchCalendarResults } from '../../utils/api'

import DateHeader from '../../components/DateHeader'

import styles from './styles'

class History extends Component{

	componentDidMount(){
		fetchCalendarResults()
		.then((entries)=>{ this.props.receiveEntries(entries)}).catch((error) =>{console.log(error)})
		.then(({ entries }) =>{
			if (!entries[timeToString()]) {
				this.props.addEntry({
					[timeToString()] : getDailyReminderValue()
				})
			}
		})
		.catch((error) =>{console.log(error)})
	}

	// adding brackets () instead of {} to a function, RETURNS whatever is within the function
	// adding a function like the one below with () instead of {} will AUTOMATICALLY return all JSX
	// without the need to call a return method
	renderItem = ({ today, ...metrics }, formattedDate, key) => (
		

			<View style={styles.item}>
				{today
				 ? <View>
				 	  <DateHeader date={formattedDate} />
				 	  <Text style={styles.noDataText}>
				 	  	{today}
				 	  </Text>
				   </View>
				 : <TouchableOpacity onPress={() => console.log('Pressed!')}>
				 		<Text>{JSON.stringify(metrics)}</Text>
				   </TouchableOpacity>
				}
			</View>

	)

	renderEmptyDate(formattedDate){

		return(
			<View style={styles.item}>
				<DateHeader date={formattedDate} />
				<Text style={styles.noDataText}>
					You didn't log any data on this day.
				</Text>
			</View>
		)

	}

	render(){

		const { entries } = this.props

		return (

				<UdaciFitnessCalendar 
					items={entries}
					renderItem={this.renderItem}
					renderEmptyDate={this.renderEmptyDate}
				/>

		)
	}

}

function mapStateToProps(entries){
	return {entries};
}

export default connect( mapStateToProps, {receiveEntries, addEntry} )(History)