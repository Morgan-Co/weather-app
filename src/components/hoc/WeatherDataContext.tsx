import { createContext } from 'react'
import { ICurrentWeather } from '../../interfaces/ICurrentWeather'

interface IWeatherContext {
	cityName: string
	setCityName: React.Dispatch<React.SetStateAction<string>>
	getWeather: () => void
	weatherData: ICurrentWeather | undefined
	getLocationWeather: () => void
}

const WeatherDataContext = createContext<IWeatherContext>({} as IWeatherContext)

export default WeatherDataContext
