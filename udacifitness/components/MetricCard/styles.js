import { StyleSheet, Platform } from 'react-native'
import {gray} from '../../utils/colors'

export default styles = StyleSheet.create({
	metric:{
		flexDirection: 'row',
		marginTop: 12,

	},
	metricTitle:{
		fontSize: 20
	},
	metricText:{
		fontSize: 16,
		color: gray
	}
})