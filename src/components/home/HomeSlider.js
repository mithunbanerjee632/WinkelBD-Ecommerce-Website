import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
class HomeSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="container-fluid m-0 p-0 overflow-hidden w-100 ">
                <div  className="m-0 p-0">
                   <div className="row card-body">
                       <Slider {...settings}>
                           <div className="col-md-6 animated slideInDown text-center">
                               <img className="slider-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN011Elc7Y1rKLUCYWT47_!!6000000005612-0-tps-990-400.jpg" alt="slider-img"/>
                           </div>
                           <div className="col-md-6 animated slideInDown text-center">
                               <img className="slider-img" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01M9x0R41VzdeRW8FYF_!!6000000002724-0-tps-990-400.jpg" alt="slider-img"/>
                           </div>

                           <div className="col-md-6 animated slideInDown text-center">
                               <img className="slider-img" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01uiSeBv1O6x2sPJnuu_!!6000000001657-2-tps-990-400.png" alt="slider-img"/>
                           </div>

                           <div className="col-md-6 animated slideInDown text-center">
                               <img className="slider-img" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01ph4PDC1ag0l4MtUv0_!!6000000003358-2-tps-990-400.png" alt="slider-img"/>
                           </div>

                       </Slider>
                   </div>

                 </div>
            </div>
        );
    }
}

export default HomeSlider;