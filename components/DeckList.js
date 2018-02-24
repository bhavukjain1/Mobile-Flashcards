'use strict';

import React, { Component } from 'react';
import DeckListCell from './DeckListCell'

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
		  <DeckListCell />
	  </View>
    );
  }
}


export default DeckList;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});