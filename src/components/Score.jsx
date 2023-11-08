import { PropTypes } from 'prop-types';

export const Score = ({ value = 0 }) => {
  return (
    <div className="text-xl mt-8 justify-end flex">
      <div className="text-black w-24 px-6 py-2 rounded text-4xl text-right bg-white rounded-full">
        { value }
      </div>
    </div>
  )
}

Score.propTypes = {
  value: PropTypes.number
}
