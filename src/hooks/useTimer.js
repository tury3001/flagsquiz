import { useEffect, useRef, useState } from "react"

export const useTimer = ({ initialPercentage, countdownFinish }) => {

  const currentTimer = useRef();
  const [ percentage, setPercentage ] = useState(initialPercentage);

  useEffect( () => {
    if (percentage <= 0) {
      countdownFinish();
      return;
    }

    currentTimer.current = setTimeout( () => {
      setPercentage( (percentage) => percentage - 0.25)
    }, 25)    

    return () => clearTimeout(currentTimer.current);

    }, [ percentage ]);

  const startTimer = () => {
    setPercentage(100);
  }

  const stopTimer = () => {
    clearTimeout(currentTimer.current);
  }

  return { percentage, startTimer, stopTimer }
}