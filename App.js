import './ReactotronConfig'
import Reactotron from 'reactotron-react-native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './components/Router'
import { PersistGate } from 'redux-persist/integration/react'
import ConfigureStore from './store'
import { Provider } from 'react-redux'
import { setupLocalNotification } from './LocalNotification'

export default class App extends React.Component {


  componentDidMount() {
    setupLocalNotification()
  }

  render() {

    const {store, persistor} = ConfigureStore()

    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={{flex:1}}>
              <Router />
            </View>
          </PersistGate>
        </Provider>
    )
  }
}
