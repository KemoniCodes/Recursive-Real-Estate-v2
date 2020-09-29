import React from 'react'
import '../../scss/interior.scss'
import Image1 from '../../img/interior-1.jpg'
import Image2 from '../../img/interior-8.jpg'
import Image3 from '../../img/interior-3.jpg'
import Image4 from '../../img/interior-7.jpg'
import Image5 from '../../img/interior-9.jpg'


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Interiors extends React.Component {
    render() {
        return (
            <div className="title">
                <h2>Featured Interiors</h2>

                <div className="featured-interiors">
                    <Carousel className="interiors"
                        slidesPerScroll={3}
                        slidesPerPage={3}
                        infinite
                        arrows
                    >
                        <img src={Image1} alt="" />

                        <img src={Image2} alt="" />

                        <img src={Image3} alt="" />

                        <img src={Image4} alt="" />

                        <img src={Image5} alt="" />
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Interiors