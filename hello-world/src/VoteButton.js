import React, { Component } from 'react';
import Button from './Button';

class VoteButton extends Component{
    render(){
        return <Button class={this.props.class} 
                    onButtonClick={this.props._onClick} 
                    name={"Vote"}/>
    }
}

export default VoteButton;