import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMYStore } from "./Estore";

function Products(){
    const [Products,SetProducts] = useState(null)
    const {Add} = GetMYStore()
    let {id} = useParams()
    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+id).then(hello=>hello.json()).then((v)=>SetProducts(v))

    },[])

    return(
        <div>
                {Products ? <div className="border-4 text-center min-h-[80vh] justify-center items-center flex flex-col sm:flex sm:flex-row  sm:items-center gap-5 sm:p-6 bg-[#f0ecec] ">
                <div className="hover:scale-105 duration-500 sm:hover:scale-105 sm:duration-500 cursor-pointer p-5">
                <img className="w-44 h-44 rounded-lg "  src={Products.images[0]} alt="" />
                </div>
                <div className="flex flex-col">
                <p className="text-[black] font-sans "> Brand:{Products.brand}</p>
                <p className="text-[black] font-bold"> From:{Products.price}</p>
                <div className="p-4">
                <button onClick={()=>Add(Products)} className="hover:scale-105 duration-150 sm:hover:scale-105 sm:duration-150 border-2 p-1 border-[#635f5f] text-[black] w-28  ">Add to Cart</button>
                </div>                    </div>
            </div> : <div>loading...</div>}

        </div>
    )
}
export default Products;
