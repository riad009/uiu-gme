import React, { useState, useEffect } from 'react';

const TopInfo = () => {
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    // Define the function that will decrement the secondsLeft state
    const decrementSeconds = () => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    };

    // Set up the interval to decrement the secondsLeft state every second
    const intervalId = setInterval(decrementSeconds, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{secondsLeft} seconds left</p>
    </div>
  );
};

export default TopInfo;
