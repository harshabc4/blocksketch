import React from "react";

function Square(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#c0c0c0" : "#0d6efd",
  };
  return (
    <div
      style={styles}
      className="square-wrapper"
      onMouseEnter={
        props.choiceSelection === "hover" ? props.handleMouseEnter : undefined
      }
      onClick={
        props.choiceSelection === "click" ? props.handleMouseEnter : undefined
      }
    ></div>
  );
}

export default Square;
