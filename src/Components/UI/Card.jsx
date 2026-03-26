import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player, setCoin, coin }) => {
  const [isSelected, setIsselected] = useState(false);

  const handleChoosePlayer = () => {
      
      const newCoin = coin - player.Price;
      if (newCoin >= 0) {
          setCoin(coin - player.Price);
        } else {
            alert('Need More Money');
            return;
        }

        setIsselected(true);
  }

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={player.PlayerImage} alt="Player" />
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
          <button onClick={handleChoosePlayer} disabled = {isSelected ? true : false} className="btn">
            {isSelected === true ? "Selected" : "Choose Players"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
