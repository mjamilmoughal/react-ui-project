import React, { Component } from 'react'
import {Accordion , Card , Button} from 'react-bootstrap'

export class HelpCenter extends Component {
    render() {
        return (
            <div>
                 <section className="hero-help-screen">
                    <div className="owl-image">
                        <img src="/images/header-owl-shape.svg"/>
                    </div>
                    <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6">
                        <div className="mb-4">
                            <h1>Hello, How Can We</h1>
                            <h1>Help?</h1>
                        </div>
                        <div className="mb-4 custome-help-input">
                            <input type="text" className="form-control" placeholder="Start Typing Your Search"/>
                            <i className="fa fa-search"></i>
                        </div>
                        <p>or choose a category to quickly find the help you need</p>
                        
                        </div>
                        <div className="col-md-6">
                        <img src="/images/help.svg" className="w-100" alt=""/>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="HelpFAQ SectionPadding">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* <div className="section-title text-center">
                            <h2>Our offers</h2>
                            <p className="mb-1">Safety and professionalism are our cornerstones.</p>
                            <p>Click below to see how we are different.</p>
                        </div> */}
                        </div>
                        <div className="col-md-12 mb-5">
                        <div className="tabs-buttons">
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn active">For Riders</button>
                            <button type="button" className="btn">For Drivers</button>
                            <button type="button" className="btn">For Investors</button>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <ul className="helpcenterUL">
                                    <li>Rider request</li>
                                    <li className="active">Charges and fees</li>
                                    <li>Pick and ride type</li>
                                    <li>After rides</li>
                                    <li>Ride fare</li>
                                </ul>
                            </div>
                        <div className="col-md-8">
                        <Accordion defaultActiveKey="0" className="HelpCenterAccordian">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" >
                                    I was charged incorrectly
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    <p>Here are some common reasons riders believe they were overcharged for a ride. Check to see if any of these situations may have applied to your ride:</p>
                                    <strong>Higher price than expected</strong>
                                    <p>Riders may see higher ride costs when there’s more demand for rides. If your upfront price was higher than expected, it might have been busier than usual. Learn more about price calculations.</p>
                                    <strong>Poor route</strong>
                                    <p>Drivers are encouraged to use GPS to navigate to your destination, but are allowed to take alternate routes to avoid construction, blocked roads, or heavy traffic when necessary. If you believe a more efficient route was available, let us know and we’ll review your ride.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" >
                                Overcharged for my ride
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>Here are some common reasons riders believe they were overcharged for a ride. Check to see if any of these situations may have applied to your ride:</p>
                                    <strong>Higher price than expected</strong>
                                    <p>Riders may see higher ride costs when there’s more demand for rides. If your upfront price was higher than expected, it might have been busier than usual. Learn more about price calculations.</p>
                                    <strong>Poor route</strong>
                                    <p>Drivers are encouraged to use GPS to navigate to your destination, but are allowed to take alternate routes to avoid construction, blocked roads, or heavy traffic when necessary. If you believe a more efficient route was available, let us know and we’ll review your ride.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2" >
                                Paid for a ride I didn’t take
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>Here are some common reasons riders believe they were overcharged for a ride. Check to see if any of these situations may have applied to your ride:</p>
                                    <strong>Higher price than expected</strong>
                                    <p>Riders may see higher ride costs when there’s more demand for rides. If your upfront price was higher than expected, it might have been busier than usual. Learn more about price calculations.</p>
                                    <strong>Poor route</strong>
                                    <p>Drivers are encouraged to use GPS to navigate to your destination, but are allowed to take alternate routes to avoid construction, blocked roads, or heavy traffic when necessary. If you believe a more efficient route was available, let us know and we’ll review your ride.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3" >
                                Cancel or no-show fee
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <p>Here are some common reasons riders believe they were overcharged for a ride. Check to see if any of these situations may have applied to your ride:</p>
                                    <strong>Higher price than expected</strong>
                                    <p>Riders may see higher ride costs when there’s more demand for rides. If your upfront price was higher than expected, it might have been busier than usual. Learn more about price calculations.</p>
                                    <strong>Poor route</strong>
                                    <p>Drivers are encouraged to use GPS to navigate to your destination, but are allowed to take alternate routes to avoid construction, blocked roads, or heavy traffic when necessary. If you believe a more efficient route was available, let us know and we’ll review your ride.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4" >
                                Credit or discount didn’t apply
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>Here are some common reasons riders believe they were overcharged for a ride. Check to see if any of these situations may have applied to your ride:</p>
                                    <strong>Higher price than expected</strong>
                                    <p>Riders may see higher ride costs when there’s more demand for rides. If your upfront price was higher than expected, it might have been busier than usual. Learn more about price calculations.</p>
                                    <strong>Poor route</strong>
                                    <p>Drivers are encouraged to use GPS to navigate to your destination, but are allowed to take alternate routes to avoid construction, blocked roads, or heavy traffic when necessary. If you believe a more efficient route was available, let us know and we’ll review your ride.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </div>
                    
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HelpCenter
