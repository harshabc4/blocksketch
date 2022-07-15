import React from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar.js";
import Square from "./components/Square.js";

function App() {
  const [gameBoard, setGameBoard] = React.useState(startBoard);
  // const [gameBoard, setGameBoard] = React.useState(Array.from({ length: 6 }));

  const [squareColor, setSquareColor] = React.useState("");

  const styles = { background: squareColor };

  const boardElements = gameBoard.map((square) => (
    <Square
      style={styles}
      handleMouseEnter={() => setSquareColor("green")}
      // handleMouseEnter={mouseOver}
    />
  ));

  function startBoard() {
    let testArr = [];
    for (let i = 0; i < 10; i++) {
      testArr.push(createSquare);
    }
    return testArr;
  }

  function createSquare() {
    return {
      id: nanoid(),
      isHeld: false,
    };
  }

  function handleChange(event) {
    setGameBoard(Array.from({ length: event.target.value }, createSquare));
  }

  // function handleChange(event) {
  //   setGameBoard(Array.from({ length: event.target.value }));
  // }

  // function mouseOver(id) {
  //   setSquareColor((oldDice) =>
  //     oldDice.map((die) => {
  //       return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
  //     })
  //   );
  // }

  return (
    <main>
      <Navbar />
      <div className="">
        <div className="input-container container">
          <input
            className=""
            placeholder="Input number of blocks"
            onChange={handleChange}
            type="text"
            name="blockNumber"
          />
        </div>
        <div className="board-elements-wrapper container">{boardElements}</div>
      </div>
    </main>
  );
}

export default App;
