import React from 'react';
import Carousel from "react-responsive-carousel";


 const CarouselDemo = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="./images/img1.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="./images/img2.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="./images/img3.jpg" />
                    <p className="legend"></p>
                </div>
                
            </Carousel>
        </div>
    )
}

export default CarouselDemo;