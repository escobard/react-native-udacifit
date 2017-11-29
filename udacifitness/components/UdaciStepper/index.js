import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

import { styles } from './styles'

// again, passed from the properties in helper.js into the component with the {...rest} method
export default function UdaciStepper({max, unit, step, value, onIncrement, onDecrement}){
	return (
		<View style={styles.row}>
			<View style={styles.decrement}>
				<TouchableOpacity style={[styles.iosBtn, styles.leftBtn]} onPress={onDecrement}>
					<FontAwesome name='minus' size={30} color={'purple'} />				
				</TouchableOpacity>
				<TouchableOpacity style={[styles.iosBtn, styles.rightBtn]} onPress={onIncrement}>
					<FontAwesome name='plus' size={30} color={'purple'} />				
				</TouchableOpacity>
			</View>
			<View>
				<Text>{value}</Text>
				<Text>{unit}</Text>
			</View>
		</View>
	)
}