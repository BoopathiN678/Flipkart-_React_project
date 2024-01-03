import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { TbGiftCardFilled } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GetMYStore } from "./Estore";



 function NavBar(){

    
    const [check,SetCheck] = useState([])

    const {arr}= GetMYStore()

    return(
        <div className=" bg-[#4949e5]   sm:bg-blue-600 flex items-center justify-around p-2 z-50 sticky top-0">
            <div className=" cursor-pointer">
                <img src={"flip.png"} alt=""  className="h-[30px] w-[100px]" />
            </div>
            <div className="flex relative">
            <form className="relative">
            
             <input  type="text"  placeholder="Search..." className="p-2 outline-[#5151f5] m-0 w-[200px] md:w-[250px] rounded-sm " />
             <IoSearch  className="absolute min-h-[3vh] min-w-[20px] text-3xl  sm:absolute text-center top-1 right-1 sm:text-[8px] bg-[white] sm:min-h-[5vh] sm:min-w-[30px] cursor-pointer font-bold text-[#4949e5] "  /> 
            </form>
            
            </div>
            
            {/* MY ACCOUNT DROP DOWN */}

            <div id="dropdownButton" className="hidden sm:flex relative group  ">
                <button  className="text-white text-[17px] flex justify-center items-center font-sans font-bold ">My Account<span className="p-1 text-[white] font-bold text-3xl duration-700 hover:rotate-180 "><RiArrowDropDownLine  className="duration-700"/></span></button>
                <div className="absolute hidden group-hover:block duration-150  top-14 bg-[#fffbfb] min-w-[45vh] z-50 ">
                <ul  className=" flex flex-col gap-5   justify-center  items-start -z-50 ">
                    <li className=" flex items-center cursor-pointer font-sans text-lg"><span className="p-3 text-[#4949e5] font-bold text-sm md:text-xl"><CgProfile /></span>My Profile</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><BiSolidCoinStack /></span>Super Coin Zone</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><BsArrowUpSquareFill /></span>Orders</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><FaHeart /></span>Wishlist</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><BiSolidCoupon /></span>Coupons</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><TbGiftCardFilled /></span>Gift Carts</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><IoMdNotifications /> </span>Notifications</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><FaPowerOff /></span>Logout</li>

                </ul>
                </div>
            </div>
            {/* Become a seller button */}
            <div>
                <button className=" hidden md:flex text-[white] items-center  text-[17px] font-bold ">
                    Become a Sellar
                </button>
            </div>
            <div  className=" hidden lg:flex relative group  ">
                <button  className="   text-white text-[17px] flex justify-center items-center font-sans font-bold ">More<span className="p-1 text-[white] font-bold text-3xl hover:rotate-180"><RiArrowDropDownLine  /></span></button>
                <div className="absolute hidden group-hover:block top-14 bg-[#fffbfb] min-w-[50vh] ">
                <ul  className=" flex flex-col gap-5  justify-center items-start ">
                    <li className=" flex items-center cursor-pointer font-sans text-lg "><span className="p-3 text-[#4949e5] font-bold text-xl"><IoMdNotifications /></span>Notification Prefrence</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><FaClipboardQuestion /></span>24*7 coustomer care</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><FaArrowTrendUp /></span>Advertise</li>
                    <li className="flex items-center cursor-pointer"><span className="p-3 text-[#4949e5] font-bold text-xl"><FaDownload /></span>Downlod App</li>
                   

                </ul>
                </div>
            </div> 


            {/* set cart button */}

            <div className="hidden sm:block ">
                  <Link to ="/cart" className=" flex text-[white] items-center gap-3 text-[17px] font-bold "><FaShoppingCart className="" /><span className=" text-white bg-orange-700  sm:border-2 text-sm absolute top-2 w-5 text-center right-[87px] rounded-3xl">{arr.length}</span>Cart</Link>
            </div>

            {/* menu button */}
            <div className=" sm:hidden">
                <button onClick={()=>SetCheck(!check)} className="text-[white] text-[26px] flex"><RiMenuFoldFill /></button>
            </div>

          
            <div className={`${check ? "hidden" : "block absolute  bg-transparent "}`}>

               
                
            </div>

        </div>
    )
}
export default NavBar ;