import React from 'react'
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
import reducer from './reducers'

import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AddEntry/>
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
});
