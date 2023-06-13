import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
   <>
<div className="fourth mb-4" style = {{paddingTop:'12%'}}>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="images/aboutpic.png" alt="" width="100%"/>
            </div>
            <div className="col-md-6">
                
            <h1 style={{fontSize:'9vh',fontWeight:'bold'}} >Empowering you to excel</h1>
            <p>As Vidu Solutions is a reputable IT consulting firm that specializes in various areas, including smart spend management, procurement, supply chain, outsourced workforce management and business transformation. As a company we provide expert consultation, support services, and simplified implementation for companies in different industries, such as IT and oil and gas, software product engineering, pharma-life sciences, manufacturing, and automotive.</p><p> We provide services for SAP products such as S/4HANA, Ariba, GRC, BPC, BW, BASIC, GRCA Security, and Success factors. With our knowledge and expertise, we are able to provide our clients with the fastest deployment periods and unrivalled ROI. Our specialized services in different areas of IT consultancy make them an ideal choice for companies in different industries.</p><p> We have delivered services successfully through our locations in the United States of America, the Middle East & Germany.</p>
            <br />
                <NavLink className="a-service" to="/Service">OUR SERVICES <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
                <NavLink className="a-contact" to="/Contact">CONTACT US <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
            </div>
        </div>
    </div>
</div>
   </>
  );
}

export default About;