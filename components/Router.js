'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';


import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import DeckDetails from './DeckDetails'
import AddCard from './AddCard'
import QuizScreen from './QuizScreen'
import ScoreView from './ScoreView'
import {FontAwesome, Ionicons} from '@expo/vector-icons'


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

export const Router = StackNavigator({

  Home:{
    screen: Tabs,
    navigationOptions: ({navigation}) =>  ({

    })
  },

  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({navigation}) =>  ({
        title:'Deck Details',
        key:'DeckDetails',
    })
  },

  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title:'Add Card'
    })
  },

  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: ({navigation}) => ({
      title:'Quiz'
    })
  },

  ScoreView: {
    screen: ScoreView,
    navigationOptions: ({navigation}) => ({
      title:'Score',
      headerLeft:null,
      gesturesEnabled:false
    })
  }
})