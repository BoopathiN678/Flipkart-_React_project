import { GetMYStore } from "./store"

export default function  CartPage(){

    const { arr, Del} = GetMYStore()
 
    
    return(
        <div>
            {arr && <div>
                {arr.map((val,i)=>{
                    return(
                        <div key={i} onClick={()=>Del(i)}>{val.brand}</div>
                    )
                })}
                </div>}
        </div>
    )
}