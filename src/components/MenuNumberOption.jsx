import { useEffect, useState } from "react"

export const MenuNumberOption = ({ title, isActive, onSelectNumber }) => {

  const [ activeStyle, setActiveStyle ] = useState('');

  useEffect(() => {
    
  if (isActive) {
    setActiveStyle('outline outline-offset-2 outline-yellow-400');
  } else {
    setActiveStyle('');
  }

  }, [ isActive ]);

  const onSelectNumberOption = () => {
    onSelectNumber(title)
  }

  return (    
      <div
        className={ `border border-zinc-300 rounded w-1/4 p-2 text-center mx-2 bg-slate-100 shadow-sm cursor-pointer ${ activeStyle }` }
        onClick={ onSelectNumberOption }
      >
        <span className="text-2xl">{ title }</span>
      </div>
    )
}