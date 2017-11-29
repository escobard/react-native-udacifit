import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

import { styles } from './styles'
import { checkPlatform } from '../../utils/helpers'

// again, passed from the properties in helper.js into the component with the {...rest} method
export default function UdaciStepper({max, unit, step, value, onIncrement, onDecrement}){
	
	let currentPlatform = checkPlatform(styles.iosBtn, styles.androidBtn);
	
	return (
		<View style={styles.row}>
			<View style={styles.decrement}>
				<TouchableOpacity style={[currentPlatform, styles.leftBtn]} onPress={onDecrement}>
					<FontAwesome name='minus' size={30} color={'purple'} />				
				</TouchableOpacity>
				<TouchableOpacity style={[currentPlatform, styles.rightBtn]} onPress={onIncrement}>
					<FontAwesome name='plus' size={30} color={'purple'} />				
				</TouchableOpacity>
			</View>
			<View style={styles.mectricCounter}>
				<Text style={styles.value}>{value}</Text>
				<Text style={styles.unit}>{unit}</Text>
			</View>
		</View>
	)
}