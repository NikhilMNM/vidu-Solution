import { NavLink } from "react-router-dom";
import React, { useState } from 'react';


function Portfolio() {
const [selectedFilter, setSelectedFilter] = useState('');

const images = [
  {
     id: 1,
    category: 'DESIGNING',
    url: 'images/ser1.png',
    title: 'Web Development',

 },

  {
     id: 2,
    category: 'DEVELOPMENT', 
    url: 'images/ser1.png',
    title: 'Web Development',

 },

  {
     id: 3, 
     category: 'SAP ARIBA', 
     url: 'images/ser1.png',
     title: 'Web Development',
     
    },

  { 
    id: 4, 
    category: 'SAP BASIS', 
    url: 'images/ser1.png',
    title: 'Web Development',
 
},

  { 
    id: 5, 
    category: 'SAP BPC', 
    url: 'images/ser1.png',
    title: 'Web Development',
 
},

  { 
    id: 6, 
    category: 'DESIGNING', 
    url: 'images/ser1.png',
    title: 'Web Development',
 
},

  { 
    id: 7,
    category: 'DEVELOPMENT', 
    url: 'images/ser1.png',
    title: 'Web Development',
 
},

  { 
    id: 8, 
    category: 'SAP BPC', 
    url: 'images/ser1.png',
    title: 'Web Development',
 
},
  // Add more image objects as needed
];

function handleFilterClick(filter) {
  setSelectedFilter(filter);
}

const filteredImages = selectedFilter
  ? images.filter(image => image.category === selectedFilter)
  : images;
      
      
return (
    <>
    
   <div className=" home-container padt" style = {{paddingTop:'12%'}}>
    <h1><strong>PORTFOLIO</strong></h1>
    <div class = "row mt-3 mb-4 button-group filter-button-group">
            <div class = "col product-flex justify-content-center">
              
                <button onClick={() => handleFilterClick('')} class = "btn filterbtn mx-1 text-dark mt-2">All</button>
          <button onClick={() => handleFilterClick('DESIGNING')} class = "btn filterbtn mx-1 text-dark mt-2">DESIGNING</button>
          <button onClick={() => handleFilterClick('DEVELOPMENT')} class = "btn filterbtn mx-1 text-dark mt-2">DEVELOPMENT</button>
          <button onClick={() => handleFilterClick('SAP ARIBA')} class = "btn filterbtn mx-1 text-dark mt-2">SAP ARIBA</button>
          <button onClick={() => handleFilterClick('SAP BASIS')} class = "btn filterbtn mx-1 text-dark mt-2">SAP BASIS</button>
          <button onClick={() => handleFilterClick('SAP BPC')} class = "btn filterbtn mx-1 text-dark mt-2">SAP BPC</button>
          <button onClick={() => handleFilterClick('SAP BW')} class = "btn filterbtn mx-1 text-dark mt-2">SAP BW</button>
          <button onClick={() => handleFilterClick('SAP SECURITY')} class = "btn filterbtn mx-1 text-dark mt-2">SAP SECURITY</button>

            </div>
        </div>
        <div className="row">
        
          {filteredImages.map(image => (
              <div className="col-md-4 mt-2 mb-4">

            <div className="card ">
                            <img src={image.url} alt="" width="100%"/>
                              <div className="row">
                                  <div className="col-md-9 mt-4">
                                      <h5><strong>{image.title}</strong></h5>
                                  </div>
                                  <div className="col-md-3 ">
                                    <i className="bi bi-arrow-right-circle-fill"></i>
                                  </div>
                              </div>
                            </div>
              </div>
          
          ))}
        
          
        </div>

        <div className="row portfolio mb-3 mt-5">
          <div className="col-md-8">
            <h5>Get a free quote for SAP Ariba Buying and Invoicing, SAP BPC, 
              SAP GRCA Security, SAP All Modules, ERP, Web design development, and Mobile app creation.</h5>
          </div>
          <div className="col-md-4">
          <NavLink to="/Service" className='a-get'>GET QUOTE <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
          </div>
        </div>
   </div>
    </>
    );
}
export default Portfolio;