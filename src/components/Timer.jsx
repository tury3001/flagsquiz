import { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import { PropTypes } from "prop-types";

export const Timer = ({ onFinish, timerStartWatcher, timerStopWatcher = '' }) => {

  const countdownFinish = () => {
    onFinish();
  }

  const { percentage, startTimer, stopTimer }  = useTimer({
    initialPercentage: 100,
    countdownFinish
  });

  useEffect( () => {
    startTimer();
  }, [ timerStartWatcher ]);

  useEffect( () => {
    if (timerStopWatcher.length > 0) {
      stopTimer();
    }
  }, [ timerStopWatcher ]);

  return (
    <div className="text-2xl flex justify-center mt-10 mb-10">
      <div className="h-5 bg-white w-[600px] border border-slate-300 rounded-md shadow-sm">
        <div className={ `h-full bg-green-600` } style={{ width: percentage + '%' }}></div>
      </div>
    </div>
  )
}

Timer.propTypes = {
  onFinish: PropTypes.func,
  timerStopWatcher: PropTypes.string
}