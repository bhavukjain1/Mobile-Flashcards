'use strict';

import React, { Component } from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class DeckListCell extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<MaterialIcons
      		 style={styles.image}
              name='credit-card'
              size={35}
        />
        <View style={styles.view}>
        	<Text style={styles.text}>React Native</Text>
        	<Text style={[styles.text, {fontSize:12}]}>3 Cards</Text>
        </View>
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


export default DeckListCell;