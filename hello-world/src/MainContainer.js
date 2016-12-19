import React, { Component } from 'react';
import spinner from './spinning.gif';
import './MainContainer.css';
import GoButton from './GoButton'
import ImageSource from './ImageSource'


class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            disabled:true,
            location:"",
            color:"#FCC333"
        }
        this._onClicked = this._onClicked.bind(this);
    }

    GetRandomColor(){
        var array = ["#FCC333","blue", "red", "green", "purple", "white",
                    "orange","lightblue", "lightgrey", "lightgreen", "maroon"]
        return array[Math.floor(Math.random() * array.length)];
    }

    _onClicked(evt){
        this.timerID = setInterval(()=>this.DisabledSpinner(), 2000);
        var lists = this.props.locations;
        var selected = lists[Math.floor(Math.random() * lists.length)];
        var color = this.GetRandomColor()
        this.setState({
            location:selected.name,
            disabled:false,
            color:color
        });
    }

    DisabledSpinner(){
        if(!this.state.disabled)
        {
            this.setState({disabled:true})
            clearInterval(this.timerID);
        }
    }

    render(){
        const title = this.state.location === "" ?
            <h3 className="content gold-hightlight">Let's get <span className="red-highlight">rand</span>om...</h3> :
            <h3 style={{"color": this.state.color}} className="content">{this.state.location.toUpperCase()}</h3>
        const element = this.state.disabled ? 
            <div className="mid-content midtxt-content">{title}</div> : 
            <ImageSource source={spinner} class="mid-content" alternate="spinner"/>

        return (
            <div className="main-content">
                <div className="content">
                    {element}
                </div>
                <div>
                    <GoButton class={"mid-content go-btn go-btn-font"}
                        _onClick={this._onClicked}/>
                </div>
            </div>
        );
    }
}


export default MainContainer;