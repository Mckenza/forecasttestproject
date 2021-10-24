import React from "react";
import './wet.css';

export default class Wet extends React.Component{

    render(){
        return(
            <div className = "wet_wrap">
                <div className = "time_wet">
                    <span>{this.props.info.time}</span>
                </div>
                <div className = "humidity">
                    <span>{this.props.info.humidity}</span>
                </div>
            </div>
        )
    }
}