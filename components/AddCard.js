'use strict';

import React, { Component } from 'react';
import { addCard } from '../api'

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

class AddCard extends Component {


  state = {question:'',answer:''}

  addNewCard = () => {

  	var key = this.props.navigation.state.params.item.deckName
	var question = this.state

  	addCard(key, question)
  }


  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.textInputView}>
			<TextInput
		    	style={{margin:10}}
		    	placeholder={'Enter the question'}
		    	onChangeText={(text) => this.setState({question:text})}
		    	value={this.state.question}
			 />
		 </View>

		 <View style={styles.textInputView}>
			<TextInput
		    	style={{margin:10}}
		    	placeholder={'Enter the answer'}
		    	onChangeText={(text) => this.setState({answer:text})}
		    	value={this.state.answer}
			 />
		 </View>

		 <TouchableOpacity
		   style={styles.button}
  		   onPress={this.addNewCard}
    	 >
    	    <Text style={{color:'white'}}>Add Card</Text>
    	</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		alignItems:'stretch',
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


export default AddCard;