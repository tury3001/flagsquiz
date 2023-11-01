import { useContext, useEffect } from 'react';

import { Score } from './components/Score';
import { Timer } from './components/Timer';
import { TriviaCreator } from './model/triviaCreator';
import { TriviaContext } from './context';
import { Loading } from './ui/Loading';
import { Trivia } from './components/Trivia';

const triviaCreator = new TriviaCreator('África', 10);
const trivia = triviaCreator.getTrivia();

export const FlagsQuiz = () => {

  const {
    hits, questionNumber, setCorrectAnswer, options,
    increaseQuestionNumber, flag, disableOptions, optionsDisabled, loadNextQuestion,
    revealSolution, isLoading, isQuestionFinished } = useContext(TriviaContext);

  useEffect(() => {
    loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
    setCorrectAnswer(trivia[questionNumber-1].correctAnswer);
  }, []);

  useEffect(() => {
    loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
    setCorrectAnswer(trivia[questionNumber-1].correctAnswer);
  }, [ questionNumber ]);

  useEffect(() => {
    console.log('cambio de isQuestionFinished')
    setTimeout( () => increaseQuestionNumber(), 5000)
  }, [ isQuestionFinished ]);

  const onFinishTimer = () => {
    console.log('Se termino el tiempo');
    disableOptions();
    setTimeout( () => revealSolution(), 2000);
  }

  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>      
        <div className="w-1/2 mx-auto mt-10">
          <Score hits={ hits } />
          {
            isLoading
            ? <Loading />
            : <Trivia
                flag={ flag }
                questionNumber={ questionNumber }
                options={ options }
                optionsDisabled={ optionsDisabled }
              />
            }
          <Timer onFinish={ onFinishTimer } timerWatch={ questionNumber }/>        
        </div>        
      </div>
    </div>
  )
}

