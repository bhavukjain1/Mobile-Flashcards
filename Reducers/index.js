import {
	CREATE_DECK,
	DELETE_DECK,
	ADD_CARD
} from '../Actions'

import { REHYDRATE } from 'redux-persist';

import Reactotron from 'reactotron-react-native'

function decks(state=default_state, action) {

	switch(action.type) {
		case CREATE_DECK:
			return {
				...state,
				[action.deckName]: {
					title:action.deckName,
					questions:[]
				}
			}


		case DELETE_DECK:

			let newState = {...state}
			delete newState[action.deckName]
			return newState

		case ADD_CARD:
			var card = {question:action.question, answer:action.answer}
			Reactotron.log(card)
			return {
				...state,
				[action.deckName]: {
					...state[action.deckName],
					questions:[...state[action.deckName].questions, card]
				}
			}

		case REHYDRATE:
			Reactotron.log('REHYDRATE')
			return state
		default:
			return state
	}
}

const default_state = {

	React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default decks