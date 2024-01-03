import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home=()=>{

    const [products,SetProducts] = useState(null)


  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>SetProducts(data.products))

  },[])
    
    return(
        <div className="grid grid-cols-4 gap-8 p-11 items-center justify-center">
           {products && products.map((val,i)=>{
           
            return(
                <div key={i} className=" ">
                    <img src={val.thumbnail} alt="" />
                    <p>{val.brand}</p>
                    <p>{val.price}</p>
                    <Link className=" border bg-[salmon] text-white hover:bg-[#cf6e64] p-4"
                     to={`/product/${val.id}`}>View</Link>
                </div>
            )
           })}
               

        </div>
    )
}
export default Home;