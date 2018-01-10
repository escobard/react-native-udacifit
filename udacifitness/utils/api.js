// AsyncStorage is the same a localStorage for a browser except for native applications
// this will be a good refresher for localStorage for the MWDND projects
// for more on AsyncStorage, and the methods allowed visit this URL: https://facebook.github.io/react-native/docs/asyncstorage.html#methods

import { AsyncStorage } from 'react-native';
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from './calendar';

export function submitEntry({entry, key}){
	// this adds it to the database calling the AsyncStorage method
	return AsyncStorage
	// this merges the item to the storage key designated in the calendar util
	.mergeItem(CALENDAR_STORAGE_KEY,
	// turns the json into a string
	JSON.stringify({
		[key]: entry,
	}))

}

export function removeEntry(key){
	// grabs the entire DB based on the provided key
	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
	// then grabs the results
	.then((results) =>{
		// turns the data into JSON
		const data = JSON.parse(results);
		// grabs the data with the key and sets is as undefined (not sure if this is optimal)
		data[key] = undefined;
		// deletes the selected key
		delete data[key];
		// sets the new database based on the new data after the key has been removed
		// then turns it into a string
		AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
	})
	.catch((error) => {console.log('error with remove entry', error)})

}

export function fetchCalendarResults(){
	// gets the caledar storage key
	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)

	// returns the formatted date
	.then(formatCalendarResults)
}