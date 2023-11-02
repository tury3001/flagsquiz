export const FlagQuizMenu = () => {
  return (
    <div className="flex justify-center flex-col">
     <h1 className="text-4xl">Trivia de Banderas</h1>

     <form action="">
      <h2>Selecciona qué regiones quieres practicar</h2>

      <div className="flex flex-col text-2xl mt-10">

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
