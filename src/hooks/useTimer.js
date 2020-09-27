import {useState, useEffect} from 'react';

export function useTimer(seconds, enabled = true) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!(timeLeft && enabled)) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, enabled]);

  return {
    timeLeft: `${timeLeft > 9 ? timeLeft : `0${timeLeft}`}`,
  };
}
