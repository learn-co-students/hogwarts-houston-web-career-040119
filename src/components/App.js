import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import FilterBar from './FilterBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: [],
      onlyGreased: false
    }
  }

  componentDidMount() {
    this.setState( {
      hogs: hogs
    });
  }


  toggleOnlyGreased = () => {
    this.setState( {
      onlyGreased: !this.state.onlyGreased
    });
  }

  toggleHogShowDetails = (name) => {
    let hogs = this.state.hogs;
    let hog = hogs.find( hog => {return hog.name === name} );
    if(hog.showDetails) {
      hog.showDetails = false;
    } else {
      hog.showDetails = true;
    }
    this.setState(
      { hogs: hogs }
    );
  }

  toggleHidden = (name) => {
    let hogs = this.state.hogs;
    let hog = hogs.find( hog => {return hog.name === name} );
    if(hog.hidden) {
      hog.hidden = false;
    } else {
      hog.hidden = true;
    }
    this.setState(
      { hogs: hogs }
    );
  }

  sortByName = () => {
    let hogNames = this.state.hogs.map( hog => hog.name ).sort();
    let hogs = [];
    for(let i = 0; i < hogNames.length; i++) {
      let hog = this.state.hogs.find( hog => {return hog.name === hogNames[i]} );
      hogs.push(hog);
    }
    this.setState(
      {hogs: hogs}
    );
  };

  sortByWeight = () => {
    let hogs = this.state.hogs.sort( (hog1,hog2) => hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']);
    this.setState(
      {hogs:hogs}
    );
  };

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterBar hogs={this.state.hogs} toggleOnlyGreased={this.toggleOnlyGreased}  sortByName={this.sortByName} sortByWeight={this.sortByWeight} />
          <HogList hogs={this.state.hogs} toggleHogShowDetails={this.toggleHogShowDetails} toggleHidden={this.toggleHidden} onlyGreased={this.state.onlyGreased} />
      </div>
    )
  }
}

export default App;
