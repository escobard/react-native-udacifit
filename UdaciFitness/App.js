import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // this will align the child element towards the START of the main (y) axis of flexbox.
    // The flexbox guide section of the nanodegree is incredibly helpful for learning more about flexbox and its utilization.
    // justifyContent: 'flex-start'

    // this will align every child at the center of the main axis
    // justifyContent: 'center'

    // this will align every child element towards the END of the main axis
    //justifyContent: 'flex-end'

    // this will align every child so that the space between each child is even along the Main Axis. ​
    // justifyContent: 'space-between'

    // this will align every child element so that there is even space around each element along the Main Axis. ​
    justifyContent: 'space-around',

    // this will align the items in a row instead of the default column orientation of flexbox - rows are horizontal, columns are vertical
    flexDirection: 'row'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;