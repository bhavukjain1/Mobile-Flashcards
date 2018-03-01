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
			var totalCards = this.props.navigation.state.params.item.questions.length
			if (index === totalCards) {
				this.setState({correctAnswers:0})
				this.props.navigation.navigate('ScoreView', {correct:this.state.correctAnswers,totalQuestions:totalCards})
				this.list.scrollToIndex({index:0})
			}else {
				this.list.scrollToIndex({index:index})
			}

		})

	}



  render() {

	var totalCards = this.props.navigation.state.params.item.questions.length
	var questions = this.props.navigation.state.params.item.questions

    return (
     <View style={{flex:1}}>
		<FlatList
			scrollEnabled={false}
			horizontal={true}
            data={questions}
            ref={(ref) => { this.list = ref }}
            keyExtractor={item => item.question}
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