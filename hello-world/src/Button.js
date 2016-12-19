import React, { Component } from 'react';

class Button extends Component{
    constructor(props){
        super(props);
        this._onClicked = this._onClicked.bind(this);
    }

    _onClicked(evt){
        this.props.onButtonClick(evt);
        evt.preventDefault();
    }

    render(){
        return <button className={this.props.class} onClick={this._onClicked}>{this.props.name}</button>
    }
}

export default Button;