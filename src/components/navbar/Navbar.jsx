import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo"><span>ProBooking</span></div>
            <div className="navArea">
                <div className="navItem">
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar