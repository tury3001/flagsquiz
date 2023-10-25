import { useContext, useEffect, useState } from 'react';
import { Flag } from './components/Flag';
import { Score } from './components/Score';
import Timer from './components/Timer';
import { Trivia } from './components/Trivia';
import { TriviaCreator } from './model/triviaCreator';
import { TriviaContext } from './context';

export const FlagsQuiz = () => {

  const { hits, questionNumber, setCorrectAnswer } = useContext(TriviaContext);

  useEffect(() => {
    const triviaCreator = new TriviaCreator('América', 10);
    const trivia = triviaCreator.getTrivia();
    setCurrentQuestion(trivia[questionNumber]);
    setCorrectAnswer(trivia[questionNumber].correctAnswer)
  }, [])
  

  const [currentQuestion, setCurrentQuestion] = useState({ flag: '', options: [] });

  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>     
        <div className="w-1/2 mx-auto mt-10">
          <div className="flex justify-center">
            <h3 className="uppercase text-xl">Pregunta { questionNumber }</h3>    
          </div>
          <Timer />
          <Flag code={ currentQuestion.flag }></Flag>
          <Trivia options={ currentQuestion.options } />
          <Score hits={ hits } />
        </div>
      </div>
    </div>
  )
}

