import React from "react";
import Nav from "../partials/nav";

import about from "../../images/about.png";
import core from "../../images/core.png";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";
import Footer2 from "./footer2";
import { useEffect } from "react";

const Core = () => {
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
            <h3 className="about-header">Core Values</h3>
            <p className="about-body-m">
              To fulfill its vision, EdaFace is committed to the following core
              values:
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Creativity
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Excellence
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Passion
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Integrity
            </p>
            <p className="about-body-m">
              <img
                src={bookmark}
                className="img-fluid check-push"
                alt="check"
              />
              Transparency
            </p>
          </div>

          <div className="col-md-6">
            <img src={core} className="img-fluid vision-img" alt="core" />
          </div>
        </div>
      </div>

      <div className="about-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={about} className="img-fluid about" alt="about" />
            </div>
            <div className="col-lg-6">
              <h6 className="about-intro">Characteristics of EdaFace</h6>
              <h3 className="about-header">
                EdaFace has four main characteristics:
              </h3>
              <h6 className="about-body-x">
                <sup>1</sup>Beautiful design
              </h6>
              <p className="about-body-m">
                EdaFace has a modern, beautiful design outlook that makes
                interaction on the platform quite friendly and welcoming.
              </p>

              <h6 className="about-body-x">
                <sup>2</sup>Decentralisation
              </h6>
              <p className="about-body-m">
                EdaFace is a fully DECENTRALISED structure, meaning there is no
                central authority to censor your crypto trading. This is in
                keeping with the key feature of cryptos that eliminates
                centralization.
              </p>

              <h6 className="about-body-x">
                <sup>3</sup> Security
              </h6>
              <p className="about-body-m">
                EdaFace platform is safe, secure and reliable. It has one of the
                world’s most sophisticated security systems.
              </p>

              <h6 className="about-body-x">
                <sup>4</sup> Simplicity
              </h6>
              <p className="about-body-m">
                In addition, EdaFace is simple and easily navigable by anyone.
                As such, both newcomers and experienced users in the crypto
                industry will enjoy the ease of using cryptocurrencies on
                EdaFace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Core;
