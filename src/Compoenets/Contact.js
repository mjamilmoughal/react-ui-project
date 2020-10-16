import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <section className="contact-screen">
                <div className="owl-image">
                    <img src="/images/header-owl-shape.svg"/>
                </div>
                <div className="container h-100">
                <div className="row align-items-center h-100 justify-content-center">
                    <div className="col-md-5">
                    <div className="contact-form">
                        <h1>Please, Let Us Know<br></br>What’s Going On</h1>
                        <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Your Phone"/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                        <textarea className="form-control" id="" rows="5" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">I'm not Robot</label>
                        </div>
                        <button className="btn btn-theme btn-block">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Contact
