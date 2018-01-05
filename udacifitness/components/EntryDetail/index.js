import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import MetricCard from '../MetricCard'

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

	render(){

		const { metrics } = this.props

		return (
			<View style={styles.container}>
				<MetricCard metrics={metrics}/>
				<Text>Entry Detail - {this.props.navigation.state.params.entryId}</Text>
			</View>
		)
	}
}

function mapStateToProps(state, { navigation }){

	const { entryId } = navigation.state.params
	const metrics = state[entryId]

	return {
		entryId,
		metrics
	}

}

export default connect(mapStateToProps)(EntryDetail)