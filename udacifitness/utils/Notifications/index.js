import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

import { NOTIFICATION_KEY, NOTIFICATION} from './constants'

export function clearLocalNotification(){
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync())
}

// returns an object which represents the notification
export function createNotification(){
	return NOTIFICATION
}

// checks if the user has already been presented with a notification
export function setLocalNotification(){
	
	// checks if notification key has been logged into AsyncStorage
	AsyncStorage.getItem(NOTIFICATION_KEY)
	.then(JSON.parse)
	.then((data) =>{

		//handles cases where the user is receiving notifications for the first time
		if (data === null) {
			Permissions.askAsync(Permissions.NOTIFICATIONS)

			// checks the returned value of the permission above
			.then(({ status }) =>{

				// if a notification has been granted, schedule another for tomorrow
				if (status === 'granted') {
					Notifications.cancelAllScheduledNotificationsAsync()

					let tomorrow = new Date()
					tomorrow.setDate(tomorrow.getDate() + 1)
					tomorrow.setHours(20)
					tomorrow.setMinutes(0)

					// creates the notification with the object returned from the function above
					Notifications.scheduleLocalNotificationAsync(
						createNotification(),

						{
							time: tomorrow,
							repeat: 'day',

						}
					)
				
				AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
				}

			})
		}
	})
}