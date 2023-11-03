import { useContext } from 'react'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'
import { RiCelsiusLine } from 'react-icons/ri'
import styles from './WeatherTemp.module.scss'

const WeatherTemp = () => {
	const { weatherData } = useContext(WeatherDataContext)
	return (
		<div className={styles.weatherTemp}>
			{weatherData && Math.round(weatherData.main.temp)}
			<RiCelsiusLine />
		</div>
	)
}

export default WeatherTemp
