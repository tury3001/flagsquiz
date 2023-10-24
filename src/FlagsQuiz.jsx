import { useEffect, useState } from 'react';
import { Flag } from './components/Flag';
import { Score } from './components/Score';
import Timer from './components/Timer';
import { Trivia } from './components/Trivia';
import { TriviaCreator } from './model/triviaCreator';


export const FlagsQuiz = () => {

  useEffect(() => {
    const triviaCreator = new TriviaCreator('América', 10);
    triviaCreator.getTrivia();

    // setCurrentQuestion(questions[questionNumber]);
    // setOptions(questions[questionNumber].options);
  }, []) 
  
  const [attempts, setAttempts] = useState(0);
  const [hits, setHits] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(7);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [options, setOptions] = useState([]);

  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>        
        <div className="w-1/2 mx-auto mt-10">
          <Timer />        
          <Flag code={ currentQuestion.code }></Flag>
          <Trivia options={ options } />
          <Score hits={ hits } attempts={ questionNumber - 1 } />
        </div>
      </div>
    </div>
  )
}

