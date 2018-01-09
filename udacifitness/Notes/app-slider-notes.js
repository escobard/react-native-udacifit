import React, { Component } from 'react'
import { 
  StyleSheet,
  Text, 
  View,
  Slider
} from 'react-native'


export default class App extends Component {
  state ={
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
         value={this.state.value}
         onValueChange={(value) => this.setState(()=>({value}))}
         minimumValue={-10}
         maximumValue={10}
         step={1} />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

// this creates our styles for specific views
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent : 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});
