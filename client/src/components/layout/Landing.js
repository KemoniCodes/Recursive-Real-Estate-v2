import React from 'react'
import ContactNav from '../layout/ContactNav'
import Navbar from '../layout/Navbar'
// import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="Home">
            <ContactNav />
            <div>
                <h1>Recursive Real Estate</h1>
                <h3>International Luxury Realty</h3>
            </div>
            <Navbar />
        </div >
    )
}

export default Landing