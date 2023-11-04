import { useContext, useEffect } from 'react';

import { Score } from './components/Score';
import { Timer } from './components/Timer';
import { TriviaCreator } from './model/triviaCreator';
import { TriviaContext } from './context';
import { Loading } from './ui/Loading';
import { Trivia } from './components/Trivia';
import { FlagQuizMenu } from "./components/FlagQuizMenu";
import { GameSummary } from './components/GameSummary';

const triviaCreator = new TriviaCreator('América', 10);
const trivia = triviaCreator.getTrivia();

export const FlagsQuiz = () => {

  const {
    score, questionNumber, setCorrectAnswer, options, userAnswer,
    beginTrivia, increaseQuestionNumber, flag, disableOptions, optionsDisabled, loadNextQuestion,
    revealSolution, isLoading, isQuestionFinished, isSummary, setGameOver, isGame } = useContext(TriviaContext);

  useEffect(() => {
    beginTrivia();
    loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
    setCorrectAnswer(trivia[questionNumber-1].correctAnswer);
  }, []);

  useEffect(() => {

    if (questionNumber < 10) {
      loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
      setCorrectAnswer(trivia[questionNumber-1].correctAnswer);
    } else {
      setGameOver();
    }
    
  }, [ questionNumber ]);

  useEffect(() => {
    if (isQuestionFinished) {
      setTimeout( () => increaseQuestionNumber(), 5000)
    }
  }, [ isQuestionFinished ]);

  const onFinishTimer = () => {
    disableOptions();
    setTimeout( () => revealSolution(), 2000);
  }

  const displayGameSummary = () => {
    if (isSummary) {
      return <GameSummary />
    }
  }

  const displayGame = () => {
    if (isGame && !isSummary) {
      return (
        <div className="mx-auto px-8 py-3">
          <Score value={ score } />
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
          <Timer
            onFinish={ onFinishTimer }
            timerStartWatcher={ questionNumber }
            timerStopWatcher={ userAnswer }
          />        
        </div>
      )
    }
  }

  return (
    <div className="container mx-auto w-[600px] bg-fqwhite h-5/6 shadow-md border rounded-md border-slate-300 mt-4">
      <header className="py-3 border-b">
        <h1 className="text-2xl flex justify-center">Trivia de Banderas</h1>
      </header>
      <FlagQuizMenu />
      {/* { displayGame() }
      { displayGameSummary() } */}
    </div>
  )
}