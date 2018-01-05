import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { addEntry } from '../../actions'
import { removeEntry } from '../../utils/api'
import { timeToString, getDailyReminderValue } from '../../utils/helpers'

import MetricCard from '../MetricCard'
import TextButton from '../TextButton'

import {styles} from './styles'

class EntryDetail extends Component {

	// this adds further navigation options to the child component of a StackNavigator / TabNavigator component
	static navigationOptions = ({ navigation }) => {
		const { entryId } = navigation.state.params
		
		const year = entryId.slice(0, 4)
		const month = entryId.slice(5,7)
		const day = entryId.slice(8)

		return {
			title: `${month}/${day}/${year}`
		}
	}

	reset = () => {
		
		const { remove, goBack, entryId} = this.props

		remove()
		goBack()
		removeEntry(entryId)
	}

	// this is utilized to stop the component from breaking on empty entry data
	shouldComponentUpdate(nextProps){
		return nextProps.metrics !== null && !nextProps.metrics.today
	}

	render(){

		const { metrics } = this.props

		return (
			<View style={styles.container}>
				<MetricCard metrics={metrics}/>
				<TextButton onPress={this.reset} style={styles.button}> RESET </TextButton>
			</View>
		)
	}
}

function mapStateToProps(state, { navigation }){

	// this should ALSO be refactored into action creators that
	// feed into the reducers to utilize proper react-redux syntax structure
	const { entryId } = navigation.state.params
	const metrics = state[entryId]

	return {
		entryId,
		metrics
	}

}

function mapDispatchToProps(dispatch, { navigation }){
	const { entryId } = navigation.state.params

	// the action here should be refactored, as should the goBack method
	// into action creators to avoid cluttering the component code
	return {
		remove: () => dispatch(addEntry({
			[entryId]: timeToString() === entryId 
			? getDailyReminderValue()
			: null
		})),
		goBack: () => navigation.goBack()
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)