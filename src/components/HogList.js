import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogList extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                {this.props.hogs.map(hog => 
                <HogCard key={hog.name} hog={hog} handleHide={this.props.handleHide}/>
                )}
                {/* {this.props.hogs.map(hog =>!this.props.state.showGreased || hog.greased ? hog={hog}:null */}
            </div>
        )
    }
}