import { useReducer } from "react"
import { TriviaContext } from "./TriviaContext"
import { triviaReducer } from "./triviaReducer"
import { types } from "../types/types"

const init = () => {
  return {
    flag: '',
    correctAnswer: '',
    questionNumber: 1,
    hits: 0,
    answerOk: false,
    success: false,
    fail: false,
    disableOptions: false,
    options: []
  }
}

export const TriviaProvider = ({ children }) => {

  const [triviaState, dispatch] = useReducer(triviaReducer, {}, init)
  const { correctAnswer, options } = triviaState;

  const setTrivia = ( flag, options ) => {

    const action = {
      type: types.setTrivia,
      payload: {
        flag, options
      }
    }

    dispatch(action);
  }

  const sendAnswer = ( answer ) => {

    const correctIndex = options.reduce( (ac, e, i) => e.text === correctAnswer ? i : ac, {});

    if (answer === correctAnswer) {

      const action2 = {
        type: types.setSuccess,
        payload: {
          correctIndex
        }
      }
      dispatch(action2);
    } else {

      const incorrectIndex = options.reduce( (ac, e, i) => e.text === answer ? i : ac, {});

      const action2 = {
        type: types.setFail,
        payload: {
          correctIndex, incorrectIndex
        }
      }
      dispatch(action2);
    }
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
      setCorrectAnswer,
      setTrivia      
    }}>
      { children }
    </TriviaContext.Provider>
  )
}