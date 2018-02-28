export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'

import Reactotron from 'reactotron-react-native'


export function createDeck(deckName) {
	return {
		type:CREATE_DECK,
		deckName
	}
}

export function deleteDeck(deckName) {

	Reactotron.log('Actions')
	Reactotron.log(deckName)
	return {
		type:DELETE_DECK,
		deckName
	}
}

export function addCard({deckName, question, answer}) {
	return {
		type: ADD_CARD,
		deckName,
		question,
		answer
	}
}