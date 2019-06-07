import React from 'react'
import Info from './card_components/Info'
import MoreInforButton from './card_components/MoreInforButton'
import HideButton from './card_components/HideButton'

export default class PigCard extends React.Component {


    constructor() {
        super() 
        this.state = {
            showInfo: false
        }
    }

    showInfo = (e) => {
        e.target.innerText === 'More Info' ? e.target.innerText = 'Less Info' : e.target.innerText = 'More Info'
        this.setState({
            showInfo: !this.state.showInfo
        }) 
    }

    render() {
        return(<div className='TwirlyPig pigTile minPigTile'>
            <img src={this.props.pic}/>
            {this.props.name}
            <br></br>
            <label>Speciality: {this.props.specialty}</label><br></br>
            {this.state.showInfo ? <Info {...this.props}/> : null}
            <MoreInforButton showInfo={this.showInfo}/>
            <HideButton hidePig={this.props.hidePig} name={this.props.name}/>
        </div>)
    }
}