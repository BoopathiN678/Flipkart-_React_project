import Image from './Sayedhasan.jpg'

const Like=()=>{
    return(
        <div className="bg-[grey] min-h-[100vh] flex justify-center items-center flex-col p-5">
            <div className=" relative bg-[#f9f7f7] flex h-[50vh] flex-col rounded-t-2xl w-[70%] md:w-[30%] justify-center items-center">
                 <img src={Image} alt="page" className='rounded-full p-3 ' width={150} height={150} />
                 <div className='flex flex-col justify-center items-center gap-1 p-4'>
                <p className='font-serif  font-bold text-3xl'>Lesil</p>
                <p className='font-sans  text-xl'>@sayedhasan</p>
                <p className='font-mono text-xl'>product Dsingner SSIT</p>
            </div>
            </div>
            <div className='bg-[white] flex flex-col h-[40vh]  rounded-b-2xl w-[70%] md:w-[30%]   '>
                <div className='flex gap-8 justify-center p-5'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <p className='font-bold text-xl'>1</p>
                    <p>SHOTS</p>
                    </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <p className='font-bold text-xl'>1</p>
                    <p>FOLLOWING</p>
                    </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <p className='font-bold text-xl'>30M</p>
                    <p>FOLLOWERS</p>
                    </div>
                </div>

                    {/* button */}
                    <div className='flex flex-col p-5 gap-4'>
                        <button className='border rounded-full bg-green-500 p-4 text-white hover:bg-green-400'>Sendmassage</button>
                        <button>MORE</button>
                    </div>
            </div>
            

        </div>
    )
} 


export default Like ;