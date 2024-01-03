function Product({data, id, deletefunction,index}){

    return <div onClick={()=>deletefunction(index)}>
        {data.brand} {id}
        <img src={data.images[0]} alt="" />
    </div>
}

export default Product