import React from "react";
import Nav from "../partials/nav";
import { useEffect } from "react";

import { Chrono } from "react-chrono";
import Footer2 from "../partials/footer2";
import checkOutline from "../../images/checkOutline.svg";
import check from "../../images/check.svg";

const Roadmap = () => {
  const data = [
    {
      title: "May to August 2021",
      cardTitle: "Conceptualization Phase",
      url: "http://google.com",
      cardSubtitle: "",

      cardDetailedText: (
        <ul className="time-line">
          <li>
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Vision Reception
          </li>
          <li>
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Production of Litepaper{" "}
          </li>
          <li>
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Branding
          </li>
          <li>
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Company Registration
          </li>
        </ul>
      ),
    },
    {
      title: "September 2021",
      cardTitle: "Partnership Formation",
      url: "http://google.com",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Formation of Project Team
          </li>
        </ul>
      ),
    },
    {
      title: "October 2021",
      cardTitle: "Seed Phase",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Initial fund raising from private individuals
          </li>
        </ul>
      ),
    },
    {
      title: "November to December 2021",
      cardTitle: "Project Structural Layout",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Outline of project structure
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Commencement of project building
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Launching of School of Cryptos of EDA Academy, which is the 8th
            Component
          </li>
        </ul>
      ),
    },
    {
      title: "January to February 2022",
      cardTitle: "Website Construction",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Commencement of marketing
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Release of Eda Token Lite Paper
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Integration of Digital Clinic, which is the 9th Component
          </li>
        </ul>
      ),
    },
    {
      title: "March to April 2022",
      cardTitle: "Creation of Eda Token",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Building of Token contracts
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Unveiling of Eda Token White Paper
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Intensive Marketing
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Audit of token contracts
          </li>
        </ul>
      ),
    },
    {
      title: "May 2022",
      cardTitle: "Launching of EdaFace’s Components 1 to 3 ",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Launching of Eda Token
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Launching of some Compartments of Component 1
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Launching of Spot and Derivative Listing Platforms of Component 2
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Launching of Dex Listing Platform of Component 3
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            EDA Week Celebration
          </li>
        </ul>
      ),
    },
    {
      title: "June to July 2022",
      cardTitle: "Completion of Divisions",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Completion of all divisions of Launchpad, which is part of Component
            2
          </li>
          <li>
            {" "}
            <img
              src={checkOutline}
              className="img-fluid check-push"
              alt="check"
            />
            Completion of EdaFace Newsfeed Platform, which is part of Component
            8
          </li>
        </ul>
      ),
    },
    {
      title: "August to October 2022",
      cardTitle: "Further Development",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Construction of Crypto Verification Centre, which is Component 4
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Construction of Peer-to-Peer Trading Platform of Component 1
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Restructuring of the School of Cryptos of Eda Academy, which is
            Component 8
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Intensive Marketing.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Listing of Eda Token.
          </li>
        </ul>
      ),
    },
    {
      title: "November 2022",
      cardTitle: "Construction of NFT Marketplace",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Commencement of Staking of Eda Token
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Launching of NFT Marketplace, which is Component 5
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Further listing of Eda Token on Dex and Cex, e.g. Coinmarketcap,
            Coingecko, etc.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Intensive Marketing
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Recruitment of more staff.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Launching of Digital Clinic, which is Component 9.
          </li>
        </ul>
      ),
    },
    {
      title: "December 2022",
      cardTitle: "Construction of Components 6 and 7",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Launching of Digital Literature Reflector, which is Component 6
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Launching of the Digital Mall, which is Component 7
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Continuous marketing.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Further listing of Eda Token on Dex and Cex, e.g. Binance, etc.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Commencement Eda Plantation construction
          </li>
        </ul>
      ),
    },
    {
      title: "Road Map for 2023",
      cardTitle: "Planned for 2023",
      url: "",
      cardSubtitle: ``,
      cardDetailedText: (
        <ul className="time-line">
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            January 2023: Commencement of EDA Blockchain Construction
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Launching of the Digital Mall, which is Component 7
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            January 2023: Website Redesigning to meet the four characteristics
            of EdaFace.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            June 2023: Completion of First Phase of EDA Blockchain
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            More intense marketing.
          </li>
          <li>
            {" "}
            <img src={check} className="img-fluid check-push" alt="check" />
            Continuation of further construction of EDA Blockchain (specific
            timeline will be released).
          </li>
        </ul>
      ),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="token-bac pt-5">
        <div className="container">
          <div className="row mt-5">
            <h1
              className="token-header"
              style={{ textAlign: "center", fontSize: "30px" }}
            >
              EdaFace Roadmap
            </h1>
            <div
              className="roadmap-legend center"
              style={{ textAlign: "center" }}
            >
              {" "}
              <span className="center" style={{ marginRight: "20px" }}>
                <img
                  src={checkOutline}
                  className="img-fluid check-push"
                  alt="check"
                />
                Completed
              </span>
              <span className="center">
                <img src={check} className="img-fluid check-push" alt="check" />
                Pending
              </span>
            </div>
            <div className="timeline">
              <Chrono
                items={data}
                useReadMore={false}
                // Theming for timeline
                theme={{
                  primary: "#0f52ba",
                  secondary: "#0dcaf0",
                  cardBgColor: "#fff",
                  cardForeColor: "#fff",
                  titleColor: "#0f52ba",
                  titleColorActive: "#fff",
                }}
                mode="VERTICAL"
                buttonTexts={{
                  first: "Jump to First",
                  last: "Jump to Last",
                  next: "Next",
                  previous: "Previous",
                }}
                slideShow
                enableOutline
              />
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Roadmap;
