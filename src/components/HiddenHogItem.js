import React from 'react';

function HiddenHogItem(props) {
  return (
    <div className={"ui eight wide column"}>
      <div className={"myborder"}>
      <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/ /g,"_")}.jpg`)} />
      <p><b>RIP {props.hog.name}</b></p>

      </div>
    </div>
  );
}

export default HiddenHogItem;
