import React, { Component } from 'react';

export default class Hoginfo extends Component{

    render(){
        return(
          <div>
            <div className="content">
              <div className="header">
              </div>
              <div className="meta">
                <ul>
                  <li>{this.props.hog.greased ? 'greased' : 'not greased'}</li>
                  <li>Highest medal achieved: {this.props.hog['highest medal achieved']}</li>
                  <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
