import { useEffect } from "react";
import { useState } from "react";

const TaskuseEffect=()=>{

    const [arr, setarr] = useState([])


    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=>
        res.json()).then((e)=> setarr(e.products))
      console.log(arr)
    },[])

return(
    <div className="grid grid-cols-4 gap-5 bg-slate-300">

      
        {arr.map((val,i)=>{
            return(
                <div className=" p-2">
                     
                     <img src={val.images[0]} alt="" />
                <p>{val.brand}</p>

                </div>
            )
        })}
    </div>
)
}
export default TaskuseEffect ;