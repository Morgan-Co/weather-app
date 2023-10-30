import WeatherTemp from './WeatherTemp/WeatherTemp'
import WeatherSideData from './WeatherSideData/WeatherSideData'

const CurrentWeatherData = () => {
	return (
		<div>
			<WeatherTemp />
			<WeatherSideData/>
		</div>
	)
}

export default CurrentWeatherData
