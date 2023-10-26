import { PropTypes } from 'prop-types';
import { TriviaContext } from '../context';
import { useContext } from 'react';

export const TriviaOption = ({ id, text, correct, fail }) => {

  const { sendAnswer } = useContext(TriviaContext);

  const selectAnswer = () => {
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
        className={ `${ getColors() } rounded mb-4 flex cursor-pointer shadow-sm` }
        onClick={ selectAnswer }
      >
        <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">
          { id }
        </div>
        <div className="text-2xl py-4">
          { text }
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
