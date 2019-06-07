import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogList extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div>
                {this.props.hogs.map(hog => 
                <HogCard key={hog.name} hog={hog} handleHide={this.props.handleHide}/>
                )}
            </div>
        )
    }
}