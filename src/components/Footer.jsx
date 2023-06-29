import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <NavLink to="/"><img src="images/logo-2.svg" alt=""/></NavLink><br /><br />
                    <p>A professional team of industry experts is supported by a workforce that is obsessed with quality and timely delivery.</p>
                    <NavLink to="/About"><h5>ABOUT</h5></NavLink>
                    <NavLink to="/Portfolio"><h5>PORTFOLIO</h5></NavLink>
                </div>
                <div className="col-md-2">
                    <NavLink to="/Service"><h5>SERVICES</h5></NavLink>
                    <NavLink to="#">Web Application Development</NavLink><br />
                    <NavLink to="#">Mobile App Development </NavLink><br />
                    <NavLink to="#">E-commerce</NavLink><br />
                    <NavLink to="#">Content Management</NavLink><br />
                    <NavLink to="#">IT Consultaning</NavLink><br />
                    <NavLink to="#">SAP</NavLink><br />
                    <NavLink to="#">SAP ARIBA</NavLink><br />
                    <NavLink to="#">SAP BW</NavLink>
                </div>
                <div className="col-md-3">
                    
                    <NavLink to="/Contact"><h5>CONTACT</h5></NavLink>
                    <NavLink to="mailto:info@vidusolutions.com">info@vidusolutions.com</NavLink><br />
                    <NavLink to="tel:8322959666">(832) 295-9666</NavLink><br /><br />
                    <NavLink to="#">1500 S Dairy Ashford Rd Suite #320, Houston, TX 77077, United States.</NavLink>
                    <br /><br />
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                </div>
                <div className="col-md-4">
                    <h5>NEWS LETTER</h5>
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