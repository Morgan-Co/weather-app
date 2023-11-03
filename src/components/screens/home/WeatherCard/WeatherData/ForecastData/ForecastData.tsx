import { useContext } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { selectForecastIcons } from '../../../../../../utils/selectForecastIcons'
import { weatherIconsData } from '../../../../../../data/weatherIconsData'
import styles from "./ForecastData.module.scss"
import { v4 as uuid } from 'uuid'
import { RiCelsiusLine } from 'react-icons/ri'

const ForecastData = () => {
	const { forecastWeather } = useContext(WeatherDataContext)

	return (
    <div className={styles.forecastData}>
      {forecastWeather &&
        Object.keys(forecastWeather).map((key, index) => (
          <div key={uuid()} className={styles.forecastCard}>
            <p key={`icon-${index}`}>
              {selectForecastIcons(weatherIconsData, forecastWeather[key])}
            </p>
            <p key={`temp-${index}`}>
              {forecastWeather[key].main.temp.map(temp => (
                <>
                  {Math.round(temp)}
                  <RiCelsiusLine/>
                </>
                ))}
            </p>
          </div>
        ))}
    </div>
	)
}

export default ForecastData
