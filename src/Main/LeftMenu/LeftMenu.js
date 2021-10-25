import React from "react";
import './leftmenu.css';

export default class LeftMenu extends React.Component{

    render(){
        return(
            <div className = "left_side_menu">
                <div className = "days_value">
                    <ul>
                        <li>
                            <button onClick = {this.props.buttons.now}>Сейчас</button>
                        </li>
                        <li>
                            <button onClick = {this.props.buttons.today}>Сегодня</button>
                        </li>
                        <li>
                            <button>Завтра</button>
                        </li>
                        <li>
                            <button>На 3 дня</button>
                        </li> 
                    </ul>
                </div>
                <div className = "another_setting">
                    <ul>
                        <li>
                            <button>Ветер</button>
                        </li>
                        <li>
                            <button>Давление</button>
                        </li>
                        <li>
                            <button>Влажность</button>
                        </li>
                        <li>
                            <button>Солнце и Луна</button>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}