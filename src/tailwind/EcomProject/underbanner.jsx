import { FaBagShopping } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import Image2 from "../../images/visa.svg"
export const UnderBanner=()=>{
    return(
        <div className="flex flex-col bg-gray-800 w-full min-h-[70vh] mt-7 p-2">
            <div className=" flex justify-evenly">
            <div className="hidden sm:flex flex-col gap-2 mt-12">
                <p className="text-[15px] text-[#6a6767]">ABOUT</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px] mt-1">Contact Us</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">About Us</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Careers</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Flipkart Stories</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">press</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Flipkart Wholsale</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Cleartrip</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">corporate information</p>
            </div>


            <div className="hidden md:flex flex-col gap-2 mt-12">
                <p className="text-[15px] text-[#6a6767]">HELP</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px] mt-1">Payments</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Shipping</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Cancellations&Returns</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">FAQ</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Report INfringement</p>
                
            </div>



            <div className="hidden lg:flex flex-col gap-2 mt-12">
                <p className="text-[15px] text-[#6a6767]">CONSUMER POLICY</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px] mt-1"></p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Cancellation & Returns</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Terms of Use</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Security</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Privacy</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Sitemap</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Grievance Redressal</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">EPR Complince</p>
            </div>

            



            <div className="hidden xl:flex flex-col gap-2 mt-12">
                <p className="text-[15px] text-[#6a6767]">SOCIAL</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px] mt-1">Facebook</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">Twitter</p>
                <p className="text-[white] hover:underline cursor-pointer text-[13px]">You Tube</p>
               
                
            </div>



            <div className="hidden sm:block border-x h-48 mt-12 border-[#413f3f]">

            </div>




            <div className="flex flex-col gap-2 mt-12">
                <p className="text-[15px] text-[#6a6767]">Mail Us:</p>
                <p className="text-[white]  cursor-pointer text-[13px]">Flipkart Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &<br/>Clove Embassy Tech Village,<br/>Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103,<br/>Karnataka, India</p>
            </div>


            <div className="flex flex-col gap-2 mt-12">
                <p className="text-[15px] text-[#6a6767]">Registered Office Address:</p>
                <p className="text-[white]  cursor-pointer text-[13px]">Flipkart Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &<br/>Clove Embassy Tech Village,<br/>Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103,<br/>Karnataka, India<br/>CIN : U51109KA2012PTC066107<br/>Telephone:<span className="text-[#4e4eec] text-[15px]"> 044-45614700</span></p>
            </div>


            

        </div>


            {/* Downline div */}

            <div className="bg-[#413f3f] w-full h-[1px] mt-10"></div>



            {/* ....................icon................... */}


            
            <div className="flex items-center justify-evenly mt-9  ">
                <button className="hidden  text-[white] sm:flex gap-1 items-center"><span className="text-[gold]"><FaBagShopping /></span>Become a Seller</button>
                <button className="hidden text-[white] md:flex gap-1 items-center"><span className="text-[gold]"><MdStars /></span>Advertise</button>
                <button className="hidden text-[white] lg:flex gap-1 items-center"><span className="text-[gold]"><FaGift /></span>Gifts Carts</button>
                <button className="hidden text-[white] xl:flex gap-1 items-center"><span className="text-[gold]"><FaQuestionCircle /></span>Help Center</button>
                <p  className="hidden sm:block text-[white]">© 2007-2023 Flipkart.com</p>
            
            <img src={Image2} alt="9" />
            </div>
            




        </div>
    )
}