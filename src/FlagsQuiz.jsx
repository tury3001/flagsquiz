import { useEffect, useState } from 'react';
import flagArgentina from './assets/flags/ar.png';
import { Flag } from './components/Flag';
import { Score } from './components/Score';
import Timer from './components/Timer';
import { Trivia } from './components/Trivia';
// import { getQuestions } from './api/flagsAPI';
import * as triviaData from './data/trivia-data.json';

// const options = [
//   { id: 'A', title: 'Argentina' },
//   { id: 'B', title: 'Uruguay' },
//   { id: 'C', title: 'Brasil' },
//   { id: 'D', title: 'Paraguay' }
// ];

export const FlagsQuiz = () => {

  useEffect(() => {
    console.log('Fetch questions');
    console.log(triviaData.trivia);
    setOptions(triviaData.trivia[2].options)
  }, [])
  
  
  const [attempts, setAttempts] = useState(0);
  const [hits, setHits] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [options, setOptions] = useState([]);

  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>        
        <div className="w-1/2 mx-auto mt-10">
          <Timer />        
          <Flag flagImage={ flagArgentina }></Flag>
          <Trivia options={ options } />
          <Score hits={ hits } attempts={ questionNumber - 1 } />
        </div>
      </div>
    </div>
  )
}

