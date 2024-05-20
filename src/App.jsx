import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div>
 
   
    <div  className="w-full h-screen" style={{ backgroundColor: color }}>
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center mb-4 text- ">Background Color</h1>
    
    
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-2xl"><button
      onClick={()=> setColor("red")
      // calback function
      }
       className="outline-none px-3 py-1 rounded-full text-black" style={{backgroundColor:"red"}}>Red</button>
      <button
      onClick={()=> setColor("lightblue")
      // calback function
      }
      
       className="outline-none px-3 py-1 rounded-full text-black" style={{backgroundColor:"lightblue"}}>LightBlue</button>
      <button 
      onClick={()=> setColor("green")
      // calback function
      }
      
      className="outline-none px-3 py-1 rounded-full text-black" style={{backgroundColor:"Lightgreen"}}>Green</button>

      <button
      onClick={()=> setColor("violet")
      // calback function
      }
       className="outline-none px-3 py-1 rounded-full text-black" style={{backgroundColor:"violet"}}>Violet</button>

      <button
      onClick={()=> setColor("yellow")
      // calback function
      }
       className="outline-none px-3 py-1 rounded-full text-black" style={{backgroundColor:"yellow"}}>yellow</button>

      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;

