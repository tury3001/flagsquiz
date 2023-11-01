import { types } from "../types/types";

export const triviaReducer = (state = {}, action) => {

  switch (action.type) {
    case types.sendAnswer: {
      return { ...state, userAnswer: action.payload.answer }
    }

    case types.setCorrectAnswer: {
      return { ...state, correctAnswer: action.payload.answer }
    }

    case types.setSuccess: {
      const newOptions = state.options.map( (option, i) => i === action.payload.correctIndex ? { ...option, correct: true } : option );
      return {
        ...state,
        success: true,
        fail: false, 
        optionsDisabled: true,
        options: newOptions,
        isQuestionFinished: true
      }
    }

    case types.increaseQuestionNumber: {
      return {
        ...state,
        questionNumber: state.questionNumber + 1
      }
    }

    case types.loadNextQuestion: {
      return {
        ...state,
        success: false,
        fail: false,
        optionsRevelead: false,
        optionsDisabled: false,
        options: action.payload.options,
        flag: action.payload.flag,
        isQuestionFinished: false
      }
    }

    case types.setFail: {
      const newOptions = state.options.map( (option, i) => {
        if (i === action.payload.correctIndex)
          return { ...option, correct: true }
        else if (i === action.payload.incorrectIndex)
          return { ...option, fail: true }
        else
          return option
      });
      
      return {
        ...state,
        success: false,
        fail: true,
        disableOptions: true,
        options: newOptions,
        isQuestionFinished: true
      }
    }

    case types.revealSolution: {
      const newOptions = state.options.map( (option, i) => {
        if (i === action.payload.correctIndex)
          return { ...option, correct: true }
        else
          return option
      });

      return {
        ...state,
        success: false,
        fail: true,
        optionsDisabled: true,
        optionsRevelead: true,
        options: newOptions,
        isQuestionFinished: true
      }
    }

    case types.disableOptions: {
      return {
        ...state,
        optionsDisabled: true
      }
    }

    default: {
      return state;
    }
  }
}