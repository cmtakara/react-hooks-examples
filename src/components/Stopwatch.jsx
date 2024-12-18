import { useState, useRef } from 'react';

function Stopwatch() {
    const [ startTime, setStartTime ] = useState(null);
    const [ now, setNow ] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        // start counting
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 100);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime)/1000;
    }

  return (
    <>
    <h2>Stopwatch Example</h2>
    <h3>Time passed: {secondsPassed.toFixed(3)} </h3>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default Stopwatch