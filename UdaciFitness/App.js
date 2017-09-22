import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount(){
    console.log('Before')
    debugger
    console.log('After')
    // testing comment
    // comments work outside of the `render` method due to how react native compiles code for each native OS
    // Two common elements with native are:
    // <View> Similar to a div, you can attach styles and include nested components within
    // <Text> Same as a p or span tag
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

// this creates our styles for specific views
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
