import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class EntryDetail extends Component {
	
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
		return (
			<View>
				<Text>Entry Detail - {this.props.navigation.state.params.entryId}</Text>
			</View>
		)
	}
}