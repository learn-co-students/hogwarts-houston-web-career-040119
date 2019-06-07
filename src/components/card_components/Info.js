import React from 'react'

export default class Info extends React.Component {
    render() {
        return(
            <div>
                <label>Highest medal achived: {this.props['highest medal achieved']}</label>
                <label>'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</label>
            </div>
        )
    }
}