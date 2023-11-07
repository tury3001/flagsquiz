import { useContext } from 'react';
import { TriviaContext } from './context';
import { FlagQuizMenu } from "./components/FlagQuizMenu";
import { GameSummary } from './components/GameSummary';
import FlagQuizHome from './components/FlagQuizHome';
import { FlagQuizGame } from './components/FlagQuizGame';

export const FlagsQuiz = () => {

  const { isSummary, isGame, isFrontPage, isMenu, beginTrivia, setMenu } = useContext(TriviaContext);

  const startTrivia = (regions, selectedNumberQuestions) => {
    if (regions[0] === 'El mundo entero')
      beginTrivia([], selectedNumberQuestions);
    else
      beginTrivia(regions, selectedNumberQuestions);
  }

  return (
    <div className=" h-screen flex items-center animate__animated animate__fadeIn">
      <div className="mx-auto shadow-lg border rounded-md w-[600px] h-[1000px] bg-gradient-to-b from-sky-600 to-sky-700">
        { isFrontPage ? <FlagQuizHome goToMenu={ setMenu } /> : '' }
        { isMenu ? <FlagQuizMenu onContinue={ startTrivia } /> : '' }
        { isGame ? <FlagQuizGame /> : '' }
        { isSummary ? <GameSummary /> : '' }
      </div>
    </div>
  )
}