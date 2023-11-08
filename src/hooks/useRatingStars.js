import { useEffect, useState } from "react";

export const useRatingStars = (rating, total) => {

  const [ fullStars, setFullStars ] = useState(0);
  const [ halfStar, setHalfStar ] = useState(0);
  const [ emptyStars, setEmptyStars ] = useState(0);

  useEffect( () => {
    const percentage = rating / total * 100;
    const qFullStars = Math.floor(percentage / 20);
    setFullStars(qFullStars);
  
    const interval = 20;
    const restOfStars = 5 - qFullStars;
    const qHalfStar = percentage > qFullStars * interval ? 1 : 0;
    setHalfStar(qHalfStar);
  
    const qEmptyStars = halfStar === 0 ? restOfStars : restOfStars - 1;
    setEmptyStars(qEmptyStars);
  }, [ rating, total ])  

  return { fullStars, halfStar, emptyStars }
}