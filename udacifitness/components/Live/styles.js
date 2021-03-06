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
	},
	directionContainer: {
		flex:1,
		justifyContent: 'center'
	},
	header: {
		fontSize: 35,
		textAlign: 'center',
	},
	metricHeader: {
		fontSize: 35,
		textAlign: 'center',
		color: white
	},
	direction: {
		color: purple,
		fontSize: 120,
		textAlign: 'center'
	},
	metricContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: purple,
	},
	metric: {
		flex: 1,
		paddingTop: 15,
		paddingBottom: 15,
		backgroundColor: 'rgba(255,255,255,0.1)',
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 10,
		marginRight: 10,
	},
	subHeader: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 5,
	},
	metricsubHeader: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 5,
	},
})