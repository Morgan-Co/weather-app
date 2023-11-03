import { useContext } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FiSearch } from 'react-icons/fi'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
	const {
		cityName,
		setCityName,
		getWeather,
		getForecastWeather,
		setWeatherData,
		setForecastWeather,
	} = useContext(WeatherDataContext)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && cityName.trim() !== '') {
			getWeather(cityName, setCityName, setWeatherData)
			getForecastWeather(cityName, setForecastWeather)
		}
	}
	return (
		<form action='#' className={styles.searchForm}>
			<input
				type='text'
				placeholder='City'
				value={cityName}
				onChange={e => {
					setCityName(e.target.value)
				}}
				onKeyDown={handleKeyDown}
				className={styles.searchInput}
			/>
			<button
				type='button'
				onClick={() => {
					getWeather(cityName, setCityName, setWeatherData)
					getForecastWeather(cityName, setForecastWeather)
				}}
				className={styles.searchButton}
			>
				<FiSearch />
			</button>
		</form>
	)
}

export default SearchForm
