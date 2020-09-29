import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="main-nav">
            <header>
                <nav className="main-nav">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Properties'>Properties</Link></li>
                        <li><Link to='/Agents'>Agents</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>

                        <div className="auth">
                            <li><Link to='/login'>Sign In</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            {/* <li><Link to='/SignIn'>Log Out</Link></li> */}
                        </div>
                    </ul>
                </nav>
            </header>
        </div >
    )
}

export default Navbar