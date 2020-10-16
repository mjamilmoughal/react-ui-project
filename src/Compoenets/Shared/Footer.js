import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-top">
                <div className="row">
                    <div className="col-md-5"><img src="/images/logo-footer.svg"/></div>
                    <div className="col-md-2">
                    <ul className="list-group border-0">
                        <li className="list-group-item border-0 menu-heading">Support</li>
                        <li className="list-group-item border-0 menu-value"><a href="#">Help Center</a></li>
                        <li className="list-group-item border-0 menu-value"><a href="#">Contact</a></li>
                    </ul>
                    </div>
                    <div className="col-md-2">
                    <ul className="list-group border-0">
                        <li className="list-group-item border-0 menu-heading">Download</li>
                        <li className="list-group-item border-0 menu-value"><a href="#">Android</a></li>
                        <li className="list-group-item border-0 menu-value"><a href="#">IOS</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <ul className="list-group border-0">
                        <li className="list-group-item border-0 menu-heading">Subscribe to our newsletter</li>
                        <li className="list-group-item border-0 menu-value"><a href="#">Receive our latest news and 
                        promotions in your inbox!</a></li>
                        <li className="list-group-item">
                        <div className="newletter">
                            <input type="text" className="form-control" placeholder="Your Email Address"/>
                            <i className="fa fa-long-arrow-right"></i>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="footer-bottom py-3">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0">&copy; 2020 Sage Alliance Inc.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="text-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/PrivacyPolicy">Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Terms of Use</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer
