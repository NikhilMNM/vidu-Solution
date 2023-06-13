import React from "react";
import { NavLink } from "react-router-dom";
function Serivce() {

    return (
        <>
        <div style = {{paddingTop:'12%'}}>
            <div className="home-container">
                <h1><strong>OUR SERVICES</strong></h1>

                    <div className="row mt-3 mb-5">
                
                        <div className="col-md-4 mt-4">
                        
                           <div className="card">
                           <img src="images/ser1.png" alt="" width="100%"/>
                            <div className="row">
                                <div className="col-md-9 mt-4">
                                    <h5><strong> WEB APPLICATION DEVELOPMENT</strong></h5>
                                </div>
                                <div className="col-md-3 ">
                                  <i className="bi bi-arrow-right-circle-fill"></i>
                                </div>
                            </div>
                           </div>
                        
                        </div>
                       
                        <div className="col-md-4 mt-4">
                        
                           <div className="card">
                           <img src="images/ser2.png" alt="" width="100%"/>
                            <div className="row">
                                <div className="col-md-9 mt-4">
                                    <h5><strong> MOBILE APP DEVELOPMENT</strong></h5>
                                </div>
                                <div className="col-md-3 ">
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                </div>
                            </div>
                           </div>
                    
                    
                        </div>
                        

                       
                       


                        <div className="col-md-4 mt-4">
                            
                            <div className="card">
                            <img src="images/ser4.png" alt="" width="100%"/>
                            <div className="row">
                                <div className="col-md-9 mt-4">
                                    <h5><strong> CONTENT MANAGEMENT</strong></h5>
                                </div>
                                <div className="col-md-3 ">
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                </div>
                            </div>
                            </div>
                    
                    
                        </div>
                        <div className="col-md-4 mt-4">
                        
                        <div className="card">
                        <img src="images/ser3.png" alt="" width="100%"/>
                        <div className="row">
                            <div className="col-md-9 mt-4">
                                <h5><strong> E-COMMERCE</strong></h5>
                            </div>
                            <div className="col-md-3 ">
                            <i className="bi bi-arrow-right-circle-fill"></i>
                            </div>
                        </div>
                
                        </div>
                
                    </div>
                        


                        <div className="col-md-4 mt-4">
                            
                        <div className="card">
                        <img src="images/ser5.png" alt="" width="100%"/>
                            <div className="row">
                                <div className="col-md-9 mt-4">
                                    <h5><strong> IT CONSULTING</strong></h5>
                                </div>
                                <div className="col-md-3 ">
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                </div>
                            </div>
                        </div>
                    
                    
                        </div>
                        

                        <div className="col-md-4 mt-4">
                            
                            <div className="card">
                            <img src="images/ser6.png" alt="" width="100%"/>
                            <div className="row">
                                <div className="col-md-9 mt-4">
                                    <h5><strong> SAP</strong></h5>
                                </div>
                                <div className="col-md-3 ">
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                </div>
                            </div>
                            </div>
                    
                    
                        </div>
                        
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-4">
                            
                        <div className="card">
                        <img src="images/ser7.png" alt="" width="100%"/>
                            <div className="row">
                                <div className="col-md-9 mt-4">
                                    <h5><strong> SAP ARIBA</strong></h5>
                                </div>
                                <div className="col-md-3 ">
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                </div>
                            </div>
                        </div>
                    
                    
                        </div>
                        
                        <div className="col-md-4 mt-4">
                            
                            <div className="card">
                            <img src="images/ser8.png" alt="" width="100%"/>
                                <div className="row">
                                    <div className="col-md-9 mt-4">
                                        <h5><strong> SAP BW</strong></h5>
                                    </div>
                                    <div className="col-md-3 ">
                                    <i className="bi bi-arrow-right-circle-fill"></i>
                                    </div>
                                </div>
                            </div>
                        
                        
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="mb-5 text-center mt-5">
                        <NavLink className="a-service" to="/About">KNOW ABOUT US <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
                        <NavLink className="a-contact" to="/Contact">CONTACT US <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
                    </div>
            </div>    
                
        </div>

          
        </>

    );
}
export default Serivce;