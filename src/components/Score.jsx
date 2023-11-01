import { PropTypes } from 'prop-types';

export const Score = ({ hits = 0 }) => {
  return (
    <div className="text-xl mt-8">
      <div className="text-gray-900 px-6 py-2 rounded text-4xl text-right">
        { hits }
      </div>
    </div>
  )
}

Score.propTypes = {
  hits: PropTypes.number.isRequired
}
