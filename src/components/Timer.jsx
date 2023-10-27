import { useEffect, useState } from "react";

export const Timer = () => {

  const [ percentage, setPercentage ] = useState(100);

  useEffect( () => {
    const timer = setInterval( () => {
      console.log('ciclando');
      setPercentage( percentage => percentage--)
    }, 1000);
  }, []);

  return (
    <div className="text-2xl flex justify-center mt-10 mb-10">
      <div className="h-5 bg-gray-100 w-[600px] rounded-sm">
        <div className={ `h-full bg-green-600` } style={{ width: percentage + '%' }}></div>
      </div>
    </div>
  )
}