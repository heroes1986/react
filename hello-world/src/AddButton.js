import React, { Component } from 'react';
import Button from './Button';

class AddButton extends Component{
    render(){
        return <Button class={this.props.class} 
                    onButtonClick={this.props._onClick} 
                    name={"Add"}/>
    }
}

export default AddButton;