import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

export default function dateHeader({ date }){
	return (
		<Text style={styles.datePicker}>
			{date}
		</Text>
	)
}