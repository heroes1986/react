import React, { Component } from 'react';
import Button from './Button';

class GoButton extends Component{
    render(){
        return <Button class={this.props.class} 
                    onButtonClick={this.props._onClick} 
                    name={"Rand!"}/>
    }
}

export default GoButton;