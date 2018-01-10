export const tomorrow = () => {
					let tomorrow = new Date()
					tomorrow.setDate(tomorrow.getDate() + 1)
					tomorrow.setHours(20)
					tomorrow.setMinutes(0)

					return tomorrow
}