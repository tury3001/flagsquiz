import flagArgentina from './assets/flags/ar.png';

export const FlagsQuiz = () => {  
  return (
    <div className="container mx-auto bg-fqwhite">
      <div className="h-screen p-8">
      <h1 className="text-4xl flex justify-center">Flags Quiz</h1>        
        <div className="w-1/2 mx-auto mt-10">
        <div className="text-8xl flex justify-center mt-10 mb-10">
            10
          </div>
          <div className="flex justify-center">
            <img src={ flagArgentina } alt="argentina" className="border border-slate-500 shadow-sm rounded"></img>
          </div>
          <div>
            <ul className="mt-10">
              <li className="bg-white rounded mb-5 flex cursor-pointer shadow-sm">
                  <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">A</div>
                  <div className="text-2xl py-4">Argentina</div>                
              </li>
              <li className="bg-white rounded mb-5 flex cursor-pointer shadow-sm">
                  <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">B</div>
                  <div className="text-2xl py-4">Uruguay</div>                
              </li>
              <li className="bg-white rounded mb-5 flex cursor-pointer shadow-sm">
                  <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">C</div>
                  <div className="text-2xl py-4">Bolivia</div>                
              </li>
              <li className="bg-white rounded mb-5 flex cursor-pointer shadow-sm">
                  <div className="px-4 py-4 mr-4 text-white bg-fqtopo rounded flex items-center">D</div>
                  <div className="text-2xl py-4">Brasil</div>                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

