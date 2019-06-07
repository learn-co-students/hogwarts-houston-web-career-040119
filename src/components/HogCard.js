import React from 'react'

class HogCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      details: false
    }
  }

clickDetails = () => {
  this.setState({
    details: !this.state.details
  })
}


  render(props) {

    return(
      <div className="pigTile">
        <h3>{this.props.hog.name}</h3>
        <img src={`${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`} alt={this.props.hog.name}/>
        <ul style={this.state.details ? {display: "block"} : {display: "none"}}>
          <li>Specialty: {this.props.hog.specialty}</li>
          <li>Greased: {this.props.hog.greased ? "true" : "false"}</li>
          <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
          <li className="achievementText">Highest medal achieved: {this.props.hog['highest medal achieved']}</li>
        </ul>
        <button onClick={this.clickDetails}>Details</button>
        <button onClick={(hog) => this.props.hideTheHog(this.props.hog)}>Hide Hog</button>
      </div>
    )
  }

}

export default HogCard
