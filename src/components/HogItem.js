import React from 'react';

function HogItem(props) {
  return (
    <div className={"ui eight wide column"}>
      <div className={"myborder"}>
      <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/ /g,"_")}.jpg`)} />
      <p><b>{props.hog.name}</b></p>

      <button onClick={() => props.toggleHogShowDetails(props.hog.name) }>{props.hog.showDetails ? "Less" : "More" } Info</button>
      <button onClick={() => props.toggleHidden(props.hog.name)}>Hide Me</button>

      { props.hog.showDetails ? 
      <span>
      <p>Specialty: {props.hog.specialty}</p>
      <p>{props.hog.greased ? "" : "Not "}Greased</p>
      <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: 
        {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
        <p>Highest medal achieved: {props.hog['highest medal achieved']}</p></span>
        : null }
      </div>
    </div>
  );
}

export default HogItem;
