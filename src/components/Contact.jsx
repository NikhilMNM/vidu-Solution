import React from "react";

function Contact() {
  return (
   <>
    <div className="contact mb-4 padt" style={{paddingTop:'12%'}}>
    <div className="home-container">
        <div className="row">
            <div className="col-md-6">
                <img src="images/contactpic.png" alt="" width="100%" />
            </div>
            <div className="col-md-6">
                <form >
                    <input type="text" placeholder="NAME *" required/><br />
                    <input type="email" placeholder="EMAIL *" required/><br />
                    <input type="tel" placeholder="MOBILE *" required/><br />
                    <label className="mt-3" for="service">SERVICES</label><br />
                    <div className="row  mt-3 inputsradio">
                        <div className="col-md-6  pb-2">
                            <input type="radio"/>
                            <label for="">WEB APPLICATION DEVELOPMENT</label>
                        </div>
                        <div className="col-md-6">
                            <input type="radio"/>
                            <label for="">MOBILE APP DEVELOPMENT</label>
                        </div>
                        <div className="col-md-6 pb-2">
                            <input type="radio"/>
                            <label for="">E-COMMERCE</label>
                        </div>
                        <div className="col-md-6">
                            <input type="radio"/>
                            <label for="">CONTENT MANAGEMENT</label>
                        </div>
                        <div className="col-md-6  pb-2">
                            <input type="radio"/>
                            <label for="">IT Consultaning</label>
                        </div>
                        <div className="col-md-6">
                            <input type="radio"/>
                            <label for="">SAP</label>
                        </div>
                    </div>
                    <textarea  placeholder="SUBJECT" rows="4" cols="40" required></textarea><br /><br />
                    <a className="a-submit" href="#">SUBMIT <i className="bi bi-arrow-right-circle-fill"></i></a>
                </form>
            </div>
        </div>
    </div>


</div>

</>
  );
}

export default Contact;