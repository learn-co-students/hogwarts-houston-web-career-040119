import React from 'react'
import HiddenHogCard from './HiddenHogCard'

class HiddenHogs extends React.Component {


  render(){
    return(
      <div>
        {this.props.hiddenHogs.map(hog => {
          return <HiddenHogCard hog={hog} />
        })}
      </div>
    )
  }


}

export default HiddenHogs;
