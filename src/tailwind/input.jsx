import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
const Input=()=>{

    const [TaskArray,SetTaskArray] = useState(['raji','monish'])

    const [Task,setTask] = useState("")

    const AddTask =(e)=>{
        
        setTask(e.target.value)
    }

    const AddFun=()=>{
        SetTaskArray([...TaskArray, Task])
        setTask("")

    }

    const deleteIteam =(arg)=>{

        SetTaskArray(TaskArray.filter((val,i)=>{

                if(val !== arg){
                    return val
                }

        }))

    }


    return(
        <div className="bg-[lightblue] min-h-[100vh] flex justify-center items-center flex-col gap-16">
          <div className="w-[50%]">
            <input type="text" onChange={AddTask} value={Task} placeholder="HOW WAS TODAY INTERVIEW?" className="w-[70%] p-4 outline-none "/>
            <button onClick={AddFun} className=" bg-[#5656f3] p-4 w-[30%] text-white">ADD</button>
          </div>

          <div className="flex flex-col gap-12 p-5 bg-white w-[50%]">

       {TaskArray.map((val,index)=>{

        return  <div className="flex gap-2 p-4 w-full border-b-2">
        <input type="checkbox"  className="cursor-pointe r" />
        <p className=" w-[80%]">{index+1} {val}</p>
        <MdDeleteOutline onClick={()=>deleteIteam(val)} className="cursor-pointer text-2xl" />
        </div>
       })}
        
          

            

            
          </div>

        </div>
    )
}

export default Input ;