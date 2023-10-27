import { PropTypes } from 'prop-types';
import { TriviaContext } from '../context';
import { useContext } from 'react';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


export const TriviaOption = ({ id, text, correct, fail, disableInput }) => {

  const { sendAnswer } = useContext(TriviaContext);

  const selectAnswer = () => {
    if (! disableInput)
      sendAnswer(text);
  }

  const getColors = () => {
    if (correct) return 'bg-green-600 text-white';
    if (fail) return 'bg-red-600 text-white';
    return 'bg-white hover:bg-slate-100';    
  }

  return (
    <div>
      <li
        className={ `${ getColors() } rounded mb-4 flex cursor-pointer shadow-sm justify-between` }
        onClick={ selectAnswer }
      >  
      <div className="flex">
        <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">
            { id }
        </div>
        <div className="text-2xl py-4">
            { text }              
        </div>
      </div>
      <div className={ `flex items-center justify-center ${ !correct ? 'hidden' : '' }` }>
        <div className="bg-white rounded-full text-green-600 p-2 w-8 h-8 mr-2 shadow">
          <FaCheck />
        </div>
        
      </div>      
      <div className={ `flex items-center justify-center ${ fail ? '' : 'hidden' }` }>
        <div className="bg-white rounded-full text-red-600 p-2 w-8 h-8 mr-2 shadow">
          <FaTimes />
        </div>
      </div>
      </li>             
    </div>
  )
}

TriviaOption.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  correct: PropTypes.bool,
  fail: PropTypes.bool
}
