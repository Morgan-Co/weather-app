import { useContext, useEffect, useRef } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FiSearch } from 'react-icons/fi'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
	const buttonRef = useRef<HTMLButtonElement | null>(null)
	const {
		cityName,
		setCityName,
		getWeather,
		getForecastWeather,
		setWeatherData,
		setForecastWeather,
		setError,
		weatherData,
	} = useContext(WeatherDataContext)

	useEffect(() => {
		if (!weatherData) {
			console.log('kaban')
		}
		console.log(weatherData)
	}, [weatherData])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && cityName.trim() !== '') {
			getWeather(cityName, setCityName, setWeatherData, setError)
			getForecastWeather(cityName, setForecastWeather)
		}
	}

	useEffect(() => {
		const lockButton = () => {
			if (buttonRef.current) {
				if (cityName.trim() == '') buttonRef.current.classList.add('lock')
				else buttonRef.current.classList.remove('lock')
			}
		}
		lockButton()
	}, [buttonRef, cityName])
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
						getForecastWeather(cityName, setForecastWeather)
						getWeather(cityName, setCityName, setWeatherData, setError)
				}}
				className={styles.searchButton}
				ref={buttonRef}
			>
				<FiSearch />
			</button>
		</form>
	)
}

export default SearchForm
