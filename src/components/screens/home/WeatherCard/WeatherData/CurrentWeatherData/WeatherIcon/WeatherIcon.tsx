import { useContext } from 'react'
import { weatherIconsData } from '../../../../../../../data/weatherIconsData'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'

export const WeatherIcon = () => {
	const { selectCurrentWeatherIcon, weatherData } =
		useContext(WeatherDataContext)
	return <div>{selectCurrentWeatherIcon(weatherIconsData, weatherData)}</div>
}
