import React from 'react';
import '../../scss/slideshow.scss'
import Image1 from '../../img/estate-1.jpg'
import Image2 from '../../img/estate-2.jpg'
import Image3 from '../../img/estate-3.jpg'
import Image4 from '../../img/estate-4.jpg'


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Slideshow extends React.Component {
    render() {
        return (
            <div className="property-slideshow">
                <Carousel
                    arrows
                    dots
                    infinite
                    autoPlay={3000}
                    animationSpeed={2000}
                >
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                </Carousel>
            </div>
        )
    }
}

export default Slideshow;