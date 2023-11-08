import { useContext, useEffect, useState } from "react"
import { TriviaContext } from "../context"
import { Loading } from "../ui/Loading"
import { Score } from "./Score"
import { Timer } from "./Timer"
import { Trivia } from "./Trivia"
import { TriviaCreator } from "../model/triviaCreator"

export const FlagQuizGame = () => {

  const [ trivia, setTrivia ] = useState();

  const { score, isLoading, flag, questionNumber, options, optionsDisabled,
          userAnswer, disableOptions, revealSolution, loadNextQuestion,
          setCorrectAnswer, setGameOver, isQuestionFinished,
          increaseQuestionNumber, totalQuestions, regions } = useContext(TriviaContext);

  const onFinishTimer = () => {
    disableOptions();
    setTimeout( () => revealSolution(), 2000);
  }

  useEffect(() => {    
    const triviaCreator = new TriviaCreator(regions, totalQuestions);
    const trivia = triviaCreator.getTrivia();    
    setTrivia(trivia);
  }, []);

  useEffect(() => {
    if (trivia && questionNumber > 0) {
      console.log('questionNumber: ' + questionNumber);
      console.log('totalQuestions: ' + totalQuestions);
      if (questionNumber <= totalQuestions) {        
        loadNextQuestion(trivia[questionNumber-1].flag, trivia[questionNumber-1].options);
        setCorrectAnswer(trivia[questionNumber-1].correctAnswer);
      } else {
        setGameOver();
      }
    }
    
  }, [ trivia, questionNumber ]);

  useEffect(() => {
    if (isQuestionFinished) {
      setTimeout( () => increaseQuestionNumber(), 5000)
    }
  }, [ isQuestionFinished ]);
          

  return (
    <div className="mx-auto px-8 py-3 bg-sky-600 h-full">
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
