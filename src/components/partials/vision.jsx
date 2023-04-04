import React from "react";
import Nav from "../partials/nav";

import About from "./about";
import vision from "../../images/vision.jpg";
import Footer2 from "./footer2";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
 

const Vision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
       <title>  Vision </title>
        <meta name="description" content=" this is vision page" />
 </Helmet>
      <Nav></Nav>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="about-intro tweak">ABOUT US</h6>
            <h3 className="about-header">Vision</h3>
            <p className="about-body">
              Bringing new insight for your financial freedom.
            </p>
          </div>

          <div className="col-md-6">
            <img src={vision} className="img-fluid vision-img" alt="vision" />
          </div>
        </div>
      </div>

      <About></About>
      <Footer2></Footer2>
    </div>
  );
};

export default Vision;
