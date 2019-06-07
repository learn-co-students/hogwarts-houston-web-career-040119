import React from 'react'
import PigCard from './PigCard'

export default class PigList extends React.Component {

    findPic = name => {
        return this.props.pictures[name.toLowerCase().split(' ').join('_')]
    }
    
    render() {

        return(<div>
            {this.props.pigs.map((pig, index) => <PigCard key={index} hidePig={this.props.hidePig} {...pig} pic={this.findPic(pig.name)}/>)}
        </div>)
    }
}