import React from 'react';
import HiddenHogItem from './HiddenHogItem';

export default class HogList extends React.Component {

  constructor() {
    super()
    this.state = {
      showHiddenHogs: false
    };
  }

  onSelectChange = (event) => {
    console.log(event.target.value);
    switch(event.target.value) {
      case "name":
        this.props.sortByName();
        break;
      case "weight":
        this.props.sortByWeight();
    }
  };

  toggleHiddenHogs = () => {
    this.setState( {
      showHiddenHogs: !this.state.showHiddenHogs
    });
  };

  render() {
    return (
      <div>
        <form>
        Sort By: <select onChange={this.onSelectChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select> &nbsp;&nbsp;
        Only Show Greased? 
        <input type="checkbox" onClick={this.props.toggleOnlyGreased} />
        </form><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.toggleHiddenHogs}>Hidden Hogs</button>
        <br /><br />
        { 
          this.state.showHiddenHogs ? 
          (<div className={"ui grid container myborder"}>
            {this.props.hogs.map(hog => (hog.hidden ? <HiddenHogItem hog={hog} /> : null))}
          </div>)
          : null
        }
        
        <br /><br />
      </div>
    );
  }
}
