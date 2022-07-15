import React from "react";

function Square(props) {
  const styles = {
    backgroundColor: props.isHeld ? "blue" : "brown",
  };
  return (
    <div
      style={styles}
      //   style={props.style}
      className="square-wrapper"
      onMouseEnter={props.handleMouseEnter}
    >
      {/* <span>x</span> */}
    </div>
  );
}

export default Square;
