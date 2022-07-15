import React from "react";

function Square(props) {
  return (
    <div
      style={props.style}
      className="square-wrapper"
      onMouseEnter={props.handleMouseEnter}
    >
      {/* <span>x</span> */}
    </div>
  );
}

export default Square;
