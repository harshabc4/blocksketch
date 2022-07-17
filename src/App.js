import React from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar.js";
import Settings from "./components/Settings.js";
import Square from "./components/Square.js";
import Footer from "./components/Footer.js";

function App() {
  const [gameBoard, setGameBoard] = React.useState(
    Array.from({ length: 16 }, createSquare)
  );
  const [selection, setSelection] = React.useState("");
  // console.log(selection);

  const boardElements = gameBoard.map((square) => (
    <Square
      key={square.id}
      isHeld={square.isHeld}
      handleMouseEnter={() => mouseOver(square.id)}
      choiceSelection={selection}
    />
  ));

  function createSquare() {
    return {
      id: nanoid(),
      isHeld: false,
    };
  }

  function setGrid(event) {
    let boardLength = event.target.value;
    if (boardLength > 4000) {
      boardLength = 4000;
      alert(
        "Please input a number less than or equal to 4000 for performance concerns.  4000 is being displayed now."
      );
    }
    setGameBoard(Array.from({ length: boardLength }, createSquare));
  }

  function mouseOver(id) {
    setGameBoard((squareArr) =>
      squareArr.map((square) => {
        return square.id === id
          ? { ...square, isHeld: !square.isHeld }
          : square;
      })
    );
  }

  return (
    <main>
      <div className="content-wrapper flex-shrink-0">
        <Navbar />
        <Settings handleChange={setGrid} handleSelection={setSelection} />
        <div className="board-elements-wrapper container">{boardElements}</div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
