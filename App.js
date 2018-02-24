import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import {FontAwesome, Ionicons} from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
        <MainNavigator />
    )
  }
}


const Tabs = TabNavigator({

  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel:'Decks',
      tabBarIcon: (({ tintColor }) => <FontAwesome name='home' size={25} color={tintColor}></FontAwesome>),
      title:'Decks'
    }
  },

  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel:'New Deck',
      tabBarIcon: (({ tintColor }) => <Ionicons name='md-add' size={25} color={tintColor}></Ionicons>),
      title:'New Deck'
    }
  }}, {

  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor:'gray'
  }

})

const MainNavigator = StackNavigator({

  Home:{
    screen: Tabs,
    navigationOptions: ({navigation}) =>  ({

    })
  },

  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({navigation}) =>  ({
        title:'Deck Details'
    })
  },

  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title:'Add Card'
    })
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
