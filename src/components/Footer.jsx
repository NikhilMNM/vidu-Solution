import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <NavLink href="#"><img src="images/logo-2.svg" alt=""/></NavLink><br /><br />
                    <p>A professional team of industry experts is supported by a workforce that is obsessed with quality and timely delivery.</p>
                    <NavLink href="#">ABOUT</NavLink><br />
                    <NavLink href="#">PORTFOLIO</NavLink>
                </div>
                <div className="col-md-2">
                    <h3>SERVICES</h3>
                    <NavLink href="#">Web Application Development</NavLink><br />
                    <NavLink href="#">Mobile App Development </NavLink><br />
                    <NavLink href="#">E-commerce</NavLink><br />
                    <NavLink href="#">Content Management</NavLink><br />
                    <NavLink href="#">IT Consultaning</NavLink><br />
                    <NavLink href="#">SAP</NavLink><br />
                    <NavLink href="#">SAP ARIBA</NavLink><br />
                    <NavLink href="#">SAP BW</NavLink>
                </div>
                <div className="col-md-3">
                    <h3>CONTACT</h3>
                    <NavLink href="#">info@vidusolutions.com</NavLink><br />
                    <NavLink href="#">(832) 295-9666</NavLink><br /><br />
                    <NavLink href="#">1500 S Dairy Ashford Rd Suite #320, Houston, TX 77077, United States.</NavLink>
                    <br /><br />
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                </div>
                <div className="col-md-4">
                    <h3>NEWS LETTER</h3>
                    <p>A professional team of industry experts is supported by a workforce that is obsessed with quality and timely delivery.</p>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input type="submit" value="SUBSCRIBE"/>
                </div>
            </div>
        </div>
    </div>


        );
    }
    
    export default Footer;