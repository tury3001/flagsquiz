import { types } from "../types/types";

export const triviaReducer = (state = {}, action) => {

  switch (action.type) {
    case types.setCorrectAnswer: {
      return { ...state, correctAnswer: action.payload.answer }
    }

    case types.beginTrivia: {
      return {
        ...state,
        isGame: true,
        isMenu: false,
        isFrontPage: false,
        isSummary: false,
        regions: [ ...action.payload.regions ],
        totalQuestions: action.payload.totalQuestions
      }
    }

    case types.setSuccess: {
      const newOptions = state.options.map( (option, i) => i === action.payload.correctIndex ? { ...option, correct: true } : option );
      return {
        ...state,
        userAnswer: action.payload.answer,
        success: true,
        fail: false, 
        optionsDisabled: true,
        options: newOptions,
        isQuestionFinished: true,
        score: state.score + 1
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
        userAnswer: action.payload.answer,
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

    case types.setGameOver: {
      return {
        ...state,
        isGame: false,
        isSummary: true
      }
    }

    case types.setRetry: {
      return {
        ...state,
        isGame: true,
        isSummary: false,
        isQuestionFinished: false,
        questionNumber: 1,
        score: 0,
        userAnswer: ''
      }
    }

    case types.setMenu: {
      return {
        ...state,
        isGame: false,
        isSummary: false,
        isFrontPage: false,
        isMenu: true,
        score: 0,
        regions: [],
        totalQuestions: null
      }        
    }

    case types.setRegions: {

      return {
        ...state,
        regions: [ ...state.regions, action.payload ]
      }
    }

    default: {
      return state;
    }
  }
}