import { useContext } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FaLocationCrosshairs } from 'react-icons/fa6'

const LocationButton = () => {
	const {getLocationWeather} = useContext(WeatherDataContext)
	return (
		<button type='button' onClick={getLocationWeather}>
			<FaLocationCrosshairs />
		</button>
	)
}

export default LocationButton
