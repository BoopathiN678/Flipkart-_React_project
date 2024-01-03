import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function NavBar(){
    const [products,SetProduct] = useState(null)
    const [test, setTest] = useState(false)

    useEffect(()=>{
      fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>SetProduct(data.products))
  
      setTimeout(()=>{
        setTest(true)
      },3000)
    },[])

    
      
      return(
          
          <div className="grid grid-cols-3  p-3 gap-5]">
            {products && products.map((val,i)=>{
                return(<div className="border flex flex-col ">
                    <div>
                    <img src={val.images[0]} alt="" className="h-[200px]" />
                    </div>
                    <div>
                    <p>{val.brand}</p>
                    <Link to = {"/productView/"+val.id}>VIEW</Link>
                    </div>
                    
                </div>)
            })}
          </div>
      )
  }
  