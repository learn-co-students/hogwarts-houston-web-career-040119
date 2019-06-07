import React from 'react'

export default class GreasedOnlyCheckbox extends React.Component {
    render() {
        return(
            <div>
                <label>Greased Pigs Only?</label>
                <input type="checkbox" name="greased" value="greased" onChange={this.props.filterByGreased}></input>
            </div>
        )
    }
}

