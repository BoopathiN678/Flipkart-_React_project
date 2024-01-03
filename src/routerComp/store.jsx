import { createContext, useContext, useState } from "react";

const MyContext = createContext()

export const MystoreProvider =({children})=>{

    const [cartArray, setCartArray] = useState([])

    const addProduct=(obj)=>{
        setCartArray([...cartArray, obj])
    }

    

    return (
        <MyContext.Provider value={{cartArray, addProduct}}>
            {children}
        </MyContext.Provider>
    )
}

export const GlobalStore=()=>{
    return useContext(MyContext)
}
