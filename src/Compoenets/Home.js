import React, { Component } from 'react'
import {Modal, ModalDialog  , ModalHeader , ModalTitle , ModalBody , ModalFooter, Button ,Tabs,Tab  } from 'react-bootstrap'

export class Home extends Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }

    handelModal(){
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <div>
                 <section className="hero-screen">
        <div className="owl-image">
            <img src="/images/header-owl-shape.svg"/>
          </div>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="mb-4">
                <h1>Rideshare For</h1>
                <h1>Professionals, By</h1>
                <h1>Professionals</h1>
              </div>
              <p>Sage guarantees that you or your employee</p>
              <p>get picked up by a safe and experienced driver</p>
              <p>every time. Download our app and try it today!</p>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-8">
              <img src="/images/banner-mobile.png" className="w-100" alt=""/>
            </div>
          </div>
        </div>
      </section>
                <section className="OurOffer SectionPadding">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Our offers</h2>
                            <p className="mb-1">Safety and professionalism are our cornerstones.</p>
                            <p>Click below to see how we are different. </p>
                        </div>
                        </div>
                        {/* <div className="col-md-12 mb-5">
                        <div className="tabs-buttons">
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn active">For Riders</button>
                            <button type="button" className="btn">For Drivers</button>
                            <button type="button" className="btn">For Investors</button>
                            </div>
                        </div>
                        </div> */}
                    </div>
                    <Tabs defaultActiveKey="ForRiders" transition={false} className="custometabsButtos">
                    <Tab eventKey="ForRiders" title="For Riders">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <img src="/images/forriders.png" className="w-100" alt="image go here"/>
                        </div>
                        <div className="col-md-6">
                        <div className="tab-text-content">
                            <h2>Committing to safe and professional rides</h2>
                            <p>We only select drivers who have at least one year of driving experience in the ride sharing business. We are drivers and riders ourselves and we know the pain points.</p>
                            <ul>
                            <li><i className="fa fa-check-circle"></i>Easy and convenient rides</li>
                            <li><i className="fa fa-check-circle"></i>Affordable ride share service</li>
                            <li><i className="fa fa-check-circle"></i>24/7 online support</li>
                            <li><i className="fa fa-check-circle"></i>We pay your driver up to 90% of your money</li>
                            </ul>
                            <div className="AppAndGoogleStore mt-5 clearfix">
                            <img src="/images/appstore.png" alt="image goes here"/>
                            <img src="/images/googleplay.png" alt="image goes here"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </Tab>
                    <Tab eventKey="ForDrivers" title="For Drivers">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <div className="tab-text-content">
                            <h2>We the drivers...</h2>
                            <p>We are a driver oriented company. Bet that sounds new to you. With Sage you are not just a rideshare driver, you are an ally with an ownership opportunity.</p>
                            <ul>
                            <li><i className="fa fa-check-circle"></i>Become owner, get stock options</li>
                            <li><i className="fa fa-check-circle"></i>Keep up to 90% of the fees</li>
                            <li><i className="fa fa-check-circle"></i>24/7 online support</li>
                            <li><i className="fa fa-check-circle"></i>Most riders are business travelers</li>
                            </ul>
                            <div className="AppAndGoogleStore mt-5 clearfix">
                            <img src="/images/appstore.png" alt="image goes here"/>
                            <img src="/images/googleplay.png" alt="image goes here"/>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <img src="/images/fordriver.png" className="w-100" alt="image go here"/>
                        </div>
                    </div>
                    
                    </Tab>
                    <Tab eventKey="ForInvestors" title="For Investors" >
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <img src="/images/forinvestors.svg" className="w-100" alt="image go here"/>
                        </div>
                        <div className="col-md-6">
                        <div className="tab-text-content">
                            <h2>Be on board before we take off</h2>
                            <p>We, the founders, have invested our own time and money to create an opportunity and a company like no other!  We call it Sage Alliance because we are a merit-based company designed to benefit the many, not the few.
                            If you are a rideshare driver or rider, we provide a real opportunity for you to become a true owner of the company and app you so often use.
                            Please click the button below to learn more!</p>
                            <button className="btn btn-theme btn-lg w-25" onClick={()=>{this.handelModal()}}>See More</button>
                            
                        </div>
                        </div>
                    </div>
                   
                    </Tab>
                    </Tabs>
                    </div>
                </section>
                <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered className="investormodal">
                    <Modal.Body className="p-5">
                            <button className="closePopup" onClick={()=>{this.handelModal()}}><i className="fa fa-times"></i></button>
                            <h2>Investor</h2>
                            <h3>We are open to suggestions</h3>
                            <div className="form-group">
                                <input class="form-control" type="text" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input class="form-control" type="email" placeholder="Your Email"/>
                            </div>
                            <button className="btn btn-theme btn-block">Submit</button>
                            <p className="mb-0 mt-3 text-center">By submitting your name and email you are requesting information about an investment opportunity with Sage Alliance, Inc.  
                                Your contact information will be kept confidential and will not be spammed or shared with any 3rd parties.</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Home
