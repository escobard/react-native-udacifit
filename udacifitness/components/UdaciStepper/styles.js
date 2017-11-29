import { StyleSheet } from 'react-native';
import { white, purple} from '../../utils/colors'

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
	leftBtn:{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
	rightBtn:{
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0
	}
})