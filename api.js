import { AsyncStorage } from 'react-native'

const QUIZ_STORAGE_KEY = 'MobileFlashcards:quiz'


export function addNewDeck(deckName) {

	AsyncStorage.mergeItem(QUIZ_STORAGE_KEY, JSON.stringify({
		[deckName]: {
			title:deckName,
			questions:[]
		}
	}))
}


export function getDecks() {

	return AsyncStorage.getItem(QUIZ_STORAGE_KEY)
			.then((results) => {
				const data = JSON.parse(results)
				return data
			})

}


export function deleteDeck(deckName) {

	AsyncStorage.getItem(QUIZ_STORAGE_KEY)
			.then((results) => {
				const data = JSON.parse(results)
				data[deckName] = undefined
				delete data[deckName]

				AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(data))
			})
}



export function clearAll() {

	AsyncStorage.clear()
}