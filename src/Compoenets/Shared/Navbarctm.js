import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import {Modal,Container ,Nav , Navbar} from 'react-bootstrap'
import 'react-phone-input-2/lib/bootstrap.css'
// import $ from 'jquery'
import logo from '../../assets/images/logo.svg'
export class Navbarctm extends Component {
    componentDidMount(){
        window.onscroll = function() {
            var nav = document.getElementById('navbar');
            if ( window.pageYOffset > 50 ) {
                nav.classList.add("bg-white");
            } else {
                nav.classList.remove("bg-white");
            }
        }
        // var currentpath = window.location.pathname
        // console.log(currentpath)
        // if(currentpath === "/Home"){
        //     console.log('this path')
        // }

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
                {/* <nav className="navbar navbar-expand-lg  fixed-top" id="navbar">
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
                </nav> */}

                <Navbar fixed="top" expand="lg" id="navbar">
                    <Container>
                    <Navbar.Brand >
                    <Link to="/Home" className="navbar-brand" >
                            <img src="/images/logo.svg"/>
                            </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {/* <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link> */}
                                <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link  to="/Contact"   className={
                          this.isPathActive("/Contact")
                            ? "nav-link active"
                            : "nav-link"
                        } >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/HelpCenter"  className={
                          this.isPathActive("/HelpCenter")
                            ? "nav-link active"
                            : "nav-link"
                        } >Help Center</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-theme " onClick={()=>{this.handelModal()}}  type="submit">Login</button>
                            </li>
                            </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
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
    isPathActive(path) {
        return this.props.location.pathname.startsWith(path)
         
      }
}

export default withRouter(Navbarctm)

