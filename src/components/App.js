import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogcontainer from './Hogcontainer'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs, //hogs
      displayHogs: hogs,
      hiddenHogs: []
    }
  }

  filter = (e) => {
    let x
    console.log(e.target.value)
    if(e.target.value === 'name'){
       x = this.state.displayHogs.sort((a,b) => { return a.name < b.name ? -1 : 1})
    }else{
      x = this.state.displayHogs.sort((a,b) => { return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] ? -1 : 1})
    }
    this.setState({
      displayHogs: x
    })

  }

  isGreased = (e) => {
    if(e.target.checked){
      let charles = this.state.hogs.filter(hog => hog.greased)
      this.setState({
        displayHogs: charles
      })
    }else{
      this.setState({
        displayHogs: hogs //thgis.state.hogs
      })
    }
  }

  hideTheHog = (hogoo) => {
    console.log(hogoo)
    let minh = this.state.displayHogs.filter(hog => hog!== hogoo)

    this.setState({
      displayHogs: minh,
      hiddenHogs: [...this.state.hiddenHogs, hogoo]
    })

  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Filter filter={this.filter} isGreased={this.isGreased} hiddenHogs={this.state.hiddenHogs} />
          <Hogcontainer hogs={this.state.displayHogs} hideTheHog={this.hideTheHog} />

      </div>
    )
  }
}

export default App;
