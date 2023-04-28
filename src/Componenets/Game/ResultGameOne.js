import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import success from '../../lottie/fireworks.json'
import Lottie from "lottie-react"
const ScoreBoard = () => {
  
   // get from local storage

   const scoreFromStorage = localStorage.getItem('score2');
   const [score, setscore] = useState(scoreFromStorage || '10');
   
   const moneyFromStorage = localStorage.getItem('money2');
   const [money, setmoney] = useState(moneyFromStorage || '100');
   // get from local storage
    return (

   
    <div className="flex flex-col items-center justify-center bg-gray-900 py-10">
        <div className='w-48'>
        <Lottie animationData={success}/>
        </div>
      <h2 className="text-4xl font-bold text-white mb-8">Game Finish</h2>
      <div className="bg-gray-800 rounded-md p-4 w-96 mb-8">
        <h3 className="text-white text-lg mb-2">Score:</h3>
        <p className="text-green-500 text-2xl font-bold">{score}</p>
      </div>
     
      <div className="bg-gray-800 rounded-md p-4 w-96 mb-8">
        <h3 className="text-white text-lg mb-2">Remaining Money:</h3>
        <p className="text-red-500 text-2xl font-bold">{money}</p>
      </div>
      
      <div className="flex justify-between w-96 mb-8">
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          to={'/'}
        >
          Return Home
        </Link>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          
        >
          Settings
        </button>
      </div>
      <p className="text-gray-500">© 2023 My Game Company. All rights reserved.</p>
      
    </div>
  );
};

export default ScoreBoard;
