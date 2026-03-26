import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const AvalablePlayers = ({ players }) => {
  // console.log(players);
  return (
    <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
      {players.map((player) => {
        return (
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={player.PlayerImage}
                alt="Player"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaUser /> {player.PlayerName}
              </h2>
              <div className="flex justify-between items-center gap-2">
                <FaFlag />
                <p>{player.PlayerCountry}</p>
                <button className="btn">{player.PlayerType}</button>
              </div>
              <div className="divider"></div>
              <h2 className="font-bold">Rating {player.Rating}</h2>
              <div className="flex justify-between">
                <p>{player.BattingStyle}</p>
                <p className="text-right">{player.BowlingStyle}</p>
              </div>

              <div className="card-actions justify-between items-center">
                <p className="text-[18px] font-semibold">Price: ${player.Price}</p>
                <button className="btn">Choose Players</button>
              </div>
            </div>
          </div>
        );
      })}
        </div>
    </div>
  );
};

export default AvalablePlayers;
