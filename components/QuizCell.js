'use strict';

import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class QuizCell extends Component {

  render() {

    return (
     <View style={styles.container}>
		<Text style={[{margin:8}, {fontSize:16}]}>{this.props.index + 1}/{this.props.totalCards}</Text>
		<View style={styles.view}>

			<View style={[{flex:1}, {justifyContent:'center'}]}>
				<Text style={[{textAlign:'center'}, {margin: 10}]}>{this.props.item.question}</Text>
			</View>
			<TouchableOpacity style={styles.touchableOpacity}>
				<Text style={[{color:'#0076FF'},{fontSize:14}]}>Question</Text>
			</TouchableOpacity>
		</View>

		<TouchableOpacity style={styles.touchableOpacity}>
			<Text style={[{color:'#0076FF'},{fontSize:16}, {margin: 10}]}>Yes, I got it</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.touchableOpacity}>
			<Text style={[{color:'#0076FF'},{fontSize:16}, {margin: 10}]}>Nope, I still need to learn</Text>
		</TouchableOpacity>

     </View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		backgroundColor:'lightgray',
		margin:10,
		borderRadius:5
	},

	view: {
		aspectRatio:1,
		marginRight:8,
		marginLeft:8,
		backgroundColor:'white',
		borderRadius:5,
		alignItems:'center'
	},

	touchableOpacity: {
		margin:8,
		justifyContent:'flex-end'
	}

});


export default QuizCell;