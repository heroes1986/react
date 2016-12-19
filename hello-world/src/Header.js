import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSource from './ImageSource'


class AppHeader extends Component{
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <div className="div1"><ImageSource source={logo} class="App-logo" alternate="logo"/></div>
                    <div className="div2">
                        <h1 className="App-header-right">
                            Pick<span style={{"color":"red"}}>A</span>Place
                        </h1>
                        <h4 className="App-sub-header">Thinking of where to eat, has never been this easy...</h4>
                    </div>
                </div>
            </div>
        )
    };
}

export default AppHeader;