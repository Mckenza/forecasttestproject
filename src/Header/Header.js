import React from "react";
import './header.css';

export default class Header extends React.Component{

    render(){
        return (
            <header>
                <div className = 'logo_header'>
                    <span>Dayli Wether</span>
                </div>
            </header>
        )
    }
}