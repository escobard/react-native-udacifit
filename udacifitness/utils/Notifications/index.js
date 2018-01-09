import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permission } from 'expo'

import { NOTIFICATION_KEY, NOTIFICATION, TOMORROW } from './constants'

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
			Permissions.asAsync(Permissions.NOTIFICATIONS)

			// checks the returned value of the permission above
			.then(({ status }) =>{

				// if a notification has been granted, schedule another for tomorrow
				if (status === 'granted') {
					Notifications.cancelAllScheduledNotificationsAsync()

					// creates the notification with the object returned from the function above
					Notifications.scheduleLocalNotificationsAsync(
						createNotification(),
						{
							time: TOMORROW,
							repeat: 'day',

						}
					)
				
				AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
				}

			})
		}
	})
}