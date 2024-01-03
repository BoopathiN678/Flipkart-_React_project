import './navbar.css';
const Navbar=()=>{
    return (
    <div className="flex justify-between">
        <div className=''>
            <h1>ARARAT</h1>
            <p>ARCHITECTURE</p>
            </div>
            <div className=''>
                <button>HOME</button>
                <button>ABOUT</button>
                <button>PROJECTS</button>
                <button>SERVICES</button>
                <button>BLOG</button>
                <button>PAGES</button>
                <button>CONTACT</button>
            </div>
            <div className=''>
                <button>GET IN TOUCH</button>
            </div>
            
        </div>)

}
export default Navbar