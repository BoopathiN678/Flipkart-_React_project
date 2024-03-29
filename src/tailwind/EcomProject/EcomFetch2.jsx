import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GetMYStore } from "./Estore"

export const EcomFetch2=()=>{
    const [Product,SetProduct] = useState(null)
    const Test = GetMYStore()

    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>SetProduct(data.products.splice(12,30))) 
         
      },[])

    return(
        
        <div className="grid grid-cols-1 mt-20 md:grid md:grid-cols-3  gap-5 p-3   ">
        {Product && Product.map((val,i)=>{
           
            return(
                <div className="border-4 text-center justify-center items-center flex flex-col sm:flex sm:flex-row  sm:items-center gap-5 sm:p-6 bg-[#f0ecec] ">
                <div className="hover:scale-105 duration-500 sm:hover:scale-105 sm:duration-500 cursor-pointer p-5">
                <Link to = {"/products/"+val.id}><img className="w-44 h-44 rounded-lg "  src={val.images[0]} alt="" /></Link>
                </div>
                <div className="flex flex-col">
                <p className="text-[black] font-sans "> Brand:{val.brand}</p>
                <p className="text-[black] font-bold"> From:{val.price}</p>
                <div className="pt-4">
                <button onClick={()=>Test.Add(val)} className="hover:scale-105 duration-150 sm:hover:scale-105 sm:duration-150 border-2 border-[#635f5f] p-1 text-[black] w-28  ">Add to Cart</button>
                </div>
                </div>
                </div>
                

                
            )
        })}

        
</div>
    )
}