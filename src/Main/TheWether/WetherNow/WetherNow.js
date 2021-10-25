import React from "react";
import './wethernow.css';

export default class WetherNow extends React.Component {

    constructor(){
        super();
        this.state = {
            wetherNow: {
                tempNow: '',
                tempfeel: '',
                humid: '',
                wind: '',
                press: '',
                iconW: { url: '', title: ''}
            },
        }

    }

    parseInfo(info) {
        console.log(info)
        const obj = info.current;

        this.setState(prev => ({
            wetherNow: {
                ...prev,
                tempNow: obj.temp_c,
                tempfeel: obj.feelslike_c,
                humid: obj.humidity,
                wind: obj.wind_kph,
                press: obj.pressure_mb * 0.75,
                iconW: { 
                    ...prev.iconW, 
                    url: obj.condition.icon, 
                    title: obj.condition.text,
                }
            }
        }))
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
            <div className="wether_now_wrap">
                <div className="icon_now">
                    <img src = {this.state.wetherNow.iconW.url} title = {this.state.wetherNow.iconW.title} width = "150px" height = "150px"></img>
                </div>
                <div className="full_info_wether">
                    <div className="list_info">
                        <div>
                            <span>Температура ...................... {this.state.wetherNow.tempNow}</span>
                        </div>
                        <div>
                            <span>По ощущению .......................... {this.state.wetherNow.tempfeel}</span>
                        </div>
                        <div>
                            <span>Влажность ..................... {this.state.wetherNow.humid}</span>
                        </div>

                        <div>
                            <span>Ветер .................................. {this.state.wetherNow.wind + 'км/ч'}</span>
                        </div>
                        <div>
                            <span>Давление ....................... {this.state.wetherNow.press + 'мм рт. сб'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}