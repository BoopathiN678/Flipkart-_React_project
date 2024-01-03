import { useState } from "react";

const TailNav=()=>{

    const [menu,setmenu]=useState(false)

    const sayed=()=>{
        setmenu(!menu)
    }


    return(
        <div className='sm:flex sm:justify-between bg-white min-h-15vh relative '>
            <div className="flex flex-col  sm:justify-center sm:items-center p-8  ">
                <p className="font-bold  text-3xl font-mono">ARARAT</p>
                <p className="text-xs">ARCHITECHTURE</p>
                
            </div>

            <button onClick={sayed} className="absolute top-9 right-8 border border-black p-4 sm:hidden">MENU</button>
            <ul className={`${menu ? "sm:flex" : "hidden"} space-y-3 text-center text-[white] bg-[salmon] sm:bg-transparent sm:space-y-0  sm:flex  items-center gap-6"`}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>SERVISES</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT</li>
            </ul>
            <div className="hidden sm:flex p-8 ">
                <li className="border p-4 border-[black]" >GET I TOUCH</li>
            </div>

        </div>
    )

}


export default TailNav ;