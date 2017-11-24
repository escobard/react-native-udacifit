import React from 'react'
import { 
  StyleSheet,
  Text, 
  View,
  Slider
} from 'react-native'

/* For inline styles, example below - inline styles are NOT recommended
export default class App extends React.Component {

  render() {
    return (

        <View style={{flex: 1, marginLeft: 10, marginRight: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'red'}}>Hello!</Text>
        </View>
    );
  }
} */

// this is the best way to style components - we should always refactor styles for each element in a constant that can be used for scalability
export default class App extends React.Component {

  render() {
    return (

        <View style={styles.container}>
          <Text style={styles.text}>Hello!</Text>
        </View>
    );
  }
}

/* this is one way to add styles with a simple constant
const styles = {
  container: {
    flex: 1, 
    marginLeft: 10, 
    marginRight: 10, 
    alignItems: 'center', 
    justifyContent: 'center'},
  text: {
    color: 'red'
  }
} */

// another way is with the StyleSheet.create() method - this apparently provides performance benefits so its optimal to utilize
// this method for styling

const styles = styleSheet.create({
  container: {
    flex: 1, 
    marginLeft: 10, 
    marginRight: 10, 
    alignItems: 'center', 
    justifyContent: 'center'},
  text: {
    color: 'red'
  }
})
