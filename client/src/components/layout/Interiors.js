import React from 'react'
import '../../scss/interior.scss'

// eslint-disable-next-line 
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
                        <img src="/img/interior-1.jpg" alt="" />

                        <img src="/img/interior-8.jpg" alt="" />

                        <img src="/img/interior-3.jpg" alt="" />

                        <img src="/img/interior-7.jpg" alt="" />

                        <img src="/img/interior-9.jpg" alt="" />
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Interiors