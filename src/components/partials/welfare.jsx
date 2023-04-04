import React from "react";
import Nav from "../partials/nav";

import donate from "../../images/donate.png";
import donate2 from "../../images/2.png";
import donate3 from "../../images/3.jpg";
import Footer2 from "./footer2";
import { useEffect } from "react";

const Welfare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="about-intro tweak"> </h6>
            <h3 className="about-header">Welfare Donations</h3>
            <p className="about-body welfare-text">
              Please, join us in sponsoring orphans and the homeless children in
              Africa by donating to this noble and God-inspired course.
            </p>
            <p className="about-intro welfare-text">
              You can donate Eda Token, BNB Smartchain (BEP20) or USDT
              Smartchain (BEP20) to Welfare wallet address:
              <br />
              <br />
              <span className="wallet-address welfare-text">
                0xd08C7af87c2a25cc650610427B6e59Fec58484D8
              </span>
            </p>
            <p className="about-body welfare-text">
              God bless you for helping the poor child to feed and go to school.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src={donate}
              className="img-fluid donate vision-img"
              alt="vision"
            />
          </div>
          <div className="space"></div>
        </div>
        <div className="row">
          <>
            <h3
              class="main-heading video-header"
              style={{ marginBottom: "30px" }}
            >
              Recent Welfare Events
            </h3>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={donate2}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={donate}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={donate3}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>
          </>

          <div className="space"></div>
          <div className="space"></div>
        </div>
      </div>
      {/* <About></About> */}
      <Footer2></Footer2>
    </div>
  );
};

export default Welfare;
