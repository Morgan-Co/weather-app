import WeatherTemp from './WeatherTemp/WeatherTemp'
import WeatherSideData from './WeatherSideData/WeatherSideData'
import { WeatherIcon } from './WeatherIcon/WeatherIcon'

const CurrentWeatherData = () => {
	return (
		<div>
			<WeatherIcon />
			<WeatherTemp />
			<WeatherSideData />
		</div>
	)
}

export default CurrentWeatherData
