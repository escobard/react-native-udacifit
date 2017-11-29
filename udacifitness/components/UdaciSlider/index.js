import React, { Component } from 'react'
import { View, Text, Slider } from 'react-native'

import { styles } from './styles'

// the units here are from the `helper.js` file which are passed into this component
// with the {...rest} operand which passes the remaining properties from helper.js 
// into this component as props - very neat!
export default function UdaciSlider({max, unit, step, value, onChange}){
	return (
		<View style={styles.row}>

			<Slider
			  style={styles.slider}
			  step={step}
			  value={value}
			  maximumValue={max}
			  minimumValue={0}
			  onValueChange={onChange}
			/>
			<View style={styles.metricCounter}>
				<Text style={styles.value}>{value}</Text>
				<Text style={styles.unit}>{unit}</Text>
			</View>
		</View>
	)
}