'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class ScoreView extends Component {
  render() {
    return (
      <View style={{margin:10}}>
    		<Text>You gave {this.props.navigation.state.params.correct} out of {this.props.navigation.state.params.totalQuestions} correct answers.</Text>

        <View style={[{flexDirection:'row'}, {alignSelf:'center'}]}>
      		<TouchableOpacity onPress={this.restartQuiz}>
      			<Text style={[{color:'#0076FF'},{fontSize:16}, {margin: 30}, {alignSelf:'center'}]}>Restart Quiz</Text>
      		</TouchableOpacity>
          <TouchableOpacity onPress={this.goBackToDeck}>
            <Text style={[{color:'#0076FF'},{fontSize:16}, {margin: 30}, {alignSelf:'center'}]}>Go To Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  goBackToDeck = () => {
  	this.props.navigation.pop(2)
  }

  restartQuiz = () => {
    this.props.navigation.pop()
  }
}

export default ScoreView;