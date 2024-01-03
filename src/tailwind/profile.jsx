import { useState } from 'react';
import Image from './amazon.jpg'
import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
const Profile=()=>{

    const [Ecom,SetEcom] = useState([
        {
            Img:Image,
            ProductName:"shoes",
            Brand:"puma",
            Price:800,
            Rating:3
        },
        {
            Img:Image,
            ProductName:"shoes",
            Brand:"nicky",
            Price:500,
            Rating:2
        },
        {
            Img:Image,
            ProductName:"shoes",
            Brand:"vicky",
            Price:850,
            Rating:5
        },
        {
            Img:Image,
            ProductName:"shoes",
            Brand:"local",
            Price:1000,
            Rating:4
        }
        
        
    ])

    const [cart,setcart] = useState([])

    const addcart =(index)=>{
        Ecom.map((val,i)=>{

            if(i === index){
                setcart([...cart, val])
            }
        })
        
    }

    const del=(index)=>{
        let hari = cart.filter((val,i)=>{
            if(i === index){

            }
            else{
                return val;
            }
})

setcart(hari)
}




    return(
        <div className='min-h-[100vh] flex flex-col justify-center items-center p-10'>

            <div className='grid bg-[salmon]  grid-cols-4 gap-8 min-h-[]'>
                    {Ecom.map((val,i)=>{
                       return (
                        <div className='bg-[#f0ecec] p-12 flex justify-center items-center flex-col'>
                        <div className='  flex  justify-center items-center '>
                            <img src={Image} alt="page" width={250} height={100} className='p-3' />
                            </div>
                            <div className='flex justify-center items-center flex-col gap-3'>
                                <p className='text-xl font-bold'>{val.Brand}</p>
                                <div className='flex justify-center items-center flex-col gap-1 hover:text-[#d86d61] cursor-pointer'>
                                <p>Casual Sneaker Shoes for Men | Stylish and</p>
                                <p>COMFORTABLE</p></div>
                                <button onClick={()=>addcart(i)} className='bg-[salmon] text-white p-3 hover:bg-[#cd6257]'>ADD TO CART</button>
                                <p className='flex flex-row text-[orange]'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></p>
                                <p className='text-xl'><span className='text-[#ea685a]'>-80%</span> ₹1,119.00</p>
                                <p className='text-sm'>M.R.P.: ₹{val.Price}</p>
                                
                            </div>
            
                        </div>  
                       )
                    }
                    )}
            </div>
        
        <h1 className='mt-12'>this cart section</h1>
        <div className='grid grid-cols-4 gap-8 min-h-[] bg-black'>
                    {cart.map((val,i)=>{
                       return (
                        <div className='bg-[#f0ecec] p-12 flex justify-center items-center flex-col'>
                        <div className='  flex  justify-center items-center '>
                            <img src={Image} alt="page" width={250} height={100} className='p-3' />
                            </div>
                            <div className='flex justify-center items-center flex-col gap-3'>
                                <p className='text-xl font-bold'>{val.Brand}</p>
                                <div className='flex justify-center items-center flex-col gap-1 hover:text-[#d86d61] cursor-pointer'>
                                <p>Casual Sneaker Shoes for Men | Stylish and</p>
                                <p>COMFORTABLE</p></div>
                                <button className='bg-[salmon] text-white p-3 hover:bg-[#cd6257]'>DEAL OF THE DAY</button>
                                <p className='flex flex-row text-[orange]'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></p>
                                <p className='text-xl'><span className='text-[#ea685a]'>-80%</span> ₹1,119.00</p>
                                <p className='text-sm'>M.R.P.: ₹{val.Price}</p>
                                <button onClick={()=>del(i)} className='bg-[salmon] text-white p-3 hover:bg-[#cd6257]'>throw out</button>
                            </div>
            
                        </div>  
                       )
                    }
                    )}
            </div>
        </div>
    )
}

export default Profile ;