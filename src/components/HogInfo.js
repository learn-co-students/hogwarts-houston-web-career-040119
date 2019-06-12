import React, {Component} from 'react'

export default class HogInfo extends Component {
  constructor() {
    super()
  }

  render() {
    return (
    <div>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {this.props.hog.greased?'True':'False'}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru' +
            '-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru' +
            '-the-Door Ice and Water']}</p>
        <p>Highest medal achieved: {this.props.hog['highest medal achieved']}</p>
    </div>)
  }
}