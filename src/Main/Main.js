import React from "react";
import LeftMenu from '../Main/LeftMenu/LeftMenu';
import './main.css';
import CurrentWether from "./TheWether/CurrentWether";
import WetherNow from "./TheWether/WetherNow/WetherNow";


export default class Main extends React.Component {

    constructor(){
        super();
        this.state = {
            wetherNow: false,
            wetherToday: true,
        }

        this.wetherTodayClick = this.wetherTodayClick.bind(this);
        this.wetherNowClick = this.wetherNowClick.bind(this);
    }

    wetherTodayClick(){
        this.setState({
            wetherNow: false,
            wetherToday: true,
        })
    }

    wetherNowClick(){
        this.setState({
            wetherNow: true,
            wetherToday: false,
        })
    }

    render() {
        return (
            <main>
                <nav>

                </nav>
                <div className="wrap_article">
                    <LeftMenu buttons = {{now: this.wetherNowClick, today: this.wetherTodayClick}}/>
                    <article>
                        { this.state.wetherNow ? <WetherNow/> : <CurrentWether/>}
                    </article>
                </div>

            </main>
        )
    }
}