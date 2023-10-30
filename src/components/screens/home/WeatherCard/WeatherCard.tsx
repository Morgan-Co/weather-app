import { useState } from 'react'
import { locationRequest } from '../../../../utils/locationRequest'
import { ICurrentWeather } from '../../../../interfaces/ICurrentWeather'
import WeatherDataContext from '../../../hoc/WeatherDataContext'
import SearchSection from './SearchSection/SearchSection'
import WeatherData from './WeatherData/WeatherData'



const WeatherCard = () => {
	const API_KEY: string = '8a2c11dcf257f052c6bfb35ebdda1766'
	const [weatherData, setWeatherData] = useState<ICurrentWeather>()
	const [cityName, setCityName] = useState<string>('')

	const getWeather = async () => {
		const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
		try {
			const res = await fetch(URL)
			const data = await res.json()
			setWeatherData(data)
			setCityName('')
		} catch (error) {
			console.error(error)
		}
	}

	const getLocationWeather = async () => {
		try {
			const locationData = await locationRequest()
			const latitude: number = parseFloat(locationData.lat.toFixed(2))
			const longitude: number = parseFloat(locationData.lon.toFixed(2))
			const URL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
			const res = await fetch(URL)
			const data = await res.json()
			setWeatherData(data)
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<WeatherDataContext.Provider
			value={{
				cityName,
				setCityName,
				getWeather,
				weatherData,
				getLocationWeather,
			}}
		>
			<div>
				<SearchSection />
				{weatherData && <WeatherData />}
			</div>
		</WeatherDataContext.Provider>
	)
}

export default WeatherCard
