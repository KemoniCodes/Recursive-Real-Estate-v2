import React from 'react'
import '../../scss/destination.scss'
import Image1 from '../../img/la-1.jpg'
import Image2 from '../../img/new-zealand-1.jpg'
import Image3 from '../../img/mexico-1.jpg'
import Image4 from '../../img/dubai-1.jpg'
import Image5 from '../../img/canada-1.jpg'
import Image6 from '../../img/jamaica-1.jpg'




import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Destinations extends React.Component {
    render() {
        return (
            <div className="destination">

                <div className="row">
                    <div className="destination-title">
                        <h2>Featured Destinations</h2>
                    </div>

                    <div className="destination-pics">
                        <Carousel className="pics"
                            arrows
                            infinite
                        >
                            <div className="destination-slide">
                                <img src={Image1} alt="" />
                                <div className="destination-name">
                                    <h2>LOS ANGELES</h2>
                                </div>
                                <div className="caption">
                                    <h3>DISCOVER THE WEST COAST</h3>
                                    <p>L.A., the home of luxury. From the houses, to the energy, down to the weather. Come live the California dream in your Hollywood Hills mansion or your Malibu estate on a beautiful ocean front. Reside affluently in the prestigous and oh-so sunny Los Angeles!</p>
                                </div>
                            </div>


                            <div className="destination-slide">
                                <img src={Image2} alt="" />
                                <div className="destination-name">
                                    <h2 id="zealand">NEW ZEALAND</h2>
                                </div>
                                <div className="caption">
                                    <h3>INDULGE IN A HIGH-END COUNTRY LFESTYLE</h3>
                                    <p>Live prestigously in the gracious New Zealand. From beaches and apartments to high country estates, vineyards and family homes. We have properties for every lifestyle! </p>
                                </div>
                            </div>

                            <div
                                className="destination-slide">
                                <img src={Image3} alt="" />
                                <div className="destination-name">
                                    <h2>MEXICO</h2>
                                </div>
                                <div className="caption">
                                    <h3>EXPERIENCE THE MAGIC THAT IS MEXICO'S COAST</h3>
                                    <p>Soak up the sun south of the border and expereince the sands in style. Enjoy the privacy of secluded beaches with our exceptional collection of luxury estates. </p>
                                </div>
                            </div>


                            <div
                                className="destination-slide">
                                <img src={Image4} alt="" />
                                <div className="destination-name">
                                    <h2>DUBAI</h2>
                                </div>
                                <div className="caption">
                                    <h3>DIVE INTO DUBAI'S MODERN OPPULENCE</h3>
                                    <p>
                                        Featuring Dubai's distinct artichetectural patterns, our selection is designed for buyers seekng to live lavishly and comfortably. Prized for their striking elegance and beauty, we provide home seekers with an exceptional, one of a kind living experience.
                                    </p>
                                </div>
                            </div>


                            <div
                                className="destination-slide">
                                <img src={Image5} alt="" />
                                <div className="destination-name">
                                    <h2>CANADA</h2>
                                </div>
                                <div className="caption">
                                    <h3>WINTER WONDERLAND EXTRAVAGANZA'S</h3>
                                    <p>
                                        With our selection of lavish winter-ready retreats, you can experience all of your snow needs in style! Come home to a cozy evening in a spacious, modern, cabin safe-haven.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="destination-slide">
                                <img src={Image6} alt="" />
                                <div className="destination-name">
                                    <h2>JAMAICA</h2>
                                </div>
                                <div className="caption">
                                    <h3>ESCAPE TO UNFORGETTABLE SIGHTS</h3>
                                    <p>
                                        Find your happiness in Jamaica's effervescent warmth accompanied with beautiful views of the ocean. Our highly sought after villas and homes will make your island fantasies a reality!
                                    </p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Destinations