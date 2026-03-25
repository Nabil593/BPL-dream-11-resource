import React, { use } from 'react';
import AvalablePlayers from '../AvalablePlayers/AvalablePlayers';

const Player = ({playerPromise}) => {

    const players = use(playerPromise);

    return (
        <div className='w-auto max-w-[1320px] mx-auto'>
            <h1>All Players: {players.length}</h1>
            <AvalablePlayers players = {players}/>
        </div>
    );
};

export default Player;