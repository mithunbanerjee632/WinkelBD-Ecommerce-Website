import React, {Component, Fragment} from 'react';
import Axios from "axios";
import AppUrl from "../../api/AppUrl";
import {Card, Col, Container, Row} from "react-bootstrap";
import Loading from "../loader/Loading";
import WentWrong from "../wentwrong/WentWrong";

class ProductBySubcategory extends Component {
    constructor(props) {
        super();
        this.state= {
            subcategory: props.subCatName,
            category:props.catName,
            productData: [],
            isLoading:true,
            isError:false
        }

    }

    componentDidMount() {
        Axios.get(AppUrl.ProductListBySubCategory(this.state.category,this.state.subcategory)).then(response=>{
            if(response.status==200){
                let jsonData = response.data;
                this.setState({productData:jsonData,isLoading:false,isError:false})
            }else{
                this.setState({isLoading:false,isError:true})
            }
        }).catch(error=>{
            this.setState({isLoading:false,isError:true})
        });
    }

    render() {
        const Category = this.state.category;
        const MyProductList = this.state.productData;
        const myView = MyProductList.map((ProductList,i)=>{

            if(ProductList.special_price==="N/A"){
                return  <Col key={i.toString()} className="p-1"  xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box h-100 w-100 card">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{(ProductList.title).substring(0,50)}</h5>
                            <p className="product-price-on-card p-1">Price:{ProductList.price} Tk</p>
                        </Card.Body>
                    </Card>
                </Col>
            }else{
                return  <Col key={i.toString()} className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box h-100 w-100 card">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                            <p className="product-price-on-card">
                                Price: <strike className="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                            </p>

                        </Card.Body>
                    </Card>
                </Col>
            }

        });
        if(this.state.isLoading==true && this.state.isError==false){
            return <Loading/>
        }else if(this.state.isLoading==false && this.state.isError==false){
            return (
                <Fragment>
                    <Container fluid={true} className="text-center BetweenTwoSection">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.isLoading==false && this.state.isError==false){
            return <WentWrong/>
        }

    }
}

export default ProductBySubcategory;