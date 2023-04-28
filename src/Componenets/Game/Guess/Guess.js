import React, { useState, useEffect } from 'react';
import './Game.css';


const Guess = () => {
  const [ballBox, setBallBox] = useState(Math.floor(Math.random() * 4));
  const [selectedBox, setSelectedBox] = useState(null);
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearTimeout(timer);
      alert(`Time's up! Total points: ${points}`);
      window.location.reload();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, points]);

  const handleBoxClick = (boxIndex) => {
    setSelectedBox(boxIndex);
    if (boxIndex === ballBox) {
      setPoints(points + 1);
      setBallBox(Math.floor(Math.random() * 4));
    }
  };

  const getMessage = () => {
    if (selectedBox === ballBox) {
      return "Congratulations! You won!";
    } else {
      return "Sorry, please try again.";
    }
  };

  return (
    <div className="bg-pic flex flex-wrap justify-center">
      <div className="w-full text-center font-bold text-2xl mb-4">
        Time left: {timeLeft} s  
      </div>
      
      {[0, 1, 2, 3].map((boxIndex) => (
        <div 
          className={`w-36 h-36 m-4 flex justify-center items-center font-bold text-xl cursor-pointer 
                      ${selectedBox === boxIndex ? (boxIndex === ballBox ? 'bg-green-300' : 'bg-red-300') : 'bg-gray-300'}`}
          onClick={() => handleBoxClick(boxIndex)}
        >
          {selectedBox === boxIndex ? (
            <div className="w-full h-full flex justify-center items-center">
              {getMessage()}
            </div>
          ) : (
            <div className="bg-white h-20 w-20 rounded-md shadow-lg"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Guess; 
