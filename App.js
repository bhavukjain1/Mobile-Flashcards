import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
    return (
        <Tabs />
    )
  }
}


const Tabs = TabNavigator({

  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel:'Decks'
    }
  },

  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel:'New Deck'
    }
  },

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
