import { PropTypes } from 'prop-types';

export const Flag = ({ flagImage }) => {
  return (
    <div className="flex justify-center">
      <img
        src={ flagImage }
        alt="flag"
        className="border border-slate-500 shadow-sm rounded"
      >
      </img>
    </div>
  )
}

Flag.propTypes = {
  flagImage: PropTypes.string.isRequired
}
