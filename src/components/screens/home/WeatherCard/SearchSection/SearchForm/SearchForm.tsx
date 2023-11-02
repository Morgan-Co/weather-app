import { useContext } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FiSearch } from 'react-icons/fi'

const SearchForm = () => {
	const {
		cityName,
		setCityName,
		getWeather,
		getForecastWeather,
		setWeatherData,
		setForecastWeather
	} = useContext(WeatherDataContext)
	return (
		<div>
			<form action='#'>
				<input
					type='text'
					placeholder='City'
					value={cityName}
					onChange={e => {
						setCityName(e.target.value)
					}}
				/>
				<button
					type='button'
					onClick={() => {
						getWeather(cityName, setCityName, setWeatherData)
						getForecastWeather(cityName, setForecastWeather)
					}}
				>
					<FiSearch />
				</button>
			</form>
		</div>
	)
}

export default SearchForm
