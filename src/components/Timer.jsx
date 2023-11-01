import { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import { PropTypes } from "prop-types";

export const Timer = ({ onFinish, timerWatch }) => {

  const countdownFinish = () => {
    onFinish();
  }

  const { percentage, startTimer, stopTimer }  = useTimer({
    initialPercentage: 100,
    countdownFinish
  });

  useEffect( () => {
    startTimer();
  }, [ timerWatch ]);

  return (
    <div className="text-2xl flex justify-center mt-10 mb-10">
      <div className="h-5 bg-gray-100 w-[600px] rounded-sm">
        <div className={ `h-full bg-green-600` } style={{ width: percentage + '%' }}></div>
      </div>
    </div>
  )
}

Timer.propTypes = {
  onFinish: PropTypes.func
}