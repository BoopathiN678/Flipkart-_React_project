import { GetMYStore } from "./Estore";

function Cart(){
    const { arr, Del} = GetMYStore()
    
    return(
        <div className={`grid ${arr.length > 0 ? "md:grid-cols-3" :"md:grid-cols-1"} grid-cols-1 md:grid min-h-[85vh] items-center `}>
        {arr && arr.length > 0 ? arr.map((t, i)=>{
       
       return(
        <div className="border-4 text-center justify-center items-center flex flex-col sm:flex sm:flex-row  sm:items-center gap-5 sm:p-6 bg-[#f0ecec] ">
        <div className="hover:scale-105 duration-500 sm:hover:scale-105 sm:duration-500 cursor-pointer p-5">
        <img className="w-44 h-44 rounded-lg "  src={t.images[0]} alt="" />
        </div>
        <div className="flex flex-col">
        <p className="text-[black] font-sans "> Brand:{t.brand}</p>
        <p className="text-[black] font-bold"> From:{t.price}</p>
        <p className="text-[black] font-sans"> Ratings: <span className="text-[#d8c13e]">{t.rating}</span></p>
        <div className="p-4">
        <button onClick={()=>Del(i)} className="hover:scale-105 duration-150 sm:hover:scale-105 sm:duration-150 border-2 p-1 border-[#635f5f] text-[black] w-28  ">Throw out</button>
        </div>
        </div>

    
        </div>
       )
   })
   : <div className="flex justify-center items-center text-xl w-full">sorry,no data...!</div>}
    
</div>

    )
}
export default Cart;
