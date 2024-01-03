import { createContext, useContext, useState } from "react";

const MyStore = createContext()

export  default function MyStoreProvder({children}){

const [arr,setarr] = useState([])


const Add=(val)=>{
    console.log(val)
    let t=false
    arr.map((v)=>{
      if(val.id === v.id){
        t=true
      }
    })
  
    if(t){
      return
    }
    else{
      setarr(
        [...arr,val]
      )
    }
   
  }

  const Del=(index)=>{
        setarr(
        arr.filter((val,i)=>{
          if(i === index){
            
          }
          else{
            return val
          }
        })
      )
    }


return(
    <MyStore.Provider value={{arr,Add,Del}}>
        {children}
    </MyStore.Provider>
)


}
export const GetMYStore=()=>{
    return(useContext(MyStore))
}
