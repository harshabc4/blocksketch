import React from "react";

function Square(props) {
  // console.log(props);
  const styles = {
    backgroundColor: props.isHeld ? "#0d6efd" : "orange",
  };

  // const selecteds = {
  //  props.choiceSelection = 'asdf'
  // }
  //   console.log(props.handleSelection);
  //   const props. {};
  return (
    <div
      style={styles}
      className="square-wrapper"
      // onMouseEnter={props.handleMouseEnter}
      // onClick={props.handleMouseEnter}
      onMouseEnter={
        props.choiceSelection === "hover" ? props.handleMouseEnter : undefined
      }
      onClick={
        props.choiceSelection === "click" ? props.handleMouseEnter : undefined
      }
      // onMouseEnter={props.choiceSelection === "click" && props.handleMouseEnter}
      // onClick={props.choiceSelection === "hover" && props.handleMouseEnter}
    ></div>
  );
}

export default Square;
