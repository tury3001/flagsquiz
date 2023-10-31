import { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";

export const Timer = () => {

  const countdownFinish = () => {
    
  }

  const { percentage, startTimer, stopTimer }  = useTimer({
    initialPercentage: 100,
    countdownFinish
  });

  useEffect( () => {
    console.log('disparando el inicio del timer');
    startTimer();
  }, []);

  return (
    <div className="text-2xl flex justify-center mt-10 mb-10">
      <div className="h-5 bg-gray-100 w-[600px] rounded-sm">
        <div className={ `h-full bg-green-600` } style={{ width: percentage + '%' }}></div>
      </div>
    </div>
  )
}