import { useState } from 'react';
import flagArgentina from './assets/flags/ar.png';
import { Flag } from './components/Flag';
import { Score } from './components/Score';
import Timer from './components/Timer';
import { Trivia } from './components/Trivia'; 

const options = [
  { id: 'A', title: 'Argentina' },
  { id: 'B', title: 'Uruguay' },
  { id: 'C', title: 'Brasil' },
  { id: 'D', title: 'Paraguay' }
];

export const FlagsQuiz = () => { 
  
  const [attempts, setAttempts] = useState(0);
  const [hits, setHits] = useState(0); 

  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>        
        <div className="w-1/2 mx-auto mt-10">
          <Timer />        
          <Flag flagImage={ flagArgentina }></Flag>
          <Trivia options={ options } />
          <Score attempts={ attempts } hits={ hits } />
        </div>
      </div>
    </div>
  )
}

