import React, { Component } from 'react';
import './Sidebar.css'
import AddButton from './AddButton';
import VoteButton from './VoteButton';

class LocationData extends React.Component {
  constructor(props){
        super(props);
        this._onVoteClick = this._onVoteClick.bind(this);
    }

  _onVoteClick(loc, evt){
      this.props._onVoted(loc);
    }

  render() {
    return (
      <tr>
        <td>{this.props.location.name}</td>
        <td>{this.props.votes}</td>
        <td>{this.props.percentage}%</td>
        <td><VoteButton class={""} _onClick={this._onVoteClick.bind(this, this.props.location.name)}/></td>
      </tr>
    );
  }
}

class LocationTable extends React.Component {

  CalculatePercentage(array, target){
      let lists = array.slice();
      let count = 0;
      lists.forEach((v)=>{
        if(target.toLowerCase() === v.name.toLowerCase()){
            count++;
        }
      });
      let percentage = Math.round((count / lists.length) * 100);
      return {count:count, percentage:percentage};
    }
    GetVotes(array, target){
      var lists = array.slice();
    }

  RemoveDuplicates(array){
    var unique = [];
    var lookup = {};
    let lists = array.slice();
    for(var i in lists){
      lookup[lists[i]["name"]] = lists[i];
    }
    for(var i in lookup){
      unique.push(lookup[i]);
    }

    return unique;
  }

  render() {
    var rows = [];
    var unique = this.RemoveDuplicates(this.props.locations);
    unique.forEach((location, index) => {
      if (location.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }
      let data = this.CalculatePercentage(this.props.locations, location.name);
      rows.push(<LocationData location={location} 
                  key={index} 
                  percentage={data.percentage}
                  votes={data.count}
                  _onVoted={this.props._onVoted}/>);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Votes</th>
            <th>Percentage</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class LocationSearchBar extends Component {
    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this._onAddClick = this._onAddClick.bind(this);
    }

    _onChange(){
        this.props._onUserInput(
            this.filterTextInput.value
        )
    }

    _onAddClick(evt){
      this.props._onLocationAdd(this.filterTextInput.value)
      this.filterTextInput.value = ""
    }

  render() {
    return (
      <form>
        <label>Filter : </label>
        <input 
            type="text" 
            placeholder="Search..." 
            ref={(input)=> this.filterTextInput = input}
            onChange={this._onChange}/>
        <AddButton class={"add-btn"} _onClick={this._onAddClick}/>
      </form>
    );
  };
}

class LocationSidebar extends Component {
  render() {
    return (
      <div style={{"marginLeft":"5px"}}>
        <div style={{height:"20px"}}></div>
        <LocationSearchBar 
            filterText={this.props.filterText}
            _onUserInput={this.props._onUserInput}
            _onLocationAdd={this.props._onLocationAdd}
        />
        <LocationTable 
            locations={this.props.locations}
            filterText={this.props.filterText}
            _onVoted={this.props._onVoted}
        />
      </div>
    );
  }
}

export default LocationSidebar;