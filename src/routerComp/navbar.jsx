import { Link } from "react-router-dom"

const  Navbar=()=>{
    return(
        <div className="flex justify-between min-h-[40px] bg-[salmon] p-5">
                <div className="">
                    <h1>logo</h1>
                </div>
                <div className="flex gap-8">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/cart'}>Cart</Link>
                    
                    
                </div>
        </div>
    )
}

export default Navbar