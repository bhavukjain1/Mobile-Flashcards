'use strict';

import React, { Component } from 'react';
import DeckListCell from './DeckListCell'
import { Constants } from 'expo'

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';

class DeckList extends Component {



  componentDidMount() {
    console.log('DeckList')
  }

  render() {
    return (
      <View style={{flex:1}}>
          <FlatList
            data={[{value:'1', key:'1'}]}
            renderItem={({item, separators}) => (

            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails')}>
                <DeckListCell></DeckListCell>
            </TouchableOpacity>
            )}
          />
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