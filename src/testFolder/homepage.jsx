import { Link } from "react-router-dom";
import { GetMYStore } from "./store";

export default function HomePage(  ){

    const { arr, Del} = GetMYStore()
    return(
        
            <div className="bg-[salmon] h-14 w-full flex justify-between ">
           <div className="p-3 text-[white]" >logo</div> 
           <ul className=" flex  p-3 gap-6 text-[white]">
            <li>Home</li>
            <li>View</li>
            <Link to = {"/CartPage" } >{arr.length}Cart</Link>
           </ul>
        </div>
        
    )
}