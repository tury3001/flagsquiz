export const GameButton = ({ label, onClickButton }) => {
  return (
    <>
      <button
        className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-white py-3 px-8 border border-slate-200 rounded-md uppercase shadow-lg hover:scale-105"
        onClick={ onClickButton }
      >
        { label }
      </button>
    </>
  )
}
