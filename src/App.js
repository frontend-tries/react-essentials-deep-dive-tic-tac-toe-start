import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="username1"
            symbol="X"
            isActive={activePlayer === "X"}
          />

          <Player
            initialName="username2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectedSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
