import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="main-nav">
            <header>
                <nav className="main-nav">
                    <ul>
                        <li>Home</li>
                        <li>Properties</li>
                        <li>Agents</li>
                        <li>Contact</li>

                        <div className="auth">
                            <li>Sign In</li>
                            <li>Register</li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div >
    )
}

export default Navbar