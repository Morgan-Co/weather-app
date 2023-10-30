export interface ICurrentWeather {
	main: {
		temp: number
		humidity: number
	}
	weather: {
		0: {
			icon: string
		}
	}
	wind: {
		speed: number
	}
	name: string
}
