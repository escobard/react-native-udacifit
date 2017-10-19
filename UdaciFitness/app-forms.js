import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Slider,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Image
} from 'react-native';


export default class App extends React.Component {
  state={
    input: '@tylermcginnis',
    showInput: false,
  }
  handleToggleSwitch = () =>{
    this.setState((state) => ({
      showInput: !state.showInput
    }))
  }
  handleTextChange =(input) =>{
    this.setState({
      input
    })
  }
  // TextInput the event handler at the bottom for text changes needs to be used for react native
  // otherwise it throws an error

  // the KeyboardAvoidingView component is VERY useful for forms and inputs that have the keyboard overlap
  // the input in some native projects
  render() {
    const { input, showInput } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Image
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
        <Switch
            value={showInput}
            onValueChange={this.handleToggleSwitch}
        />
        {showInput === true && (
            <TextInput 
                value={input} 
                style={styles.input} 
                onChange={(event)=>this.handleTextChange(event.nativeEvent.text)}/>
        )}
      </KeyboardAvoidingView>

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
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
  }
});
