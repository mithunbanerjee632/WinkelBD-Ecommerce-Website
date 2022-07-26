import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class HomeTopBannerMobile extends Component {
    render() {
        return (
            <Fragment>


                <Container fluid={true} className="m-0 p-0 overflow-hidden w-100">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <Card  className="card h-100  text-center w-100">
                                        <img src="images/top2.jpg" alt=""/>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <Card  className="card h-100  text-center w-100">
                                        <img src="images/top1.jpg" alt=""/>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>










                {/*<Container fluid={true} className="text-center BetweenTwoSection">*/}
                {/*    <Row>*/}
                {/*        <Col xl={3} lg={3} md={3} sm={6} xs={6}>*/}
                {/*            <Card className="card h-100  text-center w-100  image-box">*/}
                {/*                <img src="https://image.kilimall.com/kenya/shop/adv/96ae08c2622278c1b060427ba44f013c.jpg.webp" alt="banner"/>*/}
                {/*            </Card>*/}
                {/*        </Col>*/}
                {/*        <Col xl={3} lg={3} md={3} sm={6} xs={6}>*/}
                {/*            <Card className="card h-100  text-center w-100  image-box">*/}
                {/*                <img src="https://image.kilimall.com/kenya/shop/adv/0e050dfe8bde93d9a9f01f9667a7e993.jpg.webp" alt="banner"/>*/}
                {/*            </Card>*/}
                {/*        </Col>*/}
                {/*        <Col xl={3} lg={3} md={3} sm={6} xs={6}>*/}
                {/*            <Card className="card h-100  text-center w-100  image-box">*/}
                {/*                <img src="https://image.kilimall.com/kenya/shop/adv/bcadf29ce8b125c7b5d8024402b6ee9c.jpg.webp" alt="banner"/>*/}
                {/*            </Card>*/}
                {/*        </Col>*/}
                {/*        <Col xl={3} lg={3} md={3} sm={6} xs={6}>*/}
                {/*            <Card className="card h-100  text-center w-100  image-box">*/}
                {/*                <img src="https://image.kilimall.com/kenya/shop/adv/e84f8c8ed728a61486cf352fc5fa9b85.jpg.webp" alt="banner"/>*/}
                {/*            </Card>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}
            </Fragment>
        );
    }
}

export default HomeTopBannerMobile;