export const FlagQuizMenu = () => {
  return (
    <div className="flex justify-center flex-col p-8">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl">Trivia de Banderas</h1>
      </div>
     <form action="">
      <div className="flex flex-col text-2xl mt-10">
        <h2 className="text-xl mb-5">Selecciona qué regiones quieres practicar</h2>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="w-5 h-5 mr-2"></input>
          <label htmlFor="">El Mundo</label> 
        </div>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="w-5 h-5 mr-2"></input>
          <label htmlFor="">America</label> 
        </div>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="w-5 h-5 mr-2"></input>
          <label htmlFor="">Europa</label> 
        </div>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="w-5 h-5 mr-2"></input>
          <label htmlFor="">Asia</label> 
        </div>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="w-5 h-5 mr-2"></input>
          <label htmlFor="">Africa</label> 
        </div>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="w-5 h-5 mr-2"></input>
          <label htmlFor="">Oceania</label> 
        </div>
      </div>
      <div>
        ¿Cuántas preguntas quieres responder?
        <select>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
        </select>
      </div>
     </form>
    </div>
  )
}
