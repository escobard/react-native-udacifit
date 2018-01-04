import { Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { purple, white } from '../../utils/colors'

import AddEntry from '../AddEntry'
import History from '../History'

// this is utilized to set up view navigation on react-native
// full documentation found here : https://reactnavigation.org/docs/navigators/tab
export const Tabs = TabNavigator({
	// determines the tab name
	History: {
		// determines the component rendered by this route
		screen: History,

		// determins the options, for full options view the documentation above
		navigationOptions: {
			tabBarLabel: 'History',
			tabBarIcon: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
		}
	},
	AddEntry: {
		screen: AddEntry,
		navigationOptions: {
			tabBarLabel: 'Add Entry',
			tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />
		},
	},
},
	{	
		// adds navigation options to the tab navigator component
		navigationOptions: {
			header: null
		},

		// this adds options to the entire tab navigator component
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? purple : white, 
			style: {
				height: 56,
				backgroundColor: Platform.os === 'ios' ? white : purple,
				shadowColor: 'rgba(0,0,0,0.24)',
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowRadius: 6,
				shadowOpacity: 1
			}
		}
})