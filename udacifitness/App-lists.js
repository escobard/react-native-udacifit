import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Slider,
  // Views work great for elements that span less than the whole height of a view
  // ScrollView allows for the scrolling of elements within a component
  // best utilized with small data
  ScrollView,
  // this only renders the component that the user can currently see
  // passing the data array is the data that will be mapped, while maintaining scrollability
  // renderItem is the item being rendered within the flat list
  // best utilized with large data
  // this causes huge performance gains when rendering huge lists within a mobile application
  FlatList
} from 'react-native';

import getReviews from './utils/reviews';

const Review = ({name, text, avatar}) => {
  return(

    <View>
      <Text>{avatar}</Text>
      <Text>{name}</Text>
      <Text>{text}</Text>
    </View>

  )
}

export default class App extends React.Component {
  renderItem = ({ item }) =>{
    return <Review {...item}/>
  }
  render() {
    let reviews = getReviews

    return (
      <View style={styles.container}>
        <FlatList data={reviews} renderItem={this.renderItem}/>
      </View>
      <ScrollView style={styles.container}>
        {reviews.map(({name, text, avatar}) => <Review key={name} name={name} text={text} avatar={avatar}/>)}
      </ScrollView>
      
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
