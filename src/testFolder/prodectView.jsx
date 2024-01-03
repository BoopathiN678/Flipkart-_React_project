import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetMYStore } from "./store"

export default function ProductView(){
    const [products,SetProduct] = useState(null)
const {Add} = GetMYStore()
let {id} = useParams()
    
    useEffect(()=>{
      fetch('https://dummyjson.com/products/'+id).then((res)=>res.json()).then((data)=>SetProduct(data))
  
    },[])
      
      return(
          
          <div className="flex flex-col" >
            {products && products.brand}
            <button onClick={()=>Add(products)}>add to cart</button>
          </div>
      )
  }
  