import CurrentWeatherData from './CurrentWeatherData/CurrentWeatherData'
import ForecastData from './ForecastData/ForecastData'
import { useContext } from 'react'
import WeatherDataContext from '../../../../hoc/WeatherDataContext'

const WeatherData = () => {
	const { weatherData } = useContext(WeatherDataContext)
	return (
		<div>
			<CurrentWeatherData />
			{weatherData?.main && <ForecastData />}
		</div>
	)
}

export default WeatherData
