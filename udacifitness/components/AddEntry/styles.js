import { StyleSheet} from 'react-native';
import { white, purple } from '../../utils/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white,
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
	},
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40
	},
	androidSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 60,
		paddingRight: 60,
		height: 45,
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center' 
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	reset:{
		padding: 10
	}
})