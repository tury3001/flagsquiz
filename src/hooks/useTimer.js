import { useEffect, useRef, useState } from "react"

export const useTimer = ({ initialPercentage, countdownFinish }) => {

  console.log('Initial percentage: ' + initialPercentage);

  const currentTimer = useRef();
  const [ percentage, setPercentage ] = useState(initialPercentage);

  useEffect( () => {
    if (percentage <= 0) {
      countdownFinish();
      return;
    }

    currentTimer.current = setTimeout( () => {
      console.log('Ciclando...');
      setPercentage( (percentage) => percentage - 10)
    }, 1000)    

    return () => clearTimeout(currentTimer.current);

    }, [ percentage ]);

  const startTimer = () => {
    setPercentage(100);
  }

  return { percentage, startTimer }
}