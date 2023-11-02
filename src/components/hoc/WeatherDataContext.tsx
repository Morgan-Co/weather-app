import { createContext } from 'react'
import { IForecast } from '../../interfaces/IForecast'
import { ICurrentWeather } from '../../interfaces/ICurrentWeather'
import { IWeatherIconsData } from '../../interfaces/IWeatherIconsData'

interface IWeatherContext {
	cityName: string
	setCityName: React.Dispatch<React.SetStateAction<string>>
	getWeather: (
		cityName: string,
		setCityName: (data: string) => void,
		setWeatherData: (data: ICurrentWeather) => void
	) => void
	getForecastWeather: (cityName: string, setForecastWeather: (data: IForecast) => void) => void
	weatherData: ICurrentWeather | undefined
	getLocationWeather: (setWeatherData: (data: ICurrentWeather) => void) => void
	selectCurrentWeatherIcon: (
		weatherIconsData: IWeatherIconsData,
		weatherData: ICurrentWeather | undefined
	) => React.ReactNode
	setWeatherData: (data: ICurrentWeather) => void
	setForecastWeather: (data: IForecast)=> void
	selectForecastIcons: (weatherIconsData: IWeatherIconsData, forecastWeather: IForecast)=> void
}

const WeatherDataContext = createContext<IWeatherContext>({} as IWeatherContext)

export default WeatherDataContext
