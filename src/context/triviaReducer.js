import { types } from "../types/types";

export const triviaReducer = (state = {}, action) => {

  switch (action.type) {
    case types.sendAnswer: {
      return { ...state, userAnswer: action.payload.answer }
    }

    case types.setCorrectAnswer: {
      return { ...state, correctAnswer: action.payload.answer }
    }

    default: {
      return state;
    }
  }
}