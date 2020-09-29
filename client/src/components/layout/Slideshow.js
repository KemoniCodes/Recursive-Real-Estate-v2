import React from 'react';
import '../../scss/slideshow.scss'
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
                    <img src="/img/estate-1.jpg" alt="" />
                    <img src="/img/estate-2.jpg" alt="" />
                    <img src="/img/estate-3.jpg" alt="" />
                    <img src="/img/estate-4.jpg" alt="" />
                    <img src="/img/estate-5.jpg" alt="" />
                </Carousel>
            </div>
        )
    }
}

export default Slideshow;