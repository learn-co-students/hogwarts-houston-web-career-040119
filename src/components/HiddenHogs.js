import React, {Component} from 'react'
import HiddenHogCard from './HiddenHogCard'

export default class HiddenHogs extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                {this.props.hiddenHogs.map(hiddenHog => <HiddenHogCard hog={hiddenHog} key={hiddenHog.name}/>)}
            </div>
        )
    }
}