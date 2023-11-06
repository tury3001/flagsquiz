import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FlagsQuiz } from './FlagsQuiz'
import { TriviaProvider } from './context/TriviaProvider'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TriviaProvider>
      <FlagsQuiz />
    </TriviaProvider>
  </React.StrictMode>,
)
