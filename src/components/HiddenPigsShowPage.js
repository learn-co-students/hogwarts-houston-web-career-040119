import React from 'react'
import HiddenPigCard from './HiddenPigCard'

export default class HiddenPigsShowPage extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         pigs: props.hiddenPigs
    //     }
    // }

    findPic = name => {
        return this.props.pictures[name.toLowerCase().split(' ').join('_')]
    }

    render() {
        debugger
        return(<div>
            {this.props.hiddenPigs.map(pig => <HiddenPigCard {...pig} pic={this.findPic(pig.name)}/>)}
        </div>)
    }
}