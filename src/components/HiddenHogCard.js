import React, {Component} from 'react'

export default class HiddenHog extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className={'pigTile'}>
                <p>RIP {this.props.hog.name}</p>
                <div>
                    <img src={`${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`}/>
                </div>
            </div>  
        )
    }
}