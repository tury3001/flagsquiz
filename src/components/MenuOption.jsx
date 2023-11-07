export const MenuOption = ({ title, imageUrl, onOptionClicked, isChecked }) => {
  return (
    <div className="flex items-center text-sm mb-1 border border-zinc-300 rounded py-2 cursor-pointer bg-slate-100 shadow-sm">
      <div className="ml-5 mr-3 py-4 rounded flex justify-center">
        <input
          type="checkbox"
          className="w-5 h-5 mr-2 py-2 cursor-pointer bg-sky-600 border-sky-200 text-yellow-500 focus:ring-yellow-500 rounded-full"
          checked={ isChecked }
          onChange={ () =>  onOptionClicked(title) }
        >    
        </input>
      </div>
      <img src={ imageUrl } width="48" height="48"></img>
      <label htmlFor="" className="ml-3 cursor-pointer">{ title }</label>
    </div>
  )
}