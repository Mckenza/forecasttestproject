import React from "react";
import ForecastToday from "./ForecastToday/ForecastToday";
import Pressure from "./Pressure/Pressure";
import './settingwether.css';
import Wet from "./Wet/Wet";
import Wind from "./Wind/Wind";

export default class CurrentWether extends React.Component {

    constructor() {
        super();
        this.state = {
            hourForecast: [],
            windForecast: [],
            wetForecast: [],
            pressForecast: [],
        }
        this.styleH1 = {
            marginLeft: '5px', 
            fontSize: '26px',
        }
    }

    parseInfo(info) {
        console.log(info)
        const bufArrayForecast = [];
        const bufArrayWind = [];
        const bufArrayWet = [];
        const bufArrayPres = [];
        const arrayHour = [0, 3, 6, 8, 10, 12, 15, 17, 19, 21];
        const obj = info.forecast.forecastday[0].hour;
        arrayHour.forEach(value => {
            bufArrayForecast.push({
                time: `${value}:00`,
                icon: { url: obj[value].condition.icon, text: obj[value].condition.text },
                temp: obj[value].temp_c > 0 ? '+' + obj[value].temp_c : obj[value].temp_c,
                precip: obj[value].precip_mm + ' мм',
            });
            bufArrayWind.push({
                time: `${value}:00`,
                degree: 23,
                windspead: obj[value].wind_kph,
                windTemp: obj[value].windchill_c > 0 ? '+' + obj[value].windchill_c : obj[value].windchill_c, 
            });
            bufArrayWet.push({
                time: `${value}:00`,
                humidity: obj[value].humidity,
            });
            bufArrayPres.push({
                time: `${value}:00`,
                press: obj[value].pressure_mb * 0.75,
            })
        })
        this.setState({
            hourForecast: bufArrayForecast,
            windForecast: bufArrayWind,
            wetForecast: bufArrayWet,
            pressForecast: bufArrayPres,
        })
    }

    /* Вызывается сразу же после монтирования */
    componentDidMount() {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=8f063f94750249c1b22181330212310&q=Minsk&aqi=no', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(response => response.json())
            .then(data => this.parseInfo(data));
    }

    /* после обновления */
    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <section>
                <h1 style = {this.styleH1}>Погода Сегодня</h1>
                <article className = "forecast_today">
                    {this.state.hourForecast.map((value, index) => {
                        return <ForecastToday info={value} key={index} />
                    })}
                </article>
                <h1 style = {this.styleH1}>Ветер (км/ч)</h1>
                <article className = "forecast_wind">
                    {this.state.windForecast.map((value, index) => {
                        return <Wind info={value} key={index} />
                    })}
                </article>
                <h1 style = {this.styleH1}>Давление (мм. рт. ст)</h1>
                <article className = "forecast_pressure">
                    {this.state.pressForecast.map((value, index) => {
                        return <Pressure info={value} key={index} />
                    })}
                </article>
                <h1 style = {this.styleH1}>Влажность</h1>
                <article className = "forecast_wet">
                    {this.state.wetForecast.map((value, index) => {
                        return <Wet info={value} key={index} />
                    })}
                </article>
            </section>
        )
    }
}