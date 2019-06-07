import React, { Component } from 'react';
import HiddenHogs from './HiddenHogs';

export default class Filter extends Component{
    state={
        isClicked: false
    }

    change = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return(<div>
            <label>Sort By:</label>
            <select onChange={(e) => this.props.filter(e)}>
                <option value="weight">Weight</option>
                <option value="name">Name</option>
            </select>
           <br/>
                <label>isGreased?</label>
            <input type="checkbox" name="isGreased?" value="isGreased?" onClick={(e) => this.props.isGreased(e)} />
                <button onClick={this.change}>Display Hidden Hogs!</button>
                {this.state.isClicked ? <HiddenHogs hogs={this.props.hiddenHogs}/> : null}

        </div>)
    }

}
