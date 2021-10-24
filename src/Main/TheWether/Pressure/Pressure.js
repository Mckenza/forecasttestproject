import React from "react";
import './pressure.css';

export default class Pressure extends React.Component{

    render(){
        return(
            <div className = "pressure_wrap">
                <div className = "time_pres">
                    <span>{this.props.info.time}</span>
                </div>
                <div className = "pressure">
                    <span>{this.props.info.press}</span>
                </div>
            </div>
        )
    }
}