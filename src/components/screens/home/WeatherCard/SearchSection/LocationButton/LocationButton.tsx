import { useContext } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import styles from './LocationButton.module.scss'

const LocationButton = () => {
	const {
		getLocationWeather,
		setWeatherData,
		getLocationForecast,
		setForecastWeather,
	} = useContext(WeatherDataContext)
	return (
		<button
			type='button'
			onClick={() => {
					getLocationForecast(setForecastWeather)
					getLocationWeather(setWeatherData)
			}}
			className={styles.locationButton}
		>
			<FaLocationCrosshairs />
		</button>
	)
}

export default LocationButton
