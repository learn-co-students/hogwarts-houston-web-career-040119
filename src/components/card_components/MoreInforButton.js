import React from 'react'

export default class MoreInfoButton extends React.Component {
    render() {
        return(
            <button onClick={(e) => this.props.showInfo(e)}>More Info</button>
        )
    }
}