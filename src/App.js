import React from "react";
import Navbar from "./components/Navbar.js";
import Square from "./components/Square.js";

function App() {
  const [gameBoard, setGameBoard] = React.useState(Array.from({ length: 6 }));

  function handleChange(event) {
    setGameBoard(Array.from({ length: event.target.value }));
  }

  const boardElements = gameBoard.map((square) => <Square />);

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
