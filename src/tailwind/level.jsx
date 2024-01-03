import { useState } from "react"


export default function Todolist(){

    const [inputValu, setInputValue] = useState("")

    const [arr, setArr] = useState(["czx"])

    function onchange(e){
        setInputValue(e.target.value)
    }

    function addarr(){
        setArr([inputValu,...arr])
        setInputValue("")
    }

    function del(i){
        // let a = arr;
        // a.splice(i,1)
        // setArr([...a]) 

        setArr(
            arr.filter((val,index)=>{
                if(i === index){
                 return null
                }
                else{
                    return val;
                }
            })
        )
    }



    return (
       <div>
         <div>
            <input className="border" value={inputValu} onChange={onchange} type="text" />
            <button onClick={addarr}>Add</button>
        </div>

        <ul>
            {arr.map((val,i)=>{

                return(
                    <div onClick={()=>del(i)}>{val}</div>
                )
            })}
        </ul>
       </div>
    )
}