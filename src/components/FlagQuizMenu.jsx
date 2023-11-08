import { FaStar } from "react-icons/fa"
import { MenuNumberOption } from "./MenuNumberOption"
import { MenuOption } from "./MenuOption"
import { useState } from "react";
import { GameButton } from "../ui/GameButton";

const allRegions = ['África', 'Asia', 'América', 'Oceanía', 'Europa'];

export const FlagQuizMenu = ({ onContinue }) => {

  const [ regions, setRegions ] = useState(allRegions);
  const [ isWorld, setIsWorld ] = useState( true );
  const [ selectedNumberQuestions, setSelectedNumberQuestions ] = useState( null );
  const [ messageRegionError, setMessageRegionError] = useState( false );
  const [ messageQuestionsError, setMessageQuestionsError] = useState( false );

  const [ qQuestions, setQQuestions ] = useState([
    { title: '5', active: false },
    { title: '10', active: false },
    { title: '15', active: false },
    { title: '20', active: false }
  ]);

  const onSelectNumber = ( option ) => {
    setSelectedNumberQuestions(option);
    setQQuestions( (questions) => {
      return questions.map( question => {
        return question.title === option ? { title: option, active: true } : { ...question, active: false }
      });      
    });
    setMessageQuestionsError(false);
  }

  const onRegionSelected = ( newRegion ) => {

    setMessageRegionError(false);

    if (newRegion === 'El mundo entero' && regions.length !== 1) {
      setRegions(['El mundo entero']);
      setMessageRegionError(false);
    }

    if (regions.includes(newRegion)) {
      setRegions(regions.filter( region => region !== newRegion));
    } else {
      setRegions([ ...regions, newRegion ]);
    }    
  }

  const next = () => {    

    if (regions.length === 0) {
      setMessageRegionError(true);
    } else {
      setMessageRegionError(false);
    }

    if (selectedNumberQuestions === null) {
      setMessageQuestionsError(true)
    } else {
      setMessageQuestionsError(false)
    }

    onContinue(regions, selectedNumberQuestions);
  }

  const onWorldOptionSelected = () => {
    if (isWorld) return
    setIsWorld( state => !state);
    setRegions(allRegions);
    setMessageRegionError(false);
  }

  const onRegionOptionSelected = () => {
    if (!isWorld) return
    setIsWorld( state => !state)
    setRegions([]);
  }

  const getRegionsOptions = () => {
    return (
      <div className="animate__animated animate__fadeIn">
          <h2 className="text-xl mb-5 text-white flex align-middle">
          <FaStar className="text-yellow-400 text-2xl mr-2" /> Seleccionas las regiones:
          </h2>
        <div className="grid gap-4 grid-cols-2">
        <MenuOption
            imageUrl="src/assets/ui/africa.png"
            title="África"
            onOptionClicked={ onRegionSelected }
          />
          <MenuOption
            imageUrl="src/assets/ui/america.png"
            title="América"
            onOptionClicked={ onRegionSelected }
          />
          <MenuOption
            imageUrl="src/assets/ui/asia.png"
            title="Asia"
            onOptionClicked={ onRegionSelected }
          />
          <MenuOption
            imageUrl="src/assets/ui/europe.png"
            title="Europa"
            onOptionClicked={ onRegionSelected }
          />
          <MenuOption
            imageUrl="src/assets/ui/australia.png"
            title="Oceania"
            onOptionClicked={ onRegionSelected }
          />
        </div>
      </div>   
    )
  }

  return (
    <>
      <div>
        <div className="rounded-full">
          <img
            src="src/assets/ui/girl-flag.png"
            alt="Flag quiz"
            className="object-cover object-center h-40 w-full rounded-t-lg"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col p-8 mb-10 animate__animated animate__fadeIn">
        <div>
          <h2 className="text-xl mb-5 text-white flex align-middle">
          <FaStar className="text-yellow-400 text-2xl mr-2" /> ¿Qué banderas quieres practicar?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xl">
         <MenuOption
            imageUrl="src/assets/ui/earth.png"
            title="El mundo entero"
            isChecked={ isWorld }
            onOptionClicked={ onWorldOptionSelected }
          />
          <MenuOption
            imageUrl="src/assets/ui/world-map.png"
            title="Regiones"
            isChecked={ !isWorld }
            onOptionClicked={ onRegionOptionSelected }
          />          
        </div>
        <div className="mt-10 flex flex-col">
        { (! isWorld) ? getRegionsOptions() : '' }
        </div>
        <div
          className={ `${ messageRegionError ? '' : 'hidden' } text-white animate__animated animate__fadeIn mt-5`  }
        >
          Selecciona una región para continuar
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
        <div
          className={ `${ messageQuestionsError ? '' : 'hidden' } text-white animate__animated animate__fadeIn mt-5`  }
        >
          Selecciona la cantidad de preguntas a responder para continuar
        </div>
        <div className="flex justify-center mt-10">
          <GameButton
            label="Continuar"
            onClickButton={ next }
          />
        </div>
     </div>
    </>    
  )
}