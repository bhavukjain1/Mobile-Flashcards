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

	state = {correctAnswers:0}

	optionSelected = (index,val) => {

		this.setState({
			correctAnswers:this.state.correctAnswers + val
		}, () => {
			var totalCards = this.props.navigation.state.params.item.totalDeckCards
			if (index === totalCards) {
				this.props.navigation.navigate('ScoreView', {correct:this.state.correctAnswers,totalQuestions:totalCards})
			}else {
				this.list.scrollToIndex({index:index})
			}

		})


	}



  render() {

	var totalCards = this.props.navigation.state.params.item.totalDeckCards
	var questions = this.props.navigation.state.params.item.questions

	var items = questions.map(item => {

		Reactotron.log(item)
		item['key'] = item.question
		return item

	  })

    return (
     <View style={{flex:1}}>
		<FlatList
			scrollEnabled={false}
			horizontal={true}
            data={items}
            ref={(ref) => { this.list = ref }}
            renderItem={({item, index, separators}) => (

            	<View style={styles.container}>
                	<QuizCell item={item} index={index} totalCards={totalCards} scroll={this.optionSelected}></QuizCell>
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