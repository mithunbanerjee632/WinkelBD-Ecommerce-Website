import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import AppUrl from "../../api/AppUrl";
import {Link} from "react-router-dom";
class Categories extends Component {
    constructor() {
        super();
        this.state={
            categories:[]
        }
    }

    componentDidMount() {
        Axios.get(AppUrl.CategoryDetails).then(response=>{
            if(response.status==200){
                let jsonData = response.data;
                this.setState({categories:jsonData});
            }
        }).catch(error=>{

        });
    }

    render() {

        let myLists = this.state.categories;

        let myView = myLists.map((Categories,i)=>{
            return  <Col key={i.toString()} className="p-0"  xl={2} lg={2} md={2} sm={6} xs={6}>
                <Link to={"ProductByCategory/"+Categories.ParentCategoryName}>
                    <Card className="h-100 w-100 text-center">

                        <Card.Body>
                            <img className="w-75" src={Categories.ParentCategoryImage}/>
                            <h4 className="category-name">{Categories.ParentCategoryName}</h4>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        });
        return (
            <Fragment>
                <Container fluid={true} className="text-center BetweenTwoSection">
                    <h4 className="section-title">CATEGORIES</h4>
                    {/*<p className="section-sub-title">Some of Our Exclusive Collection.You May Like</p>*/}
                    <Row>
                        {/*<Col key={1} xl={6} lg={6} md={6} sm={12} xs={12}>*/}
                        {/*    <Row>*/}
                                {myView}
                        {/*    </Row>*/}
                        {/*</Col>*/}

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Categories;