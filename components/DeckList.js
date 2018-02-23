'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
		<Text>Hello</Text>
	  </View>
    );
  }
}


export default DeckList;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});