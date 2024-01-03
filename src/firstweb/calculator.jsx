import { useState } from "react";

const Calculator=()=>{
    const [a,Seta] = useState(null)

    const [b,Setb] = useState(null)
    
    const [Finall,SetFinall] = useState(null)
    // const [symbol,setsymbol] = useState(null)
    let symbol=""


    const equal=()=>{
       
     
        if(symbol === "+"){
            SetFinall(a+b)
        }
        if(symbol === "-"){
            SetFinall(a-b)
        }
        if(symbol === "*"){
            SetFinall(a*b)
        }
        if(symbol === "/"){
            SetFinall(a/b)
        }
        

    }



    return(
        <div className="bg-[salmon] min-h-[100vh] flex justify-center items-center">
            <div className="bg-[white] p-12 min-h-[50%]  flex gap-6">
            <input className="border p-3" type="number" onChange={(e)=>Seta(parseInt(e.target.value))}/>
           
                <select onChange={(e)=>symbol =e.target.value}>
            <option value=""></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            </select>
            <input onChange={(e)=>Setb(parseInt(e.target.value))} className="border p-3" type="number" />
            <button onClick={equal} className="border text-2xl hover:bg-[#c66358] bg-[salmon] text-white p-6">=</button>
            <p className="bg-[salmon] text-white text-xl p-3 w-20">{Finall}</p>
            
            </div>
        </div>

    )
}

export default Calculator ;