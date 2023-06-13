import React from "react";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Home() {
    const teamMembers = [
        {
          title: 'WEB APPLICATION DEVELOPMENT',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
          image: 'images/web.svg',
        },
        {
          title: 'MOBILE APP DEVELOPMENT',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
          image: 'images/mobile.svg',
        },
        {
          title: 'E-COMMERCE',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
          image: 'images/ecommerce.svg',
        },
        {
          title: 'CONTENT MANAGEMENT',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
          image: 'images/content.svg',
        },
        // Add more team members here
      ];
      const PrevArrow = (props) => (
        <button {...props} className="slick-arrow slick-prev">
          Previous
        </button>
      );
    
      const NextArrow = (props) => (
        <button {...props} className="slick-arrow slick-next">
          Next
        </button>
      );
      // Slider settings
      const sliderSettings = {
        dots: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Tablet breakpoint
            settings: {
              slidesToShow: 2, // Adjust the number of slides to show on tablets
            },
          },
          {
            breakpoint: 768, // Mobile breakpoint
            settings: {
              slidesToShow: 1, // Adjust the number of slides to show on mobile devices
            },
          },
        ],
      };
    
  return (
  
<div>
<div className="first">
    <div className="">
        <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
                <h1>Your pathway to success!</h1><br />
                <NavLink to="/Contact">CONTACT US <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
                <br /><br />
                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>150</h2>
                        <p>PROJECTS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>300</h2>
                        <p>REVIEWS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>250</h2>
                        <p>CLIENTS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>120</h2>
                        <p>AWARDS</p>
                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
</div>
<div className="second mb-1">
    <div className="home-container">
        <div className="row">
            <div className="col-md-7">
                <h6>WHO WE ARE</h6><br />
                <h3>A one-stop IT Consultancy solutions for smart spend management and business transformation..</h3>
                <p>Vidu Solutions is recognized as a competent SAP sales and service partner, capable of responding promptly while ensuring stability. We provide services for SAP products such as S/4HANA, Ariba, GRC, BPC, BW, BASIC, GRCA Security, and Success factors. With our knowledge and expertise, we are able to provide our clients with the fastest deployment periods and unrivalled ROI.</p>
                <br />
                <NavLink to="/About">KNOW MORE <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
                <br /><br />
            </div>
            <div className="col-md-5 imgpad">
                <img src="images/secondimg.png" width="100%" alt=""/>
            </div>
        </div>
    </div>
</div>
<div className="third ">
  <div className="home-container">
  <div className="row">
        <div className="col-md-7">
            <h6>WHAT WE DO</h6>
            <p>Our consultants can assist you in maximizing the potential of your purchase and invoicing, ERP, software web application, and mobile application solutions. We have extensive industry experience and expertise in software solutions, and we can give the assistance and support you require to meet your objectives. Our consultation, implementation, support and optimization services are designed to get you up and running quickly while also aligning your people and processes with your platform. By combining these three strands of your Buying-and-Invoicing process, we can help you cut purchasing expenses while increasing control, compliance and performance.</p>

        </div>
        <div className="col-md-5">
           <div className="third-side">
           <h5>Get a free quote for SAP Ariba Buying and Invoicing, SAP BPC, SAP GRCA Security, SAP All Modules, ERP, Web design development, and Mobile app creation</h5>
           <br /> <NavLink to="/Portfolio">GET QUOTE <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
           </div>

        </div>
    </div>
  </div>
</div>

<div className="slider-part mb-5">
    <div className="home-container">
        {/* <div className="owl-carousel">
            <div className="item">
                <img src="images/web.svg"  alt=""/> <br />
                <h5>WEB APPLICATION DEVELOPMENT</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                <a href="#">EXPLORE MORE <i className="bi bi-arrow-right"></i></a>
            </div>
            <div className="item">
                <img src="images/mobile.svg" style={{width:'8%'}} alt=""/> <br />
                <h5>MOBILE APP DEVELOPMENT</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                <a href="#">EXPLORE MORE <i className="bi bi-arrow-right"></i></a>
            </div>
            <div className="item">
                <img src="images/ecommerce.svg"  alt=""/> <br />
                <h5>E-COMMERCE</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                <a href="#">EXPLORE MORE <i className="bi bi-arrow-right"></i></a>
            </div>
            <div className="item">
                <img src="images/content.svg"  alt=""/> <br />
                <h5>CONTENT MANAGEMENT</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                <a href="#">EXPLORE MORE <i className="bi bi-arrow-right"></i></a>
            </div>
           
        </div> */}
         <Slider {...sliderSettings}>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <img src={member.image} alt={member.name}  /><br />
          <h5>{member.title}</h5>
          <p>{member.desc}</p>
          <a href="#">EXPLORE MORE <i className="bi bi-arrow-right"></i></a>
        </div>
      ))}
    </Slider>

    </div>
</div>
<div className="fourth">
    <div className="home-container">
        <div className="row">
            <div className="col-md-6">
                <img src="images/fourthpic.png" alt="" width="100%"/>
            </div>
            <div className="col-md-6">
                <h6>WHY CHOOSE US</h6> <br />
                <p>We work closely with you to understand your business processes, identify areas for improvement, and develop solutions that are both efficient and effective. Here are few criteria to help you choose us:</p>
                <br />
                <div className="row">
                    <div className="col-md-1"><i className="bi bi-stopwatch"></i></div>
                    <div className="col-md-11">
                        <h6>QUICK RESPONSE</h6>
                        <p>Solve customer support tickets via web, email, phone, SMS and social media— all in one place.</p>
                    </div>
                    <div className="col-md-1">
                    <i className="bi bi-hand-thumbs-up"></i>
                    </div>
                    <div className="col-md-11">
                        <h6>100% SATISFACTION</h6>
                        <p>We offer the greatest service and assistance to our customers for 24/7 throughout the year.</p>
                    </div>
                    <div className="col-md-1">
                    <i className="bi bi-gear"></i>
                    </div>
                    <div className="col-md-11">
                        <h6>CREATIVE SERVICE</h6>
                        <p>We always believe in adopting new technologies to solve the customer’s problems.</p>
                    </div>
                </div><br />
                <NavLink className="a-service" to="/Service">OUR SERVICES <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
                <NavLink className="a-contact" to="/Contact">CONTACT US <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
            </div>
        </div>
    </div>
</div>

<div className="fifth">
    <div className="home-container">
        <h6>OUR SPECIAL FEATURE</h6>
        <div className="row mt-5">
            <div className="col-md-2">
                <img src="images/f1.svg" alt=""/>
            </div>
            <div className="col-md-4">
                <h6>ECONOMIC POLICY</h6>
                <p>We are the world’s fastest-growing IT Company. Over the last decade, Vidu Solutions has grown at an exponential rate.</p>
            </div>

            <div className="col-md-2">
                <img src="images/f2.svg" alt=""/>
            </div>
            <div className="col-md-4">
                <h6>BUSINESS MODEL</h6>
                <p>As digital entrepreneurs, our ultimate goal is to establish a profitable business model from a stable and well-tested business concept.</p>
            </div>

            <div className="mt-5 col-md-2">
                <img src="images/f3.svg" alt=""/>
            </div>
            <div className="mt-5 col-md-4">
                <h6>SECURITY PROTECTION</h6>
                <p>Being accountable and responsible for customer data privacy and policy are important components of our security model.</p>
            </div>

            <div className="mt-5 col-md-2">
                <img src="images/f4.svg" alt=""/>
            </div>
            <div className="mt-5 col-md-4">
                <h6>NICE COMMUNICATION</h6>
                <p>To deliver strong, unambiguous messages regarding strategy, customer service, and branding in business, communication is crucial. Our company creates a brand communication which is consistent and exclusive to its target market.</p>
            </div>

            <div className="mt-2 col-md-2">
                <img src="images/f5.svg" alt=""/>
            </div>
            <div className="mt-2 col-md-4">
                <h6>DIGITAL STRATEGY</h6>
                <p>For the finest digital marketing strategy for our clients, our team uses a variety of digital channels to develop and analyse campaigns, content, and strategy.</p>
            </div>

            <div className="mt-2 col-md-2">
                <img src="images/f6.svg" alt=""/>
            </div>
            <div className="mt-2 col-md-4">
                <h6>CONSULTATION</h6>
                <p>We provide 100% free consultation on call, text, or email. To help you completely with our services we would like to learn everything there is to know about it.</p>
            </div>
        </div>
    </div>
</div>

<div className="sixth mt-3 mb-3">
    <div className="home-container">
        <div className="row bgimg">
            <div className="col-md-7"></div>
            <div className="col-md-5 pb-5 pt-3">
                <h2>HAVE A QUESTION, NEED ASSISTANCE OR JUST MEET FOR A COFFEE</h2><br />
                <NavLink className="a-contact" to="/Contact">CONTACT US <i className="bi bi-arrow-right-circle-fill"></i></NavLink>
            </div>
        </div>
    </div>
</div>
</div>

  );
}

export default Home;