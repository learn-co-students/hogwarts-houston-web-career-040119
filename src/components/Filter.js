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
                    <option value='name'>By Name</option>
                    <option value='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'>By Weight</option>
                </select>
            </div>
            <div>
                <input onChange={this.props.handleSelect} type='checkbox' value='Greased' /><label>Greased</label>
            </div>
        </div>
        )
    }
}