import { useContext } from "react";
import { FaArrowAltCircleLeft, FaShare, FaStar } from "react-icons/fa"
import { TriviaContext } from "../context";

export const GameSummary = () => {

  const { totalQuestions, score, setRetry } = useContext(TriviaContext);

  const onRetry = () => {
    setRetry();
  }

  return (
    <div className="flex justify-center items-center h-4/5">
      <div className="flex flex-col">
        <h1 className="text-4xl text-center">Puntaje final</h1>
        <h2 className="text-6xl text-center mt-5">{ score}/{ totalQuestions }</h2>
        <div className="flex text-3xl justify-center text-fqred mt-5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="text-center text-2xl mt-5 mb-5">
          <span className="text-2xl">Tienes que mejorar</span>
        </div>
        <div className="flex flex-col justify-center mt-5 mb-5">
          <button
            className="bg-fqgreen text-white text-2xl mr-2 px-8 py-2 rounded mb-5"
            onClick={ onRetry }
          >
            <div className="flex items-center">
              <FaShare /><span className="ml-3">Reintentar</span>
            </div>
          </button>
          <button className="bg-fqgreen text-white text-2xl mr-2 px-8 py-2 rounded">
            <div className="flex items-center">
              <FaArrowAltCircleLeft /><span className="ml-3">Volver al menú principal</span>
            </div>
          </button>
        </div>      
      </div>
    </div>
    
  )
}
