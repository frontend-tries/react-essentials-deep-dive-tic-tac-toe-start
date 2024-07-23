import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEdit] = useState(false);

  function handleEdit() {
    setEdit((isEditing) => !isEditing); // best usage for taking state correctly
  }

  function handlePlayerName(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="player-name"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );

    buttonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEdit()}>{buttonText}</button>
    </li>
  );
}
