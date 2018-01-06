import { StyleSheet } from 'react-native'

import { white, purple } from '../../utils/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30,
	},
	button: {
		padding: 10,
		backgroundColor: purple,
		alignSelf: 'center',
		borderRadius: 5,
		margin: 20,
	},
	buttonText: {
		color: white,
		fontSize: 20,
	},
	activity:{
		marginTop: 30,
	}
})