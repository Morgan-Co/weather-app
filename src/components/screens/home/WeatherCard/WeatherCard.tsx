import { useState } from 'react'
import { ICurrentWeather } from '../../../../interfaces/ICurrentWeather'
import WeatherDataContext from '../../../hoc/WeatherDataContext'
import SearchSection from './SearchSection/SearchSection'
import WeatherData from './WeatherData/WeatherData'
import { weatherIconsData } from '../../../../data/weatherIconsData'
import { selectCurrentWeatherIcon } from '../../../../utils/selectCurrentWeatherIcon'
import { getWeather } from '../../../hoc/getWeather'
import { getLocationWeather } from '../../../hoc/getLocationWeather'
import { getForecastWeather } from '../../../hoc/getForecastWeather'
import { IForecast } from '../../../../interfaces/IForecast'
import { selectForecastIcons } from '../../../../utils/selectForecastIcons'
const WeatherCard = () => {
	const [weatherData, setWeatherData] = useState<ICurrentWeather>()
	const [forecastWeather, setForecastWeather] = useState<IForecast>()
	const [cityName, setCityName] = useState<string>('')

	return (
		<WeatherDataContext.Provider
			value={{
				cityName,
				setCityName,
				getWeather,
				setWeatherData,
				getForecastWeather,
				weatherData,
				getLocationWeather,
				selectCurrentWeatherIcon,
				setForecastWeather,
				selectForecastIcons
			}}
		>
			<div>
				<SearchSection />
				<div className='block'>
					{forecastWeather && selectForecastIcons(weatherIconsData, forecastWeather).map((icon, index) => (
						<p key={index}>{icon}</p>
					))}
					{forecastWeather &&
						Object.keys(forecastWeather).map(key => (
							<div key={key}>
								<p>
									{forecastWeather[key].main.temp.map(temp => Math.round(temp))}
								</p>
							</div>
						))}
				</div>
				{weatherData && <WeatherData />}
			</div>
		</WeatherDataContext.Provider>
	)
}

export default WeatherCard
