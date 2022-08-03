import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";
import Loading from "../loader/Loading";
import WentWrong from "../wentwrong/WentWrong";
import Axios from "axios";
import AppUrl from "../../api/AppUrl";
import ReactHtmlParser from "react-html-parser";


class Purchase extends Component {
    constructor() {
        super();
        this.state={
            purchase:"",
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        if(sessionStorage.getItem('siteInfoPurchase')==null){
            Axios.get(AppUrl.SiteInfoDetails).then(response=>{
                if(response.status==200){
                    let jsonData = (response.data)[0]['purchase_guide'];
                    this.setState({purchase:jsonData,isLoading:false,isError:false})
                    sessionStorage.setItem('siteInfoPurchase',jsonData);
                }else{
                    this.setState({isLoading:false,isError:true});
                }
            }).catch(error=>{
                this.setState({isLoading:false,isError:true});
            });
        }else{
            this.setState({purchase:sessionStorage.getItem('siteInfoPurchase'),isLoading:false,isError:false});
        }

    }

    render() {
        if(this.state.isLoading==true && this.state.isError==false){
            return <Loading/>;
        }else if(this.state.isLoading==false && this.state.isError==false){
            return (
                <Fragment>
                    <Container className="TopSection bg-white">
                        <Row>
                            <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>

                                <div className="p-2">
                                    <div className="animated zoomIn">
                                        {ReactHtmlParser(this.state.purchase)}

                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.isLoading==false && this.state.isError==true){
            return <WentWrong/>
        }

    }
}

export default Purchase;