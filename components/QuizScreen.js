'use strict';

import React, { Component } from 'react';
import QuizCell from './QuizCell'
import {Dimensions} from 'react-native'
import Reactotron from 'reactotron-react-native'

import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

class QuizScreen extends Component {
  render() {

	var totalCards = this.props.navigation.state.params.item.totalDeckCards
	var questions = this.props.navigation.state.params.item.questions

	var items = questions.map(item => {

		Reactotron.log(item)
		item['key'] = item.question
		return item
	}
	)

	Reactotron.log(items)
    return (
     <View style={{flex:1}}>
		<FlatList
			scrollEnabled={true}
			horizontal={true}
            data={items}
            renderItem={({item, index, separators}) => (

            	<View style={styles.container}>
                	<QuizCell item={item} index={index} totalCards={totalCards}></QuizCell>
                </View>
            )}
          />
     </View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		flex:1,
		width: Dimensions.get('window').width

	},

	view: {
		aspectRatio:1,
		marginRight:8,
		marginLeft:8,
		backgroundColor:'white',
		borderRadius:5,
		alignItems:'center'
	},

	touchableOpacity: {
		margin:8,
		justifyContent:'flex-end'
	}

});


export default QuizScreen;