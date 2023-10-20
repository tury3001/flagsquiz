import { PropTypes } from 'prop-types';

export const Score = ({ attempts = 0, hits = 0 }) => {
  return (
    <div className="text-xl mt-8">
      <div className="bg-white px-6 py-2 rounded text-center">
        Puntaje: { hits } / { attempts }
      </div>
    </div>
  )
}

Score.propTypes = {
  attempts: PropTypes.number.isRequired,
  hits: PropTypes.number.isRequired
}
