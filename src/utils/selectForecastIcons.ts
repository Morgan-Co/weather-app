import { IWeatherIconsData } from '../interfaces/IWeatherIconsData'
import { IForecast } from '../interfaces/IForecast'

export const selectForecastIcons = (weatherIconsData: IWeatherIconsData, forecastWeather: IForecast) => {
	const selectedIcons = []
	for (const key in forecastWeather) {
		for (const title in weatherIconsData) {
			const iconData = weatherIconsData[title]
			const weatherCode = forecastWeather[key].weather[0].id

			if (weatherCode && iconData.code.includes(weatherCode)) {
				const icon = iconData.icon

				if (
					icon &&
					typeof icon === 'object' &&
					'Day' in icon &&
					'Night' in icon
				) {
					const sunrise = new Date(forecastWeather[key].sys.sunrise * 1000)
					const sunset = new Date(forecastWeather[key].sys.sunset * 1000)
					const currentTime = new Date()

					const selIcon =
						currentTime > sunrise && currentTime < sunset
							? icon.Day
							: icon.Night
					selectedIcons.push(selIcon)
				} else {
					selectedIcons.push(icon)
				}
			}
		}
	}
	return selectedIcons
}