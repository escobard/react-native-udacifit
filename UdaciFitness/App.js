import React, { Component } from 'react'
import { 
  StyleSheet,
  Text, 
  View,
  // this component can be used to check the Platform of the application
  // can be utilized in the following way: 
  // Platform.OS === 'ios' ? do stuff : do other stuff
  // Platform.OS === 'android' ? do stuff : do other stuff
  Platform,
  Slider
} from 'react-native'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import { purple, white } from './utils/colors'
import { setLocalNotification } from './utils/Notifications'

import reducer from './reducers'

import { MainNavigator } from './components/Navigation'
import UdaciStatusBar from './components/Navigation/statusBar'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

// this creates our styles for specific views
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
