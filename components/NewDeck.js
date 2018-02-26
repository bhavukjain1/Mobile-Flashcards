'use strict';

import React, { Component } from 'react';
import {Alert} from 'react-native'
import { addNewDeck, clearAll } from '../api'


import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

class NewDeck extends Component {


  state = {text:''}


  componentDidMount() {
    console.log('NewDeck')
  }

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

      addNewDeck(this.state.text)
  }

  componentDidMount() {

    // clearAll()
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


export default NewDeck;