import { useReducer } from "react"
import { TriviaContext } from "./TriviaContext"
import { triviaReducer } from "./triviaReducer"
import { types } from "../types/types"

const init = () => {
  return {
    correctAnswer: '',
    userAnswer: '',
    questionNumber: 1,
    hits: 0    
  }
}

export const TriviaProvider = ({ children }) => {

  const [triviaState, dispatch] = useReducer(triviaReducer, {}, init)

  const sendAnswer = ( answer ) => {
    console.log(answer);
    const action = {
      type: types.sendAnswer,
      payload: {
        answer
      }
    }

    dispatch(action);
  }

  const setCorrectAnswer = ( answer ) => {
    const action = {
      type: types.setCorrectAnswer,
      payload: {
        answer
      }
    }

    dispatch(action);
  }

  return (
    <TriviaContext.Provider value={{
      ...triviaState,
      sendAnswer,
      setCorrectAnswer
    }}>
      { children }
    </TriviaContext.Provider>
  )
}