import React, { Component } from 'react'

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
                        <div className="section-title text-center">
                            <h2>Our offers</h2>
                            <p className="mb-1">Safety and professionalism are our cornerstones.</p>
                            <p>Click below to see how we are different.</p>
                        </div>
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
                    
                    </div>
                </section>
            </div>
        )
    }
}

export default HelpCenter
