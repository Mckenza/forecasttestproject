import React from "react";
import LeftMenu from '../Main/LeftMenu/LeftMenu';
import './main.css';
import CurrentWether from "./TheWether/CurrentWether";


export default class Main extends React.Component {

    render() {
        return (
            <main>
                <nav>

                </nav>
                <div className="wrap_article">
                    <LeftMenu />
                    <article>
                        <CurrentWether/>

                    </article>
                </div>

            </main>
        )
    }
}