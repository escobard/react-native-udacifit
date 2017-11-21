import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  // for local images you have to use the require prop like so:
  // <Image style={styiles.img} source={require('./tylermcginnis.phg')}/>
  Image,
  Slider
} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.img} source={{uri: 'https://tylermcginnis.com/tyler-mcginnis.jpg'}}/>
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
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
