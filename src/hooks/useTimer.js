import {useState, useEffect} from 'react';

export function useTimer(seconds, enabled = true) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [paused, setPaused] = useState(false);

  function reset() {
    setTimeLeft(seconds);
  }

  function pause() {
    setPaused(true);
  }

  function resume() {
    setPaused(false);
  }

  useEffect(() => {
    if (!(timeLeft && enabled) && !paused) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, enabled, paused]);

  return {
    timeLeft,
    reset,
    pause,
    resume,
  };
}
