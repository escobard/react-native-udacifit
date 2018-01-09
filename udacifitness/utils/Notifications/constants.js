export const NOTIFICATION_KEY = 'UdaciFitness:notifications'

export const NOTIFICATION = {
		title: 'Log your stats!',
		body:"don't forget to log your stats for today!",
		ios: {
			sound: true,
		},
		android: {
			sound:true,
			priority: 'high',
			sticky: false,
			vibrate: true,
		}
}

export const TOMORROW = () => {
	
	// sets the date for the new notification
	let tomorrow = new Date()
	tomorrow.setDate(tomorrow.getDate() + 1)
	tomorrow.setHours(20)
	tomorrow.setMinutes(0)

	return tomorrow
}