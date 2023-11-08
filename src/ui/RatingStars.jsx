import { FaStar } from "react-icons/fa"
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useRatingStars } from "../hooks/useRatingStars";
import PropTypes from "prop-types";

export const RatingStars = ({ rating = 0, total = 0 }) => {

  const { fullStars, halfStar, emptyStars } = useRatingStars(rating, total);

  return (
    <div className="flex">
      { [ ...Array(fullStars)].map( (star, i) => <FaStar key={ `star${ i }`} />) }
      { [ ...Array(halfStar)].map( (star, i) => <FaStarHalfAlt key={ `star${ i }`} />) }
      { [ ...Array(emptyStars)].map( (star, i) => <FaRegStar key={ `star${ i }`} />) }
    </div>
  )
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  total: PropTypes.number
}