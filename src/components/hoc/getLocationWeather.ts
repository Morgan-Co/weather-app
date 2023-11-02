import { ICurrentWeather } from '../../interfaces/ICurrentWeather'
import { locationRequest } from '../../utils/locationRequest'

export const getLocationWeather = async (
  setWeatherData: (data: ICurrentWeather) => void
) => {
  const API_KEY: string = '8a2c11dcf257f052c6bfb35ebdda1766'
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