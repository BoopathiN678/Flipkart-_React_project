import { MdKeyboardArrowDown } from "react-icons/md";
export const NavBtn=()=>{
    return(
        <div className="bg-[white] hidden sm:flex p-2 gap-6 justify-evenly ">
          
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Electronics<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1 ">TV&Appliances<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1 ">Men<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Women<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Baby&Kids<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Home&Furniture<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Sports,Books&More<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Flights<span className="   text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
                <button className="font-sans font-bold text-[15px] hover:text-[#6464fb] flex gap-1">Offer Zone<span className="  text-[20px]  hover:rotate-180 hover:[blue]"><MdKeyboardArrowDown /></span></button>
            
        </div>
    )
}