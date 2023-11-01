import { Flag } from "./Flag"
import { TriviaOptions } from "./TriviaOptions"

export const Trivia = ({ questionNumber, options, optionsDisabled, flag }) => {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="uppercase text-xl mb-10">Pregunta { questionNumber }</h3>
      </div>
      <Flag code={ flag }></Flag>
      <TriviaOptions options={ options } disableInput={ optionsDisabled }/>
    </>
  )
}