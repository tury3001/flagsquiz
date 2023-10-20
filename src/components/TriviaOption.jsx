import { PropTypes } from 'prop-types';

export const TriviaOption = ({ id, title }) => {
  return (
    <div>
      <li className="bg-white rounded mb-4 flex cursor-pointer shadow-sm hover:bg-slate-100">
        <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">
          { id }
        </div>
        <div className="text-2xl py-4">
          { title }
        </div> 
      </li>
    </div>
  )
}

TriviaOption.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
