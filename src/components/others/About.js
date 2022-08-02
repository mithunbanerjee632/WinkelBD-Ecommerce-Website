import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Axios from "axios";
import AppUrl from "../../api/AppUrl";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReactHtmlParser from "react-html-parser";
import Loading from "../loader/Loading";
import WentWrong from "../wentwrong/WentWrong";

class About extends Component {
   constructor() {
       super();
       this.state={
           about:"",
           isLoading:true,
           isError:false
       }
   }

    componentDidMount() {

       if(sessionStorage.getItem('siteInfoAbout')==null){
           Axios.get(AppUrl.SiteInfoDetails).then(response=>{
               // let statusCode= response.status;
               if(response==null){
                   this.setState({isError:true,isLoading:false})
               }else{
                   if(response.status==200){
                       let jsonData = (response.data)[0]['about_us'];
                       this.setState({about:jsonData,isError:false,isLoading:false});
                       sessionStorage.setItem('siteInfoAbout',jsonData);
                   }
               }



           }).catch(error=>{
               this.setState({isError:true,isLoading:false})
           });
       }else{
           this.setState({about:sessionStorage.getItem('siteInfoAbout'),isError:false,isLoading:false});
       }


    }

    render() {
       if(this.state.isLoading == true && this.state.isError==false){
            return <Loading/>
       }else if(this.state.isLoading == false && this.state.isError==false){
           return (
               <Fragment>
                   <Container className="TopSection bg-white">
                       {/*<Breadcrumb className="shadow-sm mt-2 bg-white">*/}
                       {/*    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>*/}
                       {/*    <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>*/}
                       {/*</Breadcrumb>*/}
                       <Row>
                           <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>
                               <div className="">
                                   <div className="animated zoomIn">
                                       {ReactHtmlParser(this.state.about)}


                                   </div>
                               </div>

                           </Col>
                       </Row>
                   </Container>
               </Fragment>
           );
       }else if(this.state.isError==true){
          return <WentWrong/>
       }

    }
}

export default About;