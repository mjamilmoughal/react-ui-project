import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import {Modal, ModalDialog  , ModalHeader , ModalTitle , ModalBody , ModalFooter, Button } from 'react-bootstrap'
import $ from 'jquery'
import logo from '../../assets/images/logo.svg'
export class Navbar extends Component {
    componentDidMount(){
        window.onscroll = function() {
            var nav = document.getElementById('navbar');
            if ( window.pageYOffset > 50 ) {
                nav.classList.add("bg-white");
            } else {
                nav.classList.remove("bg-white");
            }
        }
    };
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
            <div className="banner">
                <nav className="navbar navbar-expand-lg  fixed-top" id="navbar">
                    <div className="container">
                        <Link to="/" className="navbar-brand" >
                        <img src="/images/logo.svg"/>
                        </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/HelpCenter" >Help Center</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-theme " onClick={()=>{this.handelModal()}}  type="submit">Login</button>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered className="loginModal">
                    <Modal.Body className="p-5">
                        <button className="closePopup" onClick={()=>{this.handelModal()}}><i className="fa fa-times"></i></button>
                        <h2>Investor</h2>
                        <h3>We are open to suggestions</h3>
                        <PhoneInput
                            country={'us'}
                            value={this.state.phone}
                            onChange={phone => this.setState({ phone })}
                            />
                        {/* <div className="form-group">
                                <input class="form-control" type="text" placeholder="Your Phone"/>
                            </div> */}
                            <button className="btn btn-theme btn-block">Next</button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Navbar

