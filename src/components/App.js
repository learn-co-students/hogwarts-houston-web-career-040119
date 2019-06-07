import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter'
import HogContainer from './HogContainer'
import HiddenHogs from './HiddenHogs'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      hiddenHogs: [],
      showHidden: false
    }
  }

  hideTheHog = (hiddenHog) => {
    let newHogs = this.state.hogs.filter(hog => {if (hog.name !== hiddenHog.name)
      return hog})
    this.state.hiddenHogs.push(hiddenHog)
    let newHiddenHogs = this.state.hiddenHogs
    this.setState({
      hogs: newHogs,
      hiddenHogs: newHiddenHogs
    })
  }

  showHiddenhogs = () => {
    console.log(this.state.showHidden)
    this.setState({
      showHidden: !this.state.showHidden
    })
  }

  filterGreased = () => {
    let greased = this.state.hogs.filter(hog => hog.greased)
    this.setState({
      hogs: greased
    })
  }

  sortHogsByName = () => {
    let sorted = this.state.hogs.sort((a, b) => a.name < b.name ? -1:1)
    console.log(sorted)
    this.setState({
      hogs: sorted
    })
  }

  sortHogsByWeight = () => {
    let sorted = this.state.hogs.sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] ? -1:1)
    this.setState({
      hogs: sorted
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter showHidden={this.showHiddenhogs} filterGreased={this.filterGreased} sortHogsByName={this.sortHogsByName} sortHogsByWeight={this.sortHogsByWeight}/>
          {this.state.showHidden ? <HiddenHogs hiddenHogs={this.state.hiddenHogs}/> : <HogContainer hogs={this.state.hogs} hideTheHog={this.hideTheHog}/>}

      </div>
    )
  }
}

export default App;
