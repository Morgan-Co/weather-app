import { useContext } from 'react'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'
import { RiCelsiusLine } from 'react-icons/ri'

const WeatherTemp = () => {
	const { weatherData } = useContext(WeatherDataContext)
	return (
		<div>
			{weatherData && Math.round(weatherData.main.temp)}<RiCelsiusLine />
			<h1>{weatherData?.name}</h1>
		</div>
	)
}

export default WeatherTemp
