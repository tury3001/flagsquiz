import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaShare, FaStar } from "react-icons/fa"
import { TriviaContext } from "../context";
import { messageGenerator } from "../helpers/messageGenerator";
import { GameButton } from "../ui/GameButton";

export const GameSummary = () => {

  const { totalQuestions, score, setRetry, setMenu } = useContext(TriviaContext);
  const [ message, setMessage ] = useState('');

  useEffect( () => {
    const message = messageGenerator(score, totalQuestions);
    setMessage(message);
  }, [ score ]);

  const onRetry = () => {
    setRetry();
  }

  const onGoToFrontPage = () => {
    setMenu();
  }

  return (
    <div>
      <div className="rounded-full">
          <img
            src="src/assets/ui/girl-flag.png"
            alt="Flag quiz"
            className="object-cover object-center h-80 w-full rounded-t-lg"
          />
        </div>
        <div className="flex justify-center items-center h-4/5">
      
      <div className="flex flex-col text-white">
        <h1 className="text-4xl mt-10 text-center">Puntaje final</h1>
        <div className="text-center mt-5 flex justify-center">
          <h2 className="text-6xl bg-white text-zinc-600 px-5 py-3 rounded-full">
            { score}/{ totalQuestions }
          </h2>
        </div>
        <div className="flex text-3xl justify-center text-yellow-500 mt-5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>        
        <div className="mt-5 mb-5 text-center flex justify-center">
          <div className="text-2xl w-4/5">{ message }</div>
        </div>
        <div className="flex flex-col justify-center mt-5 mb-5 text-center">
          <div className="mb-5">
            <GameButton label="Reintentar" onClickButton={ onRetry }></GameButton>
          </div>
          <div className="mb-3">
            <GameButton label="Volver al menú principal" onClickButton={ onGoToFrontPage }></GameButton>
          </div>
        </div>      
      </div>
      </div>
    </div>    
  )
}
