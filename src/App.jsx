import React, { Suspense, useState } from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import Player from './Components/Player/Player';

const featchPlayer = async() => {

  const res = await fetch("/dta.json")
  return res.json();
}

const App = () => {

  const [coin, setCoin] = useState(5000000);


  const playerPromise = featchPlayer();

  return (
    <div>
      <Navber coin = {coin}/>
      <Banner />
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <Player playerPromise = {playerPromise} setCoin = {setCoin} coin = {coin}/>
      </Suspense>
    </div>
  );
};

export default App;