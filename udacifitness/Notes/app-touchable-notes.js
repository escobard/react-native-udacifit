import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,

  // This transforms the component from one color to another when you press on it
  TouchableHighlight,
  // only usable in android, and gives the button the ripple effect seen in native android apps
  TouchableNativeFeedback,
  // changes the opacity of the button so that the background is see through
  TouchableOpacity,
  // does not change the button apperance and just returns the function
  TouchableWithoutFeedback 
} from 'react-native';

// we can use the following to import icons with the following code
// the import path is provided by the icon library we choose
import { Ionicons } from '@expo/vector-icons'

import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  componentDidMount(){
    console.log('Before')
    debugger
    console.log('After')
    // testing comment
    // comments work outside of the `render` method due to how react native compiles code for each native OS
    // Two common elements with native are:
    // <View> Similar to a div, you can attach styles and include nested components within
    // notice how the styles are added to the View below - these are created as a const and then added to the native app accordingly
    // <Text> Same as a p or span tag
    // for icons with the react-native-app starter library it has support for vector icons that can be seen here: https://expo.github.io/vector-icons/
    // another list can be found here: https://github.com/oblador/react-native-vector-icons
    // Add icons by utilizing the imported component as shown below
    // can add options such as color for color and size for size
  }
  handlePress(){
    alert('Hello!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-pizza' color='red' size={200}/>
        <AddEntry />
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#000'>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={this.handlePress}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Touchable Opacity</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableNativeFeedback 
         background={TouchableNativeFeedback.SelectableBackground()}
         onPress={this.handlePress}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Touchable Opacity</Text>
            </View>
        </TouchableNativeFeedback>
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
