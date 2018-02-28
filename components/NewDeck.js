'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux'


import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import { createDeck } from '../Actions'

class NewDeck extends Component {


  state = {text:''}


  addDeckToStorage = () => {

      if (this.state.text === '' ) {

        Alert.alert(
          'Message',
          'Please enter the deck name',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
           ],
          { cancelable: false }
        )
        return
      }

      this.props.dispatch(createDeck(this.state.text))
      this.setState({text:''})
      Alert.alert(
          'Message',
          'Deck Added Successfully!',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
           ],
          { cancelable: false }
        )

  }

  render() {
    return (
      <View style={styles.container}>
    		<Text style={styles.text}>What is the name of your new deck card?</Text>
    		<View style={styles.textInputView}>
  			<TextInput
  	        	style={{margin:10}}
  	        	placeholder={'Enter the deck name'}
  	        	onChangeText={(text) => this.setState({text})}
  	        	value={this.state.text}
  	      	/>
  		  </View>
    		<TouchableOpacity
    		   style={styles.button}
      		   onPress={this.addDeckToStorage}
    		>
    		<Text style={{color:'white'}}>Add Deck</Text>
    		</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 10
  },
  text: {
	alignSelf:'center',
  },
  textInputView: {
  	height: 35,
  	borderColor: 'gray',
  	borderWidth: 1,
  	margin: 20,
  },
  button:{
  	alignSelf:'center',
  	margin: 20,
  	backgroundColor:"gray",
  	height: 40,
  	width: 90,
  	justifyContent:'center',
  	alignItems:'center'
  }
});


export default connect()(NewDeck);