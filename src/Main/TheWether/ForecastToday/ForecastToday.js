import React from "react";
import './forecasttoday.css';

export default class ForecastToday extends React.Component{

    render(){
        return (
            <div className = "forecast_one_hour">
                <div className = "time">
                    <span>{this.props.info.time}</span>
                </div>
                <div className = "icon">
                    <img src = {this.props.info.icon.url} alt = {this.props.info.icon.text}></img>
                </div>
                <div className = "temperature">
                    <span>{this.props.info.temp}</span>
                </div>
                <div className = "precipitation">
                    <span>{this.props.info.precip}</span>
                </div>
            </div>
        )
    }
}