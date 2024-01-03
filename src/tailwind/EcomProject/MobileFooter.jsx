import { IoIosHome } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { GetMYStore } from "./Estore";
import { Link } from "react-router-dom";
export const MobileFooter=()=>{
    const {arr}= GetMYStore()
    return(
        <div className="bg-slate-50 sticky bottom-0 py-3  sm:hidden ">
            <ul className="flex justify-around ">
                <Link to={'/'} className="flex flex-col items-center  hover:text-[blue] cursor-pointer text-[12px]"><span className="text-[20px]"><IoIosHome /></span>Home</Link>
                <li className="flex flex-col items-center  hover:text-[blue] cursor-pointer text-[12px]"><span className="text-[20px]"><TbCategory /></span>categories</li>
                <li className="flex flex-col items-center  hover:text-[blue] cursor-pointer text-[12px]"><span className="text-[20px]"><IoNotificationsOutline /></span>Notifications</li>
                <li className="flex flex-col items-center  hover:text-[blue] cursor-pointer text-[12px]"><span className="text-[20px]"><RiAccountCircleLine /></span>Account</li>
                <Link to ="/cart" className="flex flex-col items-center relative   hover:text-[blue] cursor-pointer text-[12px]"><span className="text-[20px]"><BsCart3 /></span><span className="bg-orange-700 text-white absolute -right-1 -top-2 w-4 text-center rounded-3xl">{arr.length}</span>Cart</Link>
            </ul>
        </div>
    )
}