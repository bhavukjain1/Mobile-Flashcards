'use strict';

import React, { Component } from 'react';
import { deleteDeck } from '../api'

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class DeckDetails extends Component {


  addCard = () => {
	this.props.navigation.navigate('AddCard')
  }

  startQuiz = () => {
	this.props.navigation.navigate('QuizScreen')
  }

  deleteDeck = () => {

	deleteDeck(this.props.navigation.state.params.item.deckName)
  	this.props.navigation.goBack()

  }

  render() {
    return (
      <View style={styles.container}>
		<Text style={[styles.text, {fontSize:18}, {margin: 8}]}>{this.props.navigation.state.params.item.deckName}</Text>
		<Text style={[styles.text, {fontSize:12}, {marginBottom: 8}]}>{this.props.navigation.state.params.item.totalDeckCards} cards</Text>
		<Button title="Add Card" onPress={this.addCard}/>
		<Button title="Start Quiz" onPress={this.startQuiz}/>
		<Button title="Delete Deck" onPress={this.deleteDeck}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		backgroundColor:'lightgray',
		margin:10,
		// height:100,
		borderRadius: 5,
		alignItems: 'center',
	},

	view: {
		justifyContent:'center',
		margin:20,
		alignSelf:'stretch',
		flex:1,
		alignItems:'center'
	},

	text:{

		textAlign:'center'
	}

});


export default DeckDetails;