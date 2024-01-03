import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalStore } from "./store";

const Product=()=>{

    const [Product,SetProduct] = useState(null)
   const {addProduct} = GlobalStore()

    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then((res)=>res.json()).then((data)=>SetProduct(data.products))
    },[])
  

   const add=()=>{
    addProduct(Product)
   }

    return(
        <div>
            {Product ?  <div className="flex justify-center p-5 gap-10">
        
                <div>
                <img src={Product.images[0]} alt="" />
                </div>
                <div className="flex flex-col min-h-[70vh] min-w-[500px] items-center justify-center gap-4  bg-[salmon] text-white">
                    <p>{Product.brand}</p>
                    <p>{Product.price}</p>
                    <p>{Product.rating}</p>
                    <p>{Product.stock}</p>
                    <p>{Product.title}</p>
                    <button onClick={add} className="border bg-[salmon] text-xl text-white hover:bg-[#cf6e64] p-4">ADD TO CART</button>


                </div>
        
            
            
            </div> : <div>loading...</div>}
            
        </div>
    )
}
export default Product;