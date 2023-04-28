import React, { useState, useEffect, useLayoutEffect } from 'react';
import './GameOne.css';
import { BiRun } from 'react-icons/bi';
import boy from '../../img/boy4.png';
import TopInfo from './TopInfo';
import beggar from '../../img/beggar1.png';
import cycle from '../../img/cycle.png';
import time from '../../lottie/time2.json'
import sun from '../../lottie/sun.json'
import location from '../../lottie/location.json'
import runningboy from '../../lottie/boy-run-2.json'
import Lottie from "lottie-react"
import { BiTime } from 'react-icons/bi';
import { GrMoney } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
const GameOne = () => {
  const [position, setPosition] = useState({ x: 0, y: 350 });
  const [isMoving, setIsMoving] = useState(null);

  const [beggarPosition, setBeggarPosition] = useState({ x: 300, y: 300 });
  const [beggarPosition2, setBeggarPosition2] = useState({ x: 700, y: 400});
  
  const [destination, setdestination] = useState({ x: 1200, y: 450});
  const [alertShown, setAlertShown] = useState(false);
  const [alertShown2, setAlertShown2] = useState(false);

  const [helpText, setHelpText] = useState("help me");
  const [helpText2nd, setHelpText2nd] = useState("help me");
  const [money,setmoney]=useState('100')
  const [score,setcore]=useState('10')
  const [remainingTime, setRemainingTime] = useState(2000);
  //save data local storage

  useEffect(() => {
    localStorage.setItem('money', money);
  }, [money]);

  useEffect(() => {
    localStorage.setItem('remainingTime', remainingTime);
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [money]);


  //save data local storage
  useEffect(() => {
    const distance = Math.sqrt((position.x - beggarPosition.x) ** 2 + (position.y - beggarPosition.y) ** 2);
    if (distance <= 100 && !alertShown) {
      const answer = window.confirm('Do you want to help the 1st beggar?');
      setAlertShown(true);
      if (answer) {
        const donationAmount = prompt("Please enter the amount you want to donate:");
        if (donationAmount) {
          setHelpText(`You donated  ${donationAmount} to the beggar.`);
          setmoney( `${money-donationAmount}`)
          setcore(parseInt(score)+20)
        } else {
          setHelpText("You helped the beggar without a donation.");
        }
      } else {
        setHelpText("You did not help the beggar.");
      }
    }
  }, [position, beggarPosition, alertShown]);
  
  
  useEffect(() => {
    const distance = Math.sqrt((position.x - beggarPosition2.x) ** 2 + (position.y - beggarPosition2.y) ** 2);
    if (distance <= 100 && !alertShown2) {
      const answer = window.confirm('Do you want to help the 2nd beggar?');
      setAlertShown2(true);
      if (answer) {
        const donationAmount = prompt("Please enter the amount you want to donate:");
        if (donationAmount) {
          setHelpText2nd(`You donated ${donationAmount} to the beggar.`);
          setmoney( `${money-donationAmount}`)
          setcore(parseInt(score)+10)
         
        } else {
          setHelpText2nd("You helped the beggar without a donation.");
        }
      } else {
        setHelpText2nd("You did not help the beggar.");
      }
    }
  }, [position, beggarPosition2, alertShown2]);
  const navigate = useNavigate();

  
  if (position.x >= 1200) { // check if the boy crosses 100px
    navigate("/gameonelvl2");
   
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
     
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
         
      alert("Game over! Restart ");
      window.location.reload(false);
    }
  }, [remainingTime]);



  const handleMove = (x, y) => {
    setPosition({ x, y });
  };


  
  const handleMouseDown = (direction) => {
    setIsMoving(direction);
  };

  const handleMouseUp = () => {
    setIsMoving(null);
  };

  useEffect(() => {
    let intervalId;
    if (isMoving) {
      intervalId = setInterval(() => {
        handleMove(position.x + isMoving.x, position.y + isMoving.y);
      }, 50);
    }
    return () => clearInterval(intervalId);
  }, [isMoving, position]);

  return (
    <section className='main'>
         <div className='ml-16 w-16'>
         <Lottie animationData={sun}/>
         </div>
      {/* <h2 className='w-12 h-auto text-red-800 '>
      <Lottie animationData={time}/>
      <p className='text-2xl font-bold'>{remainingTime}</p>
      </h2> */}
      <div className=" rounded-5 border-2 rounded border-green-800  bg-blue-500 w-1/5 h-1/5 fixed right-1 top-1 text-white font-bold">
        <div style={{opacity : 1.0}} className='flex p-1 justify-evenly bg-yellow-500  text-white mb-1'>
        <h2>Journey Quest</h2>
        <h2 className='flex gap-1' >level: <p className='text-black'>1</p></h2>
        </div>
       

        <div className='flex justify-around mt-1'>
       <h2 className='flex gap-1'> money: <p className='text-black'>{money}</p></h2>
       <h2 className='flex gap-1' >score: <p className='text-black'>{score}</p></h2>
        </div>
        <div className='flex justify-around mt-1'>
        <p className='flex gap-1 w-20' >    <Lottie animationData={time}/> <p className='mt-2 text-black'>
          {remainingTime}</p> </p>
      
          <h2 className='mt-3 flex gap-1'> dts: <p className='text-black'>{position.x} - {position.y}  </p> </h2>
          </div>
       
      </div>

      <div style={{ position: 'relative' }}>
  <img src={beggar} className='w-10 h-auto' alt="" style={{ position: 'absolute', left: `${beggarPosition.x}px`, top: `${beggarPosition.y}px` }} />
  <div style={{ position: 'absolute', left: `${beggarPosition.x}px`, top: `${beggarPosition.y - 50}px`, textAlign: 'center' }}>
    <h2 className='  font-bold '>{helpText}</h2>
  </div>
</div>

{/*  */}

<div style={{ position: 'relative' }}>
  <img src={beggar} className='w-10 h-auto' alt="" style={{ position: 'absolute', left: `${beggarPosition2.x}px`, top: `${beggarPosition2.y}px` }} />
  <div style={{ position: 'absolute', left: `${beggarPosition2.x}px`, top: `${beggarPosition2.y - 50}px`, textAlign: 'center' }}>
    <h2 className='text-white   font-bold '>{helpText2nd}</h2>
  </div>
</div>

{/*  */}


<div className='w-18 h-18' style={{ position: 'absolute', left: `${destination.x}px`, top: `${destination.y - 50}px`, textAlign: 'center' }}>
<Lottie animationData={location}/>
</div>

      <div>
        <div className="game-container ">
          {/* <img
            src={boy}
            alt="a boy"
            className="boy w-10 h-auto"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          /> */}
          <p style={{ transform: `translate(${position.x}px, ${position.y}px)` }} className='w-20'>
          <Lottie animationData={runningboy}/>

          </p>

<div className="fixed bottom-4 left-1">
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="flex space-x-2">
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          onMouseDown={() => handleMouseDown({ x: 0, y: -10 })}
          onMouseUp={() => handleMouseUp()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-full border border-blue-700 transform hover:scale-110 transition-all"
        >
          <span className="text-1xl">&uarr;</span>
        </button>
      </div>
    </div>
    <div className="flex space-x-1">
      <div className="flex flex-row items-center justify-center space-x-4">
        <button
          onMouseDown={() => handleMouseDown({ x: -10, y: 0 })}
          onMouseUp={() => handleMouseUp()}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-full border border-yellow-700 transform hover:scale-110 transition-all"
        >
          <span className="text-1xl">&larr;</span>
        </button>
        <button
          onMouseDown={() => handleMouseDown({ x: 10, y: 0 })}
          onMouseUp={() => handleMouseUp()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full border border-red-700 transform hover:scale-110 transition-all"
        >
          <span className="text-1xl">&rarr;</span>
        </button>
      </div>
    </div>
    <div className="flex space-x-1">
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          onClick={() => handleMove(position.x, position.y + 40)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full border border-green-700 transform hover:scale-110 transition-all"
        >
          <span className="text-1xl">&darr;</span>
        </button>
      </div>
    </div>
  </div>
</div>

          
        </div>
      </div>
    </section>
  );
};

export default GameOne;
    
 
