import { useState } from 'react'


function App() {
  const [color, setColor] = useState("pink")

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
    >
      <div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='px-3 py-2 bg-white rounded-3xl gap-3 justify-center flex flex-wrap shadow-lg'>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >
            Red
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>
            Green
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>
            Black
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>
            Olive
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"Yellow"}}
          onClick={()=>setColor("yellow")}>
            Yellow
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"silver"}}onClick={()=>setColor("silver")}
          >
          Silver
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"gray"}}onClick={()=>setColor("gray")}>
          Gray
          </botton>
          <botton className=" outline-none px-4  rounded-3xl shadow-lg text-white cursor-pointer" style={{backgroundColor:"violet"}}onClick={()=>setColor("violet")}>
          Violet
          </botton>

        </div>
        </div>
       
    </div>
      
    
  )
}

export default App
