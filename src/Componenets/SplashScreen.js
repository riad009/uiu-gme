import React, { useEffect, useState } from "react";
import robot from '../lottie/gameicon.json'
import Lottie from "lottie-react"
import './Splash.css'
import { Link } from "react-router-dom";


function SplashScreen() {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       window.location.replace("/home");
//     }, 5000000);
// }, []);
//     return () => clearTimeout(timeout);
//   }, []);

const handleClick = () => {
    window.location.replace("/gameone");
    console.log('Button press!');
  };
 
  //

  const [selectedGame, setSelectedGame] = useState(null);

  function handleGameClick(game) {
    setSelectedGame(game);
  }

  return (
    <div class="grid lg:grid-cols-2 sm:grid-cols-1">
    <div class="col-span-1 w-70 flex items-center justify-center h-screen">
      <Lottie animationData={robot}/>
    </div>
    {/*  */}
    <div class="right col-span-1 items-center h-screen">
  <div class="logo text-4xl font-bold mb-6">
   
   <p className="title"> Runner Games</p>
  </div>
  <div class="menu">
    <p class="text-lg font-semibold mb-3">Choose a game:</p>
    <div class="games">
    <a  class="game">
        <i class="fas fa-chess-pawn mr-3"></i>
       <Link to={'/gameone'}>  Runner</Link>
      </a>
      <a  class="game">
        <i class="fas fa-chess-pawn mr-3"></i>
       <Link to={'/chat'}>  Chat</Link>
      </a>
      <a  class="game">
        <i class="fas fa-chess-pawn mr-3"></i>
       <Link to={'/guess'}> Do Guess</Link>
      </a>
      <a  class="game">
        <i class="fas fa-chess-pawn mr-3"></i>
       <Link to={'/topplayer'}>  Top player</Link>
      </a>
    </div>
  </div>
  <Link to={'/gameone'} class="start mt-10" >Start Game</Link>
  <svg class="shape" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path fill="#3B82F6" d="M0 0 L50 100 L100 0 Z"></path>
  </svg>
</div>


  </div>
  
  
  );
}

export default SplashScreen;
