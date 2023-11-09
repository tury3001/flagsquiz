import { PropTypes } from 'prop-types';

export const Flag = ({ code = '' }) => {

  return (
    <div className="flex justify-center">
      <img
        src={ `/assets/flags/${ code.toLowerCase() }.png` } 
        alt="flag"
        className="border border-slate-500 shadow-sm rounded"
      >
      </img>
    </div>
  )
}

Flag.propTypes = {
  code: PropTypes.string.isRequired
}
