import { useState } from "react";
import { MdDelete } from "react-icons/md";

const Test=()=>{
    
    const [menu,setmenu] = useState(['afhjk',''])

 

    

    return(
        <div className="flex flex-col bg-[#e0c9c6] text-[white] h-[100vh] justify-center items-center p-6 gap-4">

            {menu.length > 0 ?  menu.map((val)=> {
                
                return (
                    <p>{val} <MdDelete className=""/></p>
                )
            }) : <div>no data currently!</div> }

        </div>
    )
}

export default Test ;