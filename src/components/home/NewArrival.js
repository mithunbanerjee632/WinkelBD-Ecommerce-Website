import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";

class NewArrival extends Component {

    constructor() {
        super();
        this.state={

        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed:3000,
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container fluid={true} className="text-center BetweenTwoSection">
                    <h4 className="section-title">NEW ARRIVAL
                        <a className="btn btn-sm mx-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"/>
                        </a>
                        <a className="btn btn-sm mx-2 site-btn" onClick={this.next}>
                            <i className="fa fa-angle-right"/>
                        </a>
                    </h4>
                    <p className="section-sub-title">Some of Our Exclusive Collection.You May Like</p>

                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div>
                            <Card className="card h-100  text-center w-100  image-box">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/h/o/hot-12-play-4gb-128gb-20-07-2022.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</h5>
                                    <p className="product-price-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="card h-100  text-center w-100  image-box">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/y/1/y15s-13-07-2022.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</h5>
                                    <p className="product-price-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="card h-100  text-center w-100  image-box">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/m/s/msa18crnebu-20-07-2022.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</h5>
                                    <p className="product-price-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="card h-100  text-center w-100  image-box">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/j/b/jbl-flip-5-wireless-portable-speaker-16-7-22.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</h5>
                                    <p className="product-price-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="card h-100  text-center w-100  image-box">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/h/o/hot-12-play-4gb-128gb-20-07-2022.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</h5>
                                    <p className="product-price-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="card h-100  text-center w-100  image-box">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/y/1/y15s-13-07-2022.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</h5>
                                    <p className="product-price-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>

                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;