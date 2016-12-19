import React, { Component } from 'react';
import LocationSidebar from './LocationSidebar'
import MainContainer from './MainContainer'

class CommonContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            locations: this.props.locations
        };
        this._onLocationAdd = this._onLocationAdd.bind(this);
        this._onVoted = this._onVoted.bind(this);
        this._onUserInput = this._onUserInput.bind(this);
    }
     render() {
        return (
            <div>
                <div id="side_container" style={{"float":"right","width":"25%","minHeight":"1000px","backgroundColor":"#A8A070"}}>
                    <LocationSidebar locations={this.state.locations} 
                    _onLocationAdd={this._onLocationAdd}
                    _onUserInput={this._onUserInput}
                    _onVoted={this._onVoted}
                    filterText={this.state.filterText}/>
                </div>
                <div id="main_container" style={{"minHeight":"1000px","backgroundColor":"#282828","display":"flex"}}>
                    <MainContainer locations={this.state.locations}/>
                </div>
            </div>
            );
    }
    ConstructObject(key, value){
      let data = {};
      data[key] = value;
      return data;
    }

    Validate(value){
      let locations = this.state.locations;
      let result = true;
      locations.forEach((location) => {
        if (location.name.toLowerCase() === value.toLowerCase()) {
          result = false;
          return false;
        }
      });
      return result;
    }

    Refresh(){
      this.setState({filterText:''});
    }
    
    _onUserInput(filterText){
        this.setState({
            filterText: filterText
        });
    }

    _onLocationAdd(locationText){
      if(locationText != null && 
          locationText.trim() !== "" && 
          this.Validate(locationText)){
        let array = this.state.locations.slice();

        array.push(this.ConstructObject("name", locationText.toUpperCase()));
        this.setState({
          locations:array
        });
      }

      this.Refresh();
    }

    _onVoted(vote){
       if(vote != null && vote.trim() !== ""){
        let array = this.state.locations.slice();

        array.push(this.ConstructObject("name", vote));
        this.setState({
          locations:array
        });
      }
      
    }
}

export default CommonContainer;