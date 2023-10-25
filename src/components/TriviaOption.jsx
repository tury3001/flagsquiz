import { PropTypes } from 'prop-types';
import { TriviaContext } from '../context';
import { useContext } from 'react';

export const TriviaOption = ({ id, text }) => {

  const { sendAnswer } = useContext(TriviaContext);

  const selectAnswer = () => {
    sendAnswer(text);
  }

  return (
    <div>
      <li
        className="bg-white rounded mb-4 flex cursor-pointer shadow-sm hover:bg-slate-100"
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
  text: PropTypes.string.isRequired
}
