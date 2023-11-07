import { GameButton } from "../ui/GameButton";

export const FlagQuizHome = ({ goToMenu }) => {

  const onGoToMenu = () => {
    goToMenu();
  }

  return (
    <>
      <div className="flex justify-center flex-col rounded-t-lg">
        <img
          src="src/assets/ui/girl-flag.png"
          alt="Flag quiz"
          className="rounded-t-lg"
        />
      </div>
      <div className="text-white text-center text-5xl py-4 mb-10 mt-5">
        Trivia de Banderas
      </div>
      <div className="flex justify-center mb-10">
        <GameButton label="Comenzar" onClickButton={ onGoToMenu } />
      </div>
    </>
  )
}

export default FlagQuizHome
