import React from 'react'

export default class HiddenPigsButton extends React.Component {
    render() {
        return(
            <button onClick={this.props.showHiddenHogs}>Hidden Hogs</button>
        )
    }
}