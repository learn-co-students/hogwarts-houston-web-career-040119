import React from 'react'

export default class HideButton extends React.Component {

    render() {
        return(
            <button name={this.props.name} onClick={(e) => this.props.hidePig(e)}>Hide Me🐷</button>
        )
    }

}