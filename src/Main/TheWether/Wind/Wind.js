import React from "react";
import './wind.css';

export default class Wind extends React.Component{

    render(){
        return(
            <div className = "wind_wrap">
                <div className = "time_wind">
                    <span>{this.props.info.time}</span>
                </div>
                <div className = "degree">
                    <span>{this.props.info.degree}</span>
                </div>
                <div className = "wind_speed">
                    <span>{this.props.info.windspead}</span>
                </div>
                <div className = "wind_temp">
                    <span>{this.props.info.windTemp}</span>
                </div>
            </div>
        )
    }
}