import { useEffect, useState } from "react";
import Product from "./product";


const Test1Use=()=>{
    const [arrey , setarrey] = useState([])
    const [err, seterr] = useState(false)


    function del(i){
        alert(i)
        setarrey(
            arrey.filter((val,index)=>{
                if(i !== index){
                    return val
                }
            })
        )
    }
    useEffect(()=>{

        fetch('https://dummyjson.com/products').then((res)=>
        res.json()).then((e)=> setarrey(e.products)).catch((e)=>{
            seterr(true)
        })
      
    },[])

    return(
       <div>
        {!err ?  <div>
            { arrey.map((val,i)=>{
                return(
                    <Product data={val} id={val.id} deletefunction={del} index={i}/>
                    
                )
            }) }
            </div> : <div className=" flex min-h-[100vh] justify-center items-center">oops!, somthing went worng!</div>}
       </div>
    )
}
export default Test1Use ;
