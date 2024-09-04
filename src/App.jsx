import { useState, React } from "react";

function App() {
  const [color, setColor] = useState("pink");

  // const red=(color)=>{
  //   setColor(color)
  // }
  // const green=(color)=>{
  //   setColor(color)
  // }
  // const yellow=(color)=>{
  //   setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-blue-400 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-700"
          >
            Stop
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-500"
          >
            Wait
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-600"
          >
            Start
          </button>

          {/* <button onClick ={()=>red('red')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-700">
            Stop
          </button>
          <button onClick ={()=>yellow('yellow')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-500">
            Wait
          </button>
          <button onClick ={()=>green('green')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-600">
            Start
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
