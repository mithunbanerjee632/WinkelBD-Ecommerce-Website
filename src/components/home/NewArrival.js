import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Card, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Axios from "axios";
import AppUrl from "../../api/AppUrl";
import Loading from "../loader/Loading";
import WentWrong from "../wentwrong/WentWrong";

class NewArrival extends Component {

    constructor() {
        super();
        this.state={
            arrival:[],
            isLoading:true,
            isError:false
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    componentDidMount() {
        Axios.get(AppUrl.ProductListByRemark('NEW')).then(response=>{
            if(response.status==200){
                let jsonData = response.data;
                this.setState({arrival:jsonData,isLoading:false,isError:false})
            }else{
                this.setState({isLoading:false,isError:true});
            }
        }).catch(error=>{
            this.setState({isLoading:false,isError:true});
        });
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

        const MyProductList = this.state.arrival;
        const MyView=MyProductList.map((ProductList,i)=>{
            if(ProductList.special_price==="N/A"){
                return  <div key={i.toString()} className="p-1" >
                    <Card className="card  text-center  w-100  image-box ">
                        <img src={ProductList.image} alt=""/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                            <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                </div>

            }else{
                return <div key={i.toString()} className="p-1" >
                    <Card className="card  text-center  w-100  image-box ">
                        <img src={ProductList.image} alt=""/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                            <p className="product-price-on-card">
                                Price: <strike className="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            }
        })

        if(this.state.isLoading==true && this.state.iError==false){
            return <Loading/>;
        }else if(this.state.isLoading==false && this.state.iError==false){
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
                            {MyView}
                        </Slider>

                    </Container>
                </Fragment>
            );
        }else if(this.state.isLoading==false && this.state.iError==true){
            return <WentWrong/>;
        }


    }
}

export default NewArrival;