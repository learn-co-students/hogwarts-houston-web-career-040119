import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component {


  render() {
    return(
      <div className="indexWrapper">
      {this.props.hogs.map(hog => {
        return <HogCard hog={hog} hideTheHog={this.props.hideTheHog}/>
      })}
      </div>
    )
  }

}

export default HogContainer
