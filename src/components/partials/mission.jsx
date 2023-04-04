import React from "react";
import Nav from "../partials/nav";

import About from "./about";
import mission from "../../images/mission2.png";
import bookmark from "../../images/bookmark.svg";
import Footer2 from "./footer2";
import { useEffect } from "react";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="about-intro tweak">ABOUT US</h6>
            <h3 className="about-header">Mission</h3>
            <p className="about-body-m">
              {" "}
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Provide a one-stop platform for a crypto user to access the crypto
              industry
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Simplify and make user-friendly all crypto transactions
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Increase rapid adoption of crypto as the currency of the emerging
              digital world
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Pioneer the digitalization process in Africa and across the globe
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Empower the user and his family financially
            </p>
          </div>

          <div className="col-md-6">
            <img src={mission} className="img-fluid vision-img" alt="mission" />
          </div>
        </div>
      </div>
      <About></About>
      <Footer2></Footer2>
    </div>
  );
};

export default Mission;
