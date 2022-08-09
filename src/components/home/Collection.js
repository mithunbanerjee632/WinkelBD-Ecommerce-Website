import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import AppUrl from "../../api/AppUrl";
import Axios from "axios";
import Loading from "../loader/Loading";
import WentWrong from "../wentwrong/WentWrong";

class Collection extends Component {
    constructor() {
        super();
        this.state={
            collection:[],
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        Axios.get(AppUrl.ProductListByRemark('COLLECTION')).then(response=>{
               if(response.status==200){
                   let jsonData = response.data;
                   this.setState({collection:jsonData,isLoading:false,isError:false})
               }else{
                   this.setState({isLoading:false,isError:true});
               }
        }).catch(error=>{
            this.setState({isLoading:false,isError:true});
        });
    }

    render() {
        const MyProductList = this.state.collection;
        const MyView=MyProductList.map((ProductList,i)=>{
          if(ProductList.special_price==="N/A"){
              return  <Col key={i.toString()} className="p-1"  xl={2} lg={2} md={2} sm={6} xs={6}>
                  <Card className="card h-100  text-center w-100  image-box ">
                      <img src={ProductList.image} alt=""/>
                      <Card.Body>
                          <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                          <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                      </Card.Body>
                  </Card>
              </Col>

          }else{
              return <Col className="p-1" xl={2} lg={2} md={2} sm={6} xs={6} >
                  <Card className="card h-100  text-center w-100  image-box ">
                      <img src={ProductList.image} alt=""/>
                      <Card.Body>
                          <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                          <p className="product-price-on-card">
                              Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                          </p>
                      </Card.Body>
                  </Card>
              </Col>
          }
        })

        if(this.state.isLoading==true && this.state.isError==false){
            return <Loading/>;
        }else if(this.state.isLoading==false && this.state.isError==false){
            return (
                <Fragment>
                    <Container className="text-center BetweenTwoSection" fluid={true}>
                        <h4 className="section-title">SPECIAL COLLECTION</h4>
                        <p className="section-sub-title">Some of Our Exclusive Collection.You May Like</p>

                        <Row>
                            {MyView}


                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.isLoading==false && this.state.isError==true){
            return <WentWrong/>;
        }

    }
}

export default Collection;