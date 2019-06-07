import React, { Component } from 'react';
import Hogcard from './Hogcard'

export default class Hogcontainer extends Component{

    render(){
        return(<div className="ui link cards">
            {this.props.hogs.map(hog => <Hogcard hog={hog} hideTheHog={this.props.hideTheHog}/>)}

        </div>)
    }

}
