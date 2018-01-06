import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Location, Permissions } from 'expo'
import { Foundation } from '@expo/vector-icons'

import { calculateDirection } from '../../utils/helpers'

import { styles } from './styles'

// unfortunately this entire component will not properly work on emulators,
// and must be tested on real devices
export default class Live extends Component {
	state = {
		coords: null,
		status: null,
		direction: ''
	}

	componentDidMount(){
		Permissions.getAsync(Permissions.LOCATION)
			.then(({ status }) =>{
				if (status === 'granted') {
					return this.setLocation()
				}
				console.log('status', status)
				this.setState(() => ({ status }))
			})
			.catch((error) =>{
				console.warn('Error getting Location Permission: ', error)

				this.setState(() => ({ status: 'undetermined'}))
			})
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
						<TouchableOpacity onPress={this.askPermission} style={styles.button}>
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
				 			{direction}
				 		</Text>
				 	</View>
				 	<View style={styles.metricContainer}>
				 		<View style={styles.metric}>
				 			<Text style={styles.metricHeader}>
				 				Altitude
				 			</Text>
				 			<Text style={styles.metricsubHeader}>
				 				{Math.round(coords.altitude * 3.2808)} Feet
				 			</Text>
				 		</View>
				 	</View>
				 	<View style={styles.metricContainer}>
				 		<View style={styles.metric}>
				 			<Text style={styles.metricHeader}>
				 				Speed
				 			</Text>
				 			<Text style={styles.metricsubHeader}>
				 				{(coords.speed * 2.2369)} MPH
				 			</Text>
				 		</View>
				 	</View>
				 </View> 
				)
		}
	}

	askPermission(){

		// this asks for permission from the user, to utilize location services
		Permissions.askAsync(Permissions.LOCATION)
			.then(({ status }) => {
				if (status === 'granted') {
					return this.setLocation()
				}

				this.setState(() => ({ status }))
			})
			.catch((error) => console.warn('error asking Location permission: ', error))
	}

	setLocation(){

		// this watches the position, and sets additional properties for height, time interval, and distance
		Location.watchPositionAsync({
			enableHeightAccuracy: true,
			timeInterval: 1,
			distanceInterval: 1, 
		}, ({ coords }) => {

			// this calculates the direction, sets the new state for direction and the status to render
			// the correct sub component
			const newDirection = calculateDirection(coords.heading)
			const { direction } = this.state

			this.setState(() => ({
				coords,
				status: 'granted',
				direction: newDirection,
			}))

		})
	}

	render(){
		const { status, coords, direction } = this.state
		const currentStatus = status != 'undetermined' || 'denied' || null ? styles.container : styles.center  
		
		return (
			<View style={currentStatus}>
				{this.handleStatus(status)}
			</View>
		)
	}
}