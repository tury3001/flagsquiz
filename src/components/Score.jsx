import { PropTypes } from 'prop-types';

export const Score = ({ value = 0 }) => {
  return (
    <div className="text-xl mt-8">
      <div className="text-white px-6 py-2 rounded text-4xl text-right">
        { value }
      </div>
    </div>
  )
}

Score.propTypes = {
  value: PropTypes.number
}
