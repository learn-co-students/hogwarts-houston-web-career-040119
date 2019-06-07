import React from 'react'

export default class HiddenPigCard extends React.Component {

    render() {
        return(<div className='TwirlyPig pigTile minPigTile'>
            <img src={this.props.pic}/>
            <label>RIP {this.props.name}</label>
        </div>)
    }

    // componentDidMount() {
    //     fetch('http://api.giphy.com/v1/gifs/random')
    //     .then
    // }
}