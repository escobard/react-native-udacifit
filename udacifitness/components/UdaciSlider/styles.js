import { StyleSheet } from 'react-native'

import { gray } from '../../utils/colors'

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center'
	},
	metricCounter: {
		width: 85,
		justifyContent: 'center',
		alignItems: 'center'
	},
	value: {
		fontSize: 24, 
		textAlign: 'center'
	},
	unit: {
		fontSize: 18,
		color: gray
	},
	slider: {
		flex: 1
	}
})