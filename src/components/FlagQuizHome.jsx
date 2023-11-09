import { GameButton } from "../ui/GameButton";

export const FlagQuizHome = ({ goToMenu }) => {

  const onGoToMenu = () => {
    goToMenu();
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-center flex-col rounded-t-lg">
          <img
            src="/assets/ui/girl-flag.png"
            alt="Flag quiz"
            className="rounded-t-lg"
          />
        </div>      
        <div className="text-white text-center text-5xl py-4 mb-10 flex justify-center">
          asdasd
          <img
            src="/assets/ui/logo-trivia-banderas.png"
            alt="Trivia de Banderas"
            width="90%"
          />
        </div>
        <div className="flex flex-col items-center">
            <GameButton label="Comenzar" onClickButton={ onGoToMenu } />
        </div>
      </div>
      <div className="text-white text-xs text-center mb-5">
        Desarrollado por Alejandro A. De Luca - 2023
      </div>
    </div>
  )
}

export default FlagQuizHome
