import React from 'react'
// import ContactNav from '../layout/ContactNav'
import Navbar from './Navbar';
import SearchBar from './Searchbar'
import Slideshow from './Slideshow'
import Destinations from './Destinations'
import Interiors from './Interiors'
// import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="Home">
            {/* <ContactNav /> */}
            <div>
                <h1>Recursive Real Estate</h1>
                <h3>International Luxury Realty</h3>
            </div>
            <Navbar />
            <SearchBar />
            <Slideshow />
            <Destinations />
            <Interiors />
        </div >
    )
}

export default Landing