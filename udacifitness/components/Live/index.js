import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { styles } from './styles'

export default class Live extends Component {
	state = {
		coords: null,
		status: null,
		direction: ''
	}
	handleStatus(status){
		switch(status){
			case null:
				return (
					<ActivityIndicator style={styles.activity}/>
				)
			case 'denied':
				return (
					<View>
						<Text>Denied</Text>
					</View>
				)
			case 'undetermined':
				return (
					<View>
						<Text>undetermined</Text>
					</View>
				)
			default:
				return (
				 <View>
				 	<Text>Live</Text>
				 	<Text>{JSON.stringify(this.state)}</Text>
				 </View> 
				)
		}
	}
	render(){
		const { status, coords, direction } = this.state
		
		return (
			<View>
				{this.handleStatus(status)}
			</View>
		)
	}
}