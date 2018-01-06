import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons'


import { styles } from './styles'

export default class Live extends Component {
	state = {
		coords: null,
		status: 'granted',
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
				 <View style={styles.container}>
				 	<View style={styles.directionContainer}>
				 		<Text style={styles.header}>
				 			You're heading
				 		</Text>
				 		<Text style={styles.direction}>
				 			North
				 		</Text>
				 	</View>
				 	<View style={styles.metricContainer}>
				 		<View style={styles.metric}>
				 			<Text style={styles.metricHeader}>
				 				Altitude
				 			</Text>
				 			<Text style={styles.metricsubHeader}>
				 				{200} Feet
				 			</Text>
				 		</View>
				 	</View>
				 	<View style={styles.metricContainer}>
				 		<View style={styles.metric}>
				 			<Text style={styles.metricHeader}>
				 				Speed
				 			</Text>
				 			<Text style={styles.metricsubHeader}>
				 				{300} Feet
				 			</Text>
				 		</View>
				 	</View>
				 </View> 
				)
		}
	}

	askPermission(){

	}

	render(){
		const { status, coords, direction } = this.state
		const currentStatus = status != 'undetermined' || 'denied' || null ? styles.container : styles.null  
		
		return (
			<View style={currentStatus}>
				{this.handleStatus(status)}
			</View>
		)
	}
}