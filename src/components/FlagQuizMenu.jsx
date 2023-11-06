import { FaStar } from "react-icons/fa"
import { MenuNumberOption } from "./MenuNumberOption"
import { MenuOption } from "./MenuOption"
import { useState } from "react";

export const FlagQuizMenu = () => {

  const [ qQuestions, setQQuestions ] = useState([
    { title: '5', active: false },
    { title: '10', active: false },
    { title: '15', active: false },
    { title: '20', active: false }
  ]);

  const onSelectNumber = ( option ) => {
    setQQuestions( (questions) => {
      return questions.map( question => {
        return question.title === option ? { title: option, active: true } : { ...question, active: false }
      });      
    });

    console.log(qQuestions);
  }

  return (
    <>
      <div>
        <div className="rounded-full">
          <img
            src="src/assets/ui/girl-flag.png"
            alt="Flag quiz"
            className="object-cover h-64 w-full rounded-t-lg"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col p-8 mb-10 animate__animated animate__fadeIn">      
        <form action="">
        <div className="mt-10">
          <h2 className="text-xl mb-5 text-white flex align-middle">
          <FaStar className="text-yellow-400 text-2xl mr-2" />
          <div>Selecciona qué regiones quieres practicar</div>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xl mt-10">
          <MenuOption imageUrl="src/assets/ui/world-map.png" title="El mundo entero" />
          <MenuOption imageUrl="src/assets/ui/africa.png" title="África" />
          <MenuOption imageUrl="src/assets/ui/america.png" title="América" />
          <MenuOption imageUrl="src/assets/ui/asia.png" title="Asia" />
          <MenuOption imageUrl="src/assets/ui/europe.png" title="Europa" />
          <MenuOption imageUrl="src/assets/ui/australia.png" title="Oceania" />
        </div>
        <div className="mt-10 flex flex-col">
            <div className="mr-3 text-xl mb-5 text-white flex align-middle">
              <FaStar className="text-yellow-400 text-2xl mr-2" />
              <div>¿Cuántas preguntas quieres responder?</div> 
            </div>
            <div className="flex justify-between">
            {
            qQuestions.map( option => (
              <MenuNumberOption
                title={ option.title }
                key={ option.title }
                isActive={ option.active }
                onSelectNumber={ onSelectNumber }
              /> 
            ))
            }
          </div>        
        </div>
        </form>
     </div>
    </>    
  )
}