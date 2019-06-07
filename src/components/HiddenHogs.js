import React, { Component } from 'react';

export default class HiddenHogs extends Component{
    render(){
       return(<div>
           {this.props.hogs.map(hog => <p>R.I.P {hog.name} </p>)}
        </div>
       )
    }
}
