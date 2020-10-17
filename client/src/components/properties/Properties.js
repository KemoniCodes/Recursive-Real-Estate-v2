import React from 'react'
import '../../scss/property.scss';
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar';



class Properties extends React.Component {
    render() {
        return (
            <div className="property-page" >
                <div>
                    <h1><Link to='/'>Recursive Real Estate</Link></h1>
                    <h3>International Luxury Realty</h3>
                </div>
                <Navbar />

                <h2>Our Properties</h2>

                <div className="row">
                    <div>
                        <img src="img/estate-9.jpg" alt="" />
                        <div className="agent-info">
                            <p>123 MONTANA RD</p>
                            <p className="location">LOS HILLS, NZ 44455</p>
                            <ul>
                                <li className="price">$50,000</li>
                                <div className="details">
                                    <li><i class="fas fa-home"></i> 5,000 sq ft</li>
                                    <li><i class="fas fa-bed"></i> 5</li>
                                    <li><i class="fas fa-bath"></i>4</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Properties