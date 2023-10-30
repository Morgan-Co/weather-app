import { useContext } from 'react'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'

const WeatherSideData = () => {
	const { weatherData } = useContext(WeatherDataContext)
	return (
		<div>
			<div>{weatherData?.main.humidity}%</div>
			<div>{weatherData?.wind.speed} km/h</div>
		</div>
	)
}

export default WeatherSideData
