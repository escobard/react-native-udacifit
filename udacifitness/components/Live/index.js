import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons'


import { styles } from './styles'

export default class Live extends Component {
	state = {
		coords: null,
		status: 'denied',
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
					<View style={styles.center}>
						<Foundation name='alert' size={50}/>
						<Text>
							You denied your location. You can fix this by visiting your settings
							and enabling location services for this app. 
						</Text>
					</View>
				)
			case 'undetermined':
				return (
					<View style={styles.center}>
						<Foundation name='alert' size={50}/>
						<Text>
							You need to enable location services for this app.
						</Text>
						<TouchableOpacity onPress={this.askPermisssion} style={styles.button}>
							<Text style={styles.buttonText}>
								Enable
							</Text>
						</TouchableOpacity>
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

	askPermission(){

	}

	render(){
		const { status, coords, direction } = this.state
		
		return (
			<View style={styles.center}>
				{this.handleStatus(status)}
			</View>
		)
	}
}