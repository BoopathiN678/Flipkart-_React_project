import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./navBar";
import HomePage from "./homepage";
import ProductView from "./prodectView";
import CartPage from "./cartPage";
import MyStoreProvder from "./store";



function Main() {

const [CartAray,SetCartArry] = useState([])

const Add=(val)=>{
  let t=false
  CartAray.map((v)=>{
    if(val.id === v.id){
      t=true
    }
  })

  if(t){
    return
  }
  else{
    SetCartArry(
      [...CartAray,val]
    )
  }
 
}

const Del=(index)=>{
  SetCartArry(
    CartAray.filter((val,i)=>{
      if(i === index){
        
      }
      else{
        return val
      }
    })
  )
}
 
  return (
    <div>
      <MyStoreProvder>
        <BrowserRouter>
        <HomePage len = {CartAray.length}/>
        <Routes >
          
            <Route path="/" element={<NavBar/>}></Route>
            <Route  path="/productView/:id" element={<ProductView Add={Add}/>}></Route>
            <Route  path="/CartPage" element={<CartPage CartArray={CartAray} Del={Del}/>}></Route>

        </Routes>
        </BrowserRouter>
        </MyStoreProvder>
    
    </div>
  );
}

export default Main;
