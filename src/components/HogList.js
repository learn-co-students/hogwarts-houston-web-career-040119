import React from 'react';
import HogItem from './HogItem';

export default class HogList extends React.Component {
  render() {
    return (
      <div className={"ui grid container"}>
        {this.props.hogs.map(hog => ( (hog.hidden || (this.props.onlyGreased && (!hog.greased)))  ? null : <HogItem hog={hog} toggleHogShowDetails={this.props.toggleHogShowDetails}  toggleHidden={this.props.toggleHidden} /> ))}
      </div>
    );
  }
}
