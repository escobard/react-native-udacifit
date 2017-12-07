import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { receiveEntries, addEntry } from '../../actions'

import { timeToString, getDailyReminderValue } from '../../utils/helpers'
import { fetchCalendarResults } from '../../utils/api'

import { styles } from './styles'

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

	render(){
		return (
			<View>
				<Text>{JSON.stringify(this.props)}</Text>
			</View>

		)
	}

}

function mapStateToProps(entries){
	return entries;
}

export default connect( mapStateToProps, {receiveEntries, addEntry} )(History)