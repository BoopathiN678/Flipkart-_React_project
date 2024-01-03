import { useState } from "react";

const Text=()=>{
    const [Input,SetInput] = useState([])
    const [Task,SetTask] = useState('')

    function test(){
        if(Task.length == 0){
            return
        }
        SetInput([...Input, Task])
        SetTask("")

    }

    function del(index){

        let temp = Input.filter((val,i)=>{
                    if(i === index){

                    }
                    else{
                        return val;
                    }
        })
        
        SetInput(temp)
    }
    return(
        <div className=" bg-[salmon] min-h-[100vh] flex justify-center items-center gap-12">
            
                <input onChange={(e)=>SetTask(e.target.value)} value={Task} className=" p-3 w-[35%] " type="text" placeholder="text ur input" />
                <button onClick={test} className=" border bg-white p-3"> ADD TO CART</button>
              
                {Input.map((val,i)=>{
                    return(
                        <p onClick={()=>del(i)}>{val}</p>
                    )
                }
                
                )}
            

        </div>
    )
}

export default Text ;