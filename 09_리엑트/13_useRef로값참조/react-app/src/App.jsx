import './App.css';
import { useState, useRef } from 'react';

export default function stopwatch() {
  const [startTime, setStartTime] = useState(null);
  function handleStart() {}
  function handleStop() {}
  return (
    <>
      <h1>스톱워치:</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
