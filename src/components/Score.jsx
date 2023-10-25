import { PropTypes } from 'prop-types';

export const Score = ({ hits = 0 }) => {
  return (
    <div className="text-xl mt-8">
      <div className="bg-white px-6 py-2 rounded text-center">
        Puntaje: { hits }
      </div>
    </div>
  )
}

Score.propTypes = {
  hits: PropTypes.number.isRequired
}
