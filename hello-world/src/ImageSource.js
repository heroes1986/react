import React, { Component } from 'react';

class ImageSource extends Component{
    render(){
        return <img src={this.props.source} className={this.props.class} alt={this.props.alternate}/>
    };
}

export default ImageSource;