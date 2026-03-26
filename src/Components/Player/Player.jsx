import React, { use, useState } from "react";
import AvalablePlayers from "../AvalablePlayers/AvalablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Player = ({ playerPromise, setCoin, coin }) => {
  const players = use(playerPromise);

  const [selected, setSelected] = useState("available");

  // console.log(selected)

  return (
    <div className="w-auto max-w-[1320px] mx-auto">
      <div className="flex justify-between items-center gap-4 my-4">
        {selected === "available" ? (
          <h2>Avalable Players</h2>
        ) : (
          <h2>Selected Players</h2>
        )}
        <div>
          <button
            onClick={() => setSelected("available")}
            className={`btn ${selected === "available" ? "bg-[#E7FE29]" : "bg-none"} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setSelected("selected")}
            className={`btn ${selected === "selected" ? "bg-[#E7FE29]" : "bg-none"} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      {selected === "available" ? (
        <AvalablePlayers players={players} setCoin = {setCoin} coin = {coin}/>
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Player;
