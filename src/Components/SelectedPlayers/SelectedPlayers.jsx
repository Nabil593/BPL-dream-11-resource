import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    // console.log(setSelectedPlayers)

    const handleDeletePlayer = (player) => {
        // console.log(selectedPlayers, player)
        const filterPlayer = selectedPlayers.filter(selectedPlay => selectedPlay.PlayerName != player.PlayerName)
        setSelectedPlayers(filterPlayer);
        setCoin(coin + player.Price)
    }

    return (
        <div>
            <div className="space-y-4">

            {
             selectedPlayers.length === 0 ? <h1>No Player Selected Yet!</h1> : selectedPlayers.map((player, index) => {
                    return <div key={index} className="flex items-center gap-6 justify-between p-10 rounded-2xl border">
                        <div className="flex items-center gap-2 ">
                            <img src={player.PlayerImage} alt="Player" className="rounded-2xl h-8 w-auto"/>
                            <div>
                                <h2 className="flex items-center gap-2"><FaUser /> {player.PlayerName}</h2>
                                <p>{player.PlayerType}</p>
                            </div>
                        </div>
                        <button onClick={() => handleDeletePlayer(player)} className="btn text-red-400"><MdDelete /></button>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;