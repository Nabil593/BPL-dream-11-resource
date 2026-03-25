import React, { Suspense } from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import Player from './Components/Player/Player';

const featchPlayer = async() => {
  const res = await fetch("/dta.json")
  return res.json();
}

const App = () => {

  const playerPromise = featchPlayer();

  return (
    <div>
      <Navber />
      <Banner />
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <Player playerPromise = {playerPromise}/>
      </Suspense>
    </div>
  );
};

export default App;