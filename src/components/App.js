import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import Filter from './Filter'
import HiddenHogs from './HiddenHogs'
import { type } from 'os';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sort: 'By Name',
      hogs: hogs,
      hiddenHogs: [],
      showHidden: false,
      showGreased:false,
      displayHogs: hogs
    }
  }

  handleSort = (e) => {
    console.log(e.target.value)
    this.setState({
      sort: e.target.value
    }, this.sortedHogs)   
  }

  sortedHogs = () => {
    this.state.sort==='By Name'?
    this.setState({
      displayHogs: this.state.displayHogs.sort((a,b) => a.name < b.name? -1:1)
    })
    :this.setState({
      displayHogs:this.state.displayHogs.sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']?-1:1)
    })
  }

  handleSelect = () => {
    this.setState({
      showGreased: !this.state.showGreased
    }, () => {
      let newHogs = this.state.showGreased?this.state.hogs.filter(hog => hog.greased === true):this.state.hogs
      this.setState({
        displayHogs: newHogs
      })
    })
  }


  handleHide = (id) => {
    let newHiddenHog = this.state.displayHogs.find(hog => hog.name === id)
    let newHogs = []
    let newHiddenHogs = []
    newHogs = this.state.displayHogs.filter(hog => hog.name !== id)
    this.state.hiddenHogs.push(newHiddenHog)
    newHiddenHogs = this.state.hiddenHogs
    this.setState({
      displayHogs: newHogs,
      hiddenHogs: newHiddenHogs
    })
  }

  showHiddenHogs =() => {
    this.setState({
      showHidden: !this.state.showHidden
    })  
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter handleSelect={this.handleSelect} showHiddenHogs={this.showHiddenHogs} handleSort={(e) => this.handleSort(e)}/>
          <div className={'largeHeader'}>
            {this.state.showHidden?<HiddenHogs hiddenHogs={this.state.hiddenHogs}/>:null}
          </div>
          <HogList handleHide={this.handleHide} hogs={this.state.displayHogs} handleSelect={this.handleSelect} />
      </div>
    )
  }
}

export default App;
