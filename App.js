import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import {FontAwesome, Ionicons} from '@expo/vector-icons'

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
      tabBarLabel:'Decks',
      tabBarIcon: (({ focused, tintColor }) => <FontAwesome name='home' size={25} color={tintColor}></FontAwesome>)
    }
  },

  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel:'New Deck',
      tabBarIcon: (({ focused, tintColor }) => <Ionicons name='md-add' size={25} color={tintColor}></Ionicons>)
    }
  }}, {

  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor:'gray'
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
