import React, {Component} from 'react'
import HogInfo from './HogInfo'
// import hogImgs from '../src/hog-imgs'

export default class HogCard extends Component {
  constructor(props) {
    super(props)
    this.state={
        details: false
    }
  }

  onClick = () => {
    this.setState({
        details:!this.state.details
    })
  }

  render() {
    return (
        <div className={'pigTile'}>
            <p>{this.props.hog.name}</p>
            <div>
                <img src={`${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`}/>
            </div>
                {this.state.details?<HogInfo hog={this.props.hog}/>:null}
            <div>
                <button onClick={() => this.onClick()} id={this.props.hog.name}>Details Info</button>
                <button onClick={() => this.props.handleHide(this.props.hog.name)}>Hide Hog</button>
            </div>
        </div>
    )
  }
}