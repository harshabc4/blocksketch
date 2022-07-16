import React from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar.js";
import Settings from "./components/Settings.js";
import Square from "./components/Square.js";

function App() {
  const [gameBoard, setGameBoard] = React.useState(
    Array.from({ length: 16 }, createSquare)
  );
  const [selection, setSelection] = React.useState("");
  console.log(selection);

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
    setGameBoard(Array.from({ length: event.target.value }, createSquare));
  }

  function mouseOver(id) {
    setGameBoard((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <main>
      <Navbar />
      <Settings handleChange={setGrid} handleSelection={setSelection} />
      <div className="board-elements-wrapper container">{boardElements}</div>
    </main>
  );
}

export default App;
