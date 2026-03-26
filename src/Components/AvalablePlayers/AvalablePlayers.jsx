import Card from "../UI/Card";

const AvalablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        {players.map((player) => {
          return <Card key={player.PlayerName} player={player} setCoin = {setCoin} coin = {coin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}/>;
        })}
      </div>
    </div>
  );
};

export default AvalablePlayers;
