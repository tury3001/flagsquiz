import { PropTypes } from 'prop-types';
import { TriviaOption } from './TriviaOption';

export const Trivia = ({ options = [] }) => {
  return (
    <div>
      <ul className="mt-10">
        {
        options.map( ({ id, text }) => (
          <TriviaOption
            key={ id }
            id={ id }
            text={ text }
          />
        ))
        }
      </ul>
    </div>
  )
}

Trivia.propTypes = {
  options: PropTypes.array.isRequired
}