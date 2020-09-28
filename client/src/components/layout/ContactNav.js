import React, { Component } from 'react'
// import { Link } from 'react-router-dom'



class ContactNav extends Component {
    render() {
        return (
            <div className="contact-nav">
                <header className="App-header">
                    <nav className="contact-nav">
                        <ul>
                            <li><h4>Contact Us</h4></li>
                            <li>(555)-555-5555</li>
                            <li><i className="fab fa-linkedin"></i></li>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}



export default ContactNav