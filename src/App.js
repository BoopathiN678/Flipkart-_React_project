

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CCC from "./tailwind/EcomProject/curosul";
import NavBar from "./tailwind/EcomProject/navBar";
import { NavBtn } from "./tailwind/EcomProject/NavBtn";
import Products from "./tailwind/EcomProject/Products";
import Cart from "./tailwind/EcomProject/Cart";
import MyStoreProvder from "./tailwind/EcomProject/Estore";
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import { MobileFooter } from "./tailwind/EcomProject/MobileFooter";

function App() {
  
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div >
  
    <MyStoreProvder>
    <BrowserRouter>
    <NavBar/>
    <NavBtn/>
    <Routes>
      <Route path="/" element = {<CCC/>}></Route>
      
      <Route path="/products/:id" element ={<Products />}></Route>
      <Route path = "/cart" element ={<Cart/>}></Route>
    </Routes>
   <div className=" sm:hidden sticky bottom-0"> <MobileFooter/></div>
     </BrowserRouter>
    </MyStoreProvder>
    </div>
  );
}

export default App;
