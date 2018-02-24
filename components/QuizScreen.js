'use strict';

import React, { Component } from 'react';
import QuizCell from './QuizCell'
import {Dimensions} from 'react-native'

import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

class QuizScreen extends Component {
  render() {
    return (
     <View style={{flex:1}}>
		<FlatList
			scrollEnabled={true}
			horizontal={true}
            data={[{value:'1', key:'1'}, {value:'1', key:'2'}, {value:'1', key:'3'}]}
            renderItem={({item, separators}) => (

            	<View style={styles.container}>
                	<QuizCell></QuizCell>
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