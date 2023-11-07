import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaShare, FaStar } from "react-icons/fa"
import { TriviaContext } from "../context";
import { messageGenerator } from "../helpers/messageGenerator";
import { GameButton } from "../ui/GameButton";

export const GameSummary = () => {

  const { totalQuestions, score, setRetry } = useContext(TriviaContext);
  const [ message, setMessage ] = useState('');

  useEffect( () => {
    const message = messageGenerator(score, totalQuestions);
    setMessage(message);
  }, [ score ]);

  const onRetry = () => {
    setRetry();
  }

  return (
    <div>
      <div className="rounded-full">
          <img
            src="src/assets/ui/girl-flag.png"
            alt="Flag quiz"
            className="object-cover object-center h-40 w-full rounded-t-lg"
          />
        </div>
        <div className="flex justify-center items-center h-4/5">
      
      <div className="flex flex-col text-white">
        <h1 className="text-4xl text-center  mt-10">Puntaje final</h1>
        <h2 className="text-6xl text-center mt-5">{ score}/{ totalQuestions }</h2>
        <div className="flex text-3xl justify-center text-yellow-500 mt-5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="text-center text-2xl mt-5 mb-5">
          <span className="text-2xl">{ message }</span>
        </div>
        <div className="flex flex-col justify-center mt-5 mb-5 text-center">
          <div className="mb-5">
            <GameButton label="Reintentar" onClickButton={ onRetry }></GameButton>
          </div>
          <div className="mb-3">
            <GameButton label="Volver al menú principal"></GameButton>
          </div>
        </div>      
      </div>
      </div>
    </div>    
  )
}
