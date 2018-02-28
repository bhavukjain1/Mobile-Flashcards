'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

import { connect } from 'react-redux'
import { deleteDeck } from '../Actions'

import Reactotron from 'reactotron-react-native'

class DeckDetails extends Component {


  addCard = () => {

  	const item = this.props.deck
	this.props.navigation.navigate('AddCard', {item})
  }

  startQuiz = () => {

  	const item = this.props.deck

  	if(item.questions.length === 0) {
		Alert.alert(
	      'Message',
	      'Please add a card to continue',
	      [
	        {text: 'OK', onPress: () => console.log('OK Pressed')},
	       ],
	      { cancelable: false }
		 )
  		return
  	}
	this.props.navigation.navigate('QuizScreen', {item})
  }

  deleteDeckFromList = () => {

	const title = this.props.deck.title

	this.props.dispatch(deleteDeck(title))
  	this.props.navigation.popToTop()

  }

  render() {

  	const {deck} = this.props

    return (
      <View style={styles.container}>
      {deck &&
      	<View>
			<Text style={[styles.text, {fontSize:18}, {margin: 8}]}>{this.props.deck.title}</Text>
			<Text style={[styles.text, {fontSize:12}, {marginBottom: 8}]}>{this.props.deck.questions.length} cards</Text>
			<Button title="Add Card" onPress={this.addCard}/>
			<Button title="Start Quiz" onPress={this.startQuiz}/>

		</View>
	  }
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


function mapStateToProps(state, ownProps) {

	return{
		deck:state[ownProps.navigation.state.params.item.title]
	}
}

export default connect(mapStateToProps)(DeckDetails);