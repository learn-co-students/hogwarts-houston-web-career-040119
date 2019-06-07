import React from 'react'

class Filter extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <button onClick={this.props.sortHogsByName}>Sort by Name</button>
        <button onClick={this.props.sortHogsByWeight}>Sort by Weight</button>
        <button onClick={this.props.filterGreased}>Show Greased Hogs</button>
        <button onClick={this.props.showHidden}>Toggle Show Hidden Hogs</button>
      </div>
    )
  }

}

export default Filter
