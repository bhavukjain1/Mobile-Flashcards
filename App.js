import './ReactotronConfig'
import Reactotron from 'reactotron-react-native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './components/Router'

export default class App extends React.Component {
  render() {
    return (
        <Router />
    )
  }
}
