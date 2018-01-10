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