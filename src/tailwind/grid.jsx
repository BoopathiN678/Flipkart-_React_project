const Grid=()=>{
    return(
        <div className="grid grid-cols-4 bg-[#532053] min-h-[100vh] gap-[20px] p-[30px]">
            <div className="row-span-3  bg-green-600"></div>
            <div className="col-span-2  bg-green-600"></div>
            <div className=" bg-red-600"></div>
            <div className=" bg-orange-600" ></div>
            <div className="  bg-red-600"></div>
            <div className="row-span-2  bg-green-600"></div>
            <div className=" bg-red-600"></div>
            <div className="bg-orange-600"></div>
        </div>
    )
}
export default Grid ;