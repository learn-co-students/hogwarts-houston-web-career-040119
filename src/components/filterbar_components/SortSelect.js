import React from 'react'


export default class SortSelect extends React.Component {

    render() {
        return(
            <div>
                <label>Sort by</label>
                <select onChange={this.props.sort}>
                    <option value='name'>Name</option>
                    <option value='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'>weight</option>
                </select>
            </div>
        )
    }
    


}