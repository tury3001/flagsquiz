import { PropTypes } from 'prop-types';
import { TriviaOption } from './TriviaOption';

export const Trivia = ({ options = [], disableInput = false }) => {
  return (
    <div>
      <ul className="mt-10">
        {
        options.map( ({ id, text, correct, fail }) => (
          <TriviaOption
            key={ id }
            id={ id }
            text={ text }
            correct={ correct }
            fail={ fail }
            disableInput={ disableInput }
          />
        ))
        }
      </ul>
    </div>
  )
}

Trivia.propTypes = {
  options: PropTypes.array.isRequired,
  disableInput: PropTypes.bool
}