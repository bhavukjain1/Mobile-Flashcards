'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class DeckDetails extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		justifyContent:'flex-start',
		alignSelf:'stretch',
		backgroundColor:'lightgray',
		margin:10,
		height:100,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},

	image:{
		justifyContent:'flex-start',
		alignItems:'center',
		color:'white',
		marginLeft:20,
	},

	view: {
		justifyContent:'center',
		margin:20,
		alignSelf:'stretch',
		flex:1,
		alignItems:'center'
	},

	text:{
		margin: 4,
		textAlign:'center'
	}

});


export default DeckDetails;