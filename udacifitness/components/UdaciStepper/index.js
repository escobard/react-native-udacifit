import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

import { styles } from './styles'
import { checkPlatform } from '../../utils/helpers'

// again, passed from the properties in helper.js into the component with the {...rest} method
export default function UdaciStepper({max, unit, step, value, onIncrement, onDecrement}){
	
	let iosButtons = () => {
		return (
			<View style={styles.decrement}> 
				<TouchableOpacity style={[styles.iosBtn, styles.leftBtn]} onPress={onDecrement}>
					<Entypo name='minus' size={30} color={'purple'} />				
				</TouchableOpacity>
				<TouchableOpacity style={[styles.iosBtn, styles.rightBtn]} onPress={onIncrement}>
					<Entypo name='plus' size={30} color={'purple'} />				
				</TouchableOpacity>
			</View>
		)
	};

	let androidButtons = () => {
		return(
			<View style={styles.decrement}>
				<TouchableOpacity style={[styles.androidBtn, styles.leftBtn]} onPress={onDecrement}>
					<FontAwesome name='minus' size={30} color={'white'} />				
				</TouchableOpacity>
				<TouchableOpacity style={[styles.androidBtn, styles.rightBtn]} onPress={onIncrement}>
					<FontAwesome name='plus' size={30} color={'white'} />				
				</TouchableOpacity>
			</View>
		)

	};

	let btnStyles = checkPlatform(iosButtons(), androidButtons());
	
	return (
		<View style={styles.row}>
			<View style={styles.decrement}>
				{btnStyles}
			</View>
			<View style={styles.mectricCounter}>
				<Text style={styles.value}>{value}</Text>
				<Text style={styles.unit}>{unit}</Text>
			</View>
		</View>
	)
}