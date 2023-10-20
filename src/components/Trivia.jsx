import { PropTypes } from 'prop-types';
import { TriviaOption } from './TriviaOption';

export const Trivia = ({ options = [] }) => {
  return (
    <div>
      <ul className="mt-10">
        {
        options.map( ({ id, title }) => (
          <TriviaOption
            key={ id }
            id={ id }
            title={ title }
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