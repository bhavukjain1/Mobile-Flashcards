'use strict';

import React, { Component } from 'react';
import DeckListCell from './DeckListCell'
import { Constants } from 'expo'
import { getDecks } from '../api'

import Reactotron from 'reactotron-react-native'

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';

class DeckList extends Component {

  state = {decks:[]}

  componentDidMount() {
    console.log('DeckList')

    var decks = Array()

    getDecks().then((data) => {
      Object.keys(data).forEach(function(key) {
        var newObj = {deckName:key, totalDeckCards:data[key].questions.length, key:key, questions:data[key].questions}
        decks.push(newObj)
      })

        this.setState({decks})

    })
  }

  render() {
    return (
      <View style={{flex:1}}>
          <FlatList
            data={this.state.decks}
            renderItem={({item, separators}) => (

            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', {item})}>
                <DeckListCell item={item}></DeckListCell>
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