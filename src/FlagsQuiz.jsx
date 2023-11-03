import { useContext, useEffect } from 'react';

import { Score } from './components/Score';
import { Timer } from './components/Timer';
import { TriviaCreator } from './model/triviaCreator';
import { TriviaContext } from './context';
import { Loading } from './ui/Loading';
import { Trivia } from './components/Trivia';
import { FlagQuizMenu } from "./components/FlagQuizMenu";

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
    if (isQuestionFinished) {
      console.log('cambio de isQuestionFinished')
      setTimeout( () => increaseQuestionNumber(), 5000)
    }
  }, [ isQuestionFinished ]);

  const onFinishTimer = () => {
    console.log('Se termino el tiempo');
    disableOptions();
    setTimeout( () => revealSolution(), 2000);
  }

  return (
    <div className="container mx-auto w-[600px] bg-fqwhite">
      <div className="border rounded-md border-slate-300 shadow-md mt-3 mb-5">
      <header className="bg-zinc-700 py-3 text-white">
        <h1 className="text-2xl flex justify-center">Trivia de Banderas</h1>
      </header>
      {/* <FlagQuizMenu /> */}
        <div className="mx-auto p-8">
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

