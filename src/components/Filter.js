import React, {Component} from 'react'

export default class Filter extends Component {
    constructor() {
        super()

    }

    render() {
        return(
        <div>
            <div>
                <button onClick={this.props.showHiddenHogs}>Show Hidden Hogs</button>
            </div>
            <div>
                <select onChange={(e) => this.props.handleSort(e)} className='filterWrapper'>
                    <option>By Name</option>
                    <option>By Weight</option>
                </select>
            </div>
            <div>
                <input onChange={this.props.handleSelect} type='checkbox' value='Greased' /><label>Greased</label>
            </div>
        </div>
        )
    }
}