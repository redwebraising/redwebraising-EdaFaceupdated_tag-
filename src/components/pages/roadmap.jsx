import React from "react";
import Footer2 from "../partials/footer2";
import Nav from "../partials/nav";
import { useEffect } from "react";
import roadmap from "../../images/roadmap.svg";

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cha-header">Road Map</h3>
              <p className="cha-sub-header">From 2021 to Present date</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              May to August 2021{" "}
              <span className="icon-floater cf">
                {" "}
                Conceptualization Phase{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample">
              <div class="disclaimer-card">
                <li>Vision Reception</li> <br></br>
                <li>Production of Litepaper</li> <br></br>
                <li>Branding</li> <br></br>
                <li>Company Registration</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              September 2021{" "}
              <span className="icon-floater cf">
                {" "}
                Partnership Formation{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample2">
              <div class="disclaimer-card">
                <li> Formation of Project Team</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              October 2021{" "}
              <span className="icon-floater cf">
                {" "}
                Seed Phase{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample3">
              <div class="disclaimer-card">
                <li> Initial fund raising from private individuals</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              November to December 2021{" "}
              <span className="icon-floater cf">
                {" "}
                Project Structural Construction{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample4">
              <div class="disclaimer-card">
                <li>Outline of project structure</li>
                <li>Commencement of Project building</li>
                <li>
                  Beta Testing of Digital Clinic, which is the 9th Component of
                  EdaFace
                </li>
                <li>
                  Completion of the School of Cryptocurrencies, which is part of
                  the 8th Component of EdaFace
                </li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              January 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Creation of Eda Token{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample5">
              <div class="disclaimer-card">
                <li>Building of Token contracts</li>
                <li>Commencement of marketing</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              February 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Launching of Eda Token{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample6">
              <div class="disclaimer-card">
                <li>Audit of token contracts</li>
                <li>Unveiling of the White Paper</li>
                <li>Intensive Marketing</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample7"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              March to May 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Launching of EdaFace’s Components 1 to 4{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample7">
              <div class="disclaimer-card">
                <li>
                  Launching of Crypto Reflector and Cex Reflector, which are
                  EdaFace’s Components 1 and 2
                </li>
                <li>
                  Launching of Dex Reflector, which is EdaFace’s Component 3
                </li>
                <li>
                  Launching of Crypto Verification Centre, which is EdaFace’s
                  Component 4.
                </li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample8"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              June 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Listing of Eda Token{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample8">
              <div class="disclaimer-card">
                <li>Listing on Pancakeswap.</li>
                <li> Further development of EdaFace’s component</li>
                <li>Intensive Marketing</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample9"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              July and August 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Launching of 5th and 6th Components{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample9">
              <div class="disclaimer-card">
                <li>
                  Launching of NFT Marketplace, which is EdaFace’s Component 5
                </li>
                <li>
                  {" "}
                  Launching of Digital Literature Reflector, which is EdaFace’s
                  Component 6
                </li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample10"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              September 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Launching of 7th Component{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample10">
              <div class="disclaimer-card">
                <li>
                  Launching of the Digital Mall, which is EdaFace’s Component 7
                </li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample14"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              October 2022{" "}
              <span className="icon-floater cf">
                {" "}
                Eda Academy{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample14">
              <div class="disclaimer-card">
                <li>
                  Restructuring of Eda Academy, which is EdaFace’s Component 8
                </li>
                <li>Intense Marketing</li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample15"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              November and December 2022{" "}
              <span className="icon-floater cf">
                {" "}
                More Listing of Eda Token{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample15">
              <div class="disclaimer-card">
                <li>Continuous marketing.</li>
                <li>
                  Listing of Eda Token on CoinmarketCap, Coingecko, Binance,
                  etc.
                </li>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample16"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Road Map
              <span className="icon-floater cf">
                {" "}
                for 2023{" "}
                <img
                  src={roadmap}
                  className="img-fluid roadmap"
                  alt="roadmap"
                />
              </span>
            </h4>

            <div class="collapse" id="collapseExample16">
              <div class="disclaimer-card">
                <li>
                  January 2023: Hiring more professionals to administer EdaFace
                </li>
                <li>
                  Redesign EdaFace Website to meet the four characteristics of
                  EdaFace mentioned above.
                </li>
                <li>More intense marketing.</li>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Roadmap;
