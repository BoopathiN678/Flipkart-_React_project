import { useContext } from "react"
import { GlobalStore } from "./store"

function Cart(){

  
    const {cartArray} = GlobalStore();

 
    return (
        <div className=" grid grid-cols-4">
          {cartArray && cartArray.map((val,i)=>{

            return (<div key={i} className=" ">
            <img src={val.thumbnail} alt="" />
            <p>{val.brand}</p>
            <p>{val.price}</p>
            <button></button>
        </div>)
          })}
        </div>
    )
}

export default Cart