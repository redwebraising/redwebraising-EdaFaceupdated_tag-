import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";

import antonella from "../../images/Antonella2.jpg";
import njoteh from "../../images/Njoteh.png";
import stuart from "../../images/stuart.jpg";
import linkedin from "../../images/linkedin.svg";
import peterson from "../../images/Peterson.png";
import tshepo from "../../images/tshepo.png";
import { Helmet } from "react-helmet";


const Directors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>sartaj board of director</title>
        <meta name="description" content="this is sartaj board" />
      </Helmet>
      <Nav></Nav>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cha-header">EDA Board of Advisors (BOA)</h3>
              <p className="cha-sub-header" style={{ textAlign: "left" }}>
                EDA Board of Advisors are made up of credible personalities with
                burning passion for cryptocurrencies and blockchain technology
                in general. They believe that the decentralised nature of
                cryptos is a tool to right injustices and economic inequalities.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={antonella}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Antonella Agricola</h4>
                <h6 className="found-pos">BOA Member</h6>
                <p className="found-desc">
                  Based in Italy, she is a Team Leader and a Sales Consultant
                  with expertise in direct sales, communication, retail trade,
                  customer care, and account management. She is a member of EDA
                  Board of Directors.
                </p>
                <a
                  href="https://www.linkedin.com/in/antonella-agricola-aa353b235"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={njoteh}
                  className="img-fluid profile-pic border border-dark rounded"
                  alt="profile"
                />
                <h4 className="found-name">Njoteh F. Albert</h4>
                <h6 className="found-pos">BOA Member</h6>
                <p className="found-desc">
                  Based in the United Kingdom, he is an International Affairs
                  Consultant and a legal analyst; a graduate in Leadership from
                  Gordon School of Business Affairs of the University of
                  Pretoria Business School as well as a human resource manager
                  in Arbitrator Fellow. A lawyer by profession with LLB and LLM
                  degrees and holds a doctorate in international relations. He
                  is a crypto enthusiast since 2019 and a member of EDA Board of
                  Directors.
                </p>
                <a
                  href="https://www.linkedin.com/in/albert-njoteh-944b61227/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={stuart}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Stuart Torr</h4>
                <h6 className="found-pos">BOA Member</h6>
                <p className="found-desc">
                  A South African crypto enthusiast. Believes crypto has a
                  bright future in the rapidly emerging Digital Age. He is a
                  member of EDA Board of Directors.
                </p>
                <a
                  href="https://www.linkedin.com/in/stuart-torr-736a56242/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={peterson}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Peterson Kimani</h4>
                <h6 className="found-pos">BOA Member</h6>
                <p className="found-desc">
                  An architect by profession and an astute businessman; he is
                  based in Kenya. He has profound interest in the blockchain
                  industry. He is using his wealth of business knowledge to
                  advance EdaFace across East African countries and beyond. He
                  is a member of EDA board of Advisors.
                </p>
                <a
                  href="https://www.linkedin.com/in/peterson-kimani-4a092a1a3"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={tshepo}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Tshepo G. Maile</h4>
                <h6 className="found-pos">BOA Member</h6>
                <p className="found-desc">
                  A South African with a chain of businesses across Africa and
                  Europe. His recent business endeavor has been in fintech. A
                  crypto enthusiast, he is an IT-trained professional with an
                  interest in blockchain technology. He is a member of EDA Board
                  of Advisors.
                </p>
                <a
                  href="https://www.linkedin.com/in/tshepo-maile-08400a24b/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>

              {/* <div className="col-md-6">
                <img
                  src={captain}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Fred Welman</h4>
                <h6 className="found-pos">BOA Member</h6>
                <p className="found-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                  distinctio praesentium temporibus eius itaque, cum commodi
                  ipsum illo eos, aliquam doloremque quibusdam sequi, incidunt
                  corporis inventore debitis! Autem, placeat nobis..
                </p>
                <a
                  href="http://linkedin.com/in/ikechukwu-ezeocha-b101a461"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div> */}

              <div className="space"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Directors;
