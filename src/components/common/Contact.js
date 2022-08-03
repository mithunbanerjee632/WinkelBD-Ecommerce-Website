import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ValidationForm from "../../validation/ValidationForm";
import Axios from "axios";
import cogoToast from 'cogo-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppUrl from "../../api/AppUrl";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";
import Spinner from 'react-bootstrap/Spinner';


class Contact extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            mobile:"",
            message:""
        }
    }

    NameOnChange=(event)=>{
        let name=event.target.value;
        this.setState({name:name});

    }

    EmailOnChange=(event)=>{
        let email=event.target.value;
        this.setState({email:email});
    }

    MobileOnChange=(event)=>{
        let mobile=event.target.value;
        this.setState({mobile:mobile});
    }

    MessageOnChange=(event)=>{
        let message=event.target.value;
        this.setState({message:message});
    }

    //Form Submit

    OnFormSubmit=(event)=>{
        event.preventDefault();

        let name = this.state.name;
        let email = this.state.email;
        let mobile = this.state.mobile;
        let message= this.state.message;
        let sendButton=document.getElementById('sendBtn');
        let contactForm=document.getElementById('contactForm');

        if(name.length==0){
            toast.info('Please Write Your Name!');
        }else if(email.length==0){
            toast.info('Please Write Your Email Address!');
        }else if(mobile.length==0){
            toast.info('Please Write Your Mobile Number!');
        }
        else if(!(ValidationForm.NameRegEx).test(name)){
            toast.error('Invalid Name');
        }else if(!(ValidationForm.EmailRegEx).test(email)){
            toast.error('Invalid Email Address');
        }else if(!(ValidationForm.MobileNumRegEx).test(mobile)){
            toast.error('Invalid Mobile Number');
        }else if(message.length==0){
            toast.info('Please Write Your Message');
        }else{
            sendButton.innerHTML="Sending...";
            let MyFormData = new FormData();
            MyFormData.append('name',name);
            MyFormData.append('email',email);
            MyFormData.append('mobile',mobile);
            MyFormData.append('message',message);

            Axios.post(AppUrl.ContactDetails,MyFormData).then(function(response){
               if(response.status==200 && response.data==1){
                   toast.success('Successfully Sent...',{
                       position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,
                   });

                   sendButton.innerHTML="Send";
                   contactForm.reset();
               }else{
                   toast.error('Message Not Sent.Please Try Again...');
                   sendButton.innerHTML="Send";
               }
            }).catch(function(error){
                toast.error('Message Not Sent.Please Try Again...');
                sendButton.innerHTML="Send";
            });

        }

    }



    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="shadow-sm mt-1 animated slideInDown bg-white " md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.OnFormSubmit} id="contactForm"  className="onboardForm">
                                        {/*<h4 className="section-title">CONTACT WITH US</h4>*/}
                                        <h6 className="section-sub-title">Please Fill Out The Form If You Want to Contact with Us and Go Next...</h6>
                                        <input  onChange={this.NameOnChange} className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.EmailOnChange}  className="form-control m-2" type="email" placeholder="Your Email Address"/>
                                        <input onChange={this.MobileOnChange}  className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <textarea  onChange={this.MessageOnChange} className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button id="sendBtn" type="submit" className="btn w-100 m-2 site-btn">Send</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.0146924111457!2d90.4339106713758!3d23.69939880174579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ff52a9fb3d%3A0x55ee9ecc7ee93e50!2sSouth%20Point%20School%20%26%20College%2C%20Shampur%20Campus%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1658761174201!5m2!1sen!2sbd"
                                        width="600" height="450" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Container>
            </Fragment>
        );
    }
}

export default Contact;