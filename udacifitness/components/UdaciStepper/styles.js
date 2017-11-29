import { StyleSheet } from 'react-native';

import { white, purple, gray, blue} from '../../utils/colors'
import { midFont, lrgFont } from '../../utils/fonts'

export const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	decrement:{
		flexDirection: 'row'
	},
	iosBtn: {
		backgroundColor: white,
		borderColor: purple,
		borderWidth:1,
		borderRadius: 3,
		padding: 5, 
		paddingLeft: 25,
		paddingRight: 25
	},
	androidBtn: {
		margin: 5,
		backgroundColor: blue,
		padding: 10,
		borderRadius: 2,
	},
	leftBtn:{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
	rightBtn:{
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0
	},
	metricCounter:{
		width: 85,
		justifyContent: 'center',
		alignItems: 'center'
	},
	value:{
		fontSize: lrgFont, 
		textAlign: 'center'
	},
	unit:{
		fontSize: midFont,
		textAlign: 'center',
		color: 'gray'
	}
})
