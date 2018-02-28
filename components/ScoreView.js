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
    		<TouchableOpacity onPress={this.goBack}>
    			<Text style={[{color:'#0076FF'},{fontSize:16}, {margin: 30}, {alignSelf:'center'}]}>Done</Text>
    		</TouchableOpacity>
      </View>
    );
  }

  goBack = () => {
  	this.props.navigation.popToTop()
  }
}

export default ScoreView;