import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigList from './PigList'
import hogs from '../porkers_data';

import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'

let pictures = {
    augustus_gloop: augustus_gloop, 
    bay_of_pigs: bay_of_pigs,
    cherub: cherub,
    galaxy_note: galaxy_note,
    leggo_my_eggo: leggo_my_eggo,
    mudblood: mudblood,
    piggy_smalls: piggy_smalls,
    porkchop: porkchop,
    rainbowdash: rainbowdash,
    sobriety: sobriety,
    the_prosciutto_concern: the_prosciutto_concern,
    trouble: trouble,
    truffleshuffle: truffleshuffle
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      displayPigs: hogs,
      pigs: hogs,
      onlyGreased: false,
      hiddenPigs: [],
      showHiddenPigs: false
    }
  }

  sort = (e) => {
    this.setState({
      displayPigs: this.sortByAttribute(e.target.value)
    })
  }

  sortByAttribute = (attr) => {
    return this.state.displayPigs.sort((a, b) => {
      if(a[attr] < b[attr]) { return -1; }
      if(a[attr] > b[attr]) { return 1; }
      return 0;
    })
  }

  hidePig = (e) => {
    let name = e.target.name
    let newHiddenPigs = this.state.hiddenPigs
    newHiddenPigs.push(this.state.pigs.find(pig => pig.name === name))
    this.setState({
      pigs: this.state.pigs.filter(pig => pig.name !== name),
      displayPigs: this.state.pigs.filter(pig => pig.name !== name),
      hiddenPigs: newHiddenPigs
    })
  }

  showHiddenHogs = () => {
    this.setState({
      showHiddenPigs: !this.state.showHiddenPigs
    })
  }

  filterByGreased = () => {
    if (this.state.onlyGreased) {
      this.setState({
        onlyGreased: false,
        displayPigs: this.state.pigs
      })
    } else {
      this.setState({
        onlyGreased: true,
        displayPigs: this.state.pigs.filter(hog => hog.greased)
      })
    }
  }

  render() {
    return (
      <div className="App">
          < Nav sort={this.sort} filterByGreased={this.filterByGreased} hiddenPigs={this.state.hiddenPigs} showHiddenPigs={this.state.showHiddenPigs} showHiddenHogs={this.showHiddenHogs} pictures={pictures}/>
          <PigList pigs={this.state.displayPigs} hidePig={this.hidePig} pictures={pictures}/>
      </div>
    )
  }
}

export default App;
