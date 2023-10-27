import { useContext, useEffect } from 'react';
import { Flag } from './components/Flag';
import { Score } from './components/Score';
import { Timer } from './components/Timer';
import { Trivia } from './components/Trivia';
import { TriviaCreator } from './model/triviaCreator';
import { TriviaContext } from './context';

const triviaCreator = new TriviaCreator('África', 10);
const trivia = triviaCreator.getTrivia();

export const FlagsQuiz = () => {

  const {
    hits, questionNumber, setCorrectAnswer, options,
    increaseQuestionNumber, flag, disableOptions, loadNextQuestion } = useContext(TriviaContext);

  useEffect(() => {
    loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
    setCorrectAnswer(trivia[questionNumber-1].correctAnswer);
  }, []);

  useEffect(() => {
    loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
    setCorrectAnswer(trivia[questionNumber-1].correctAnswer);

  }, [ questionNumber ]);

  const next = () => {
    increaseQuestionNumber();
  }

  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>     
        <div className="w-1/2 mx-auto mt-10">
          <div className="flex justify-center">
            <h3 className="uppercase text-xl mb-10">Pregunta { questionNumber }</h3>    
          </div>
          <Flag code={ flag }></Flag>
          <Trivia options={ options } disableInput={ disableOptions }/>
          <Score hits={ hits } />
          <div className="mt-5 flex justify-center">
            <button
              disabled={ questionNumber >= 10 }
              onClick={ next }
              className="btn bg-sky-600 text-white px-4 py-2 rounded"
            >Siguiente</button>
          </div>
          <Timer />
        </div>
      </div>
    </div>
  )
}

