'use strict';

import React, { Component } from 'react';
import DeckListCell from './DeckListCell'
import { Constants } from 'expo'

import Reactotron from 'reactotron-react-native'

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

class DeckList extends Component {

  render() {

    const {decks} = this.props

    return (
      <View style={{flex:1}}>
          <FlatList
            data={Object.keys(decks)}
            keyExtractor={item => item}
            renderItem={({item, separators}) => (

            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', {item:decks[item]})}>
                <DeckListCell item={decks[item]}></DeckListCell>
            </TouchableOpacity>
            )}
          />
      </View>
    );
  }
}


 function mapStateToProps(state) {

    var deckList = {
      ...state
    }

    delete deckList['_persist']

    return {
      decks: deckList
    }
 }


export default connect(mapStateToProps)(DeckList)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});