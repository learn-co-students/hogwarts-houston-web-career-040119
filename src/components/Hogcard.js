import React, { Component } from 'react';
import Hoginfo from './Hoginfo'

export default class Hogcard extends Component{
    constructor(props){
        super(props)
        this.state = {
            // hogPic: require(`../hog-imgs/${props.hog.name.toLowerCase().split(' ').join('_')}.jpg`),
            isClicked: false
        }
    }

    change = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })

    }

    //you can create a function as well

    render(){

        const pic = require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)
        return(
          <div className="card">
            <div className="image">
              <img src={pic} />
              <h4>{this.props.hog.name}</h4>
              <p>Specialty: {this.props.hog.specialty}</p>
            </div>

            {this.state.isClicked
                ?
              <div>
                <Hoginfo hog={this.props.hog}/>
                <button onClick={this.change}>Less Info</button>
              </div>
                :
              <button onClick={this.change}>More Info</button>
            }
            <button onClick={() => this.props.hideTheHog(this.props.hog)}>Hide the Hog!</button>
          </div>
        )
    }
}
