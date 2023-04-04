import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import check from "../../images/check.svg";

import linkedin from "../../images/linkedin.svg";
import victoria from "../../images/victoria.jpg";

const Logistics = () => {
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
              <h3 className="cha-header">Department of Marketing</h3>
              <p className="cha-sub-header" style={{ fontSize: "24px" }}>
                The Department of Marketing (DOM) is in charge of marketing EDA
                projects. Its functions include:{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <p>
                1. Using all legal means to advertise and promote EDA’s projects
              </p>
              <p>
                2. Searching for partnerships and make recommendations for their
                endorsement by the BOF.
              </p>
              <p>
                3. To draw up EDA's Marketing programs regularly, e.g. for 6
                months, and at the end of the 6 months, to review the outcomes
                and draw up new programs as situation demands.
              </p>
              <p>4. To identify the marketing budgetary needs of EDA.</p>
              <br />
              <p>
                {" "}
                5. To continuously cover and provide leadership in all the
                aspects of EDA's Marketing, which include:
              </p>

              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Email Marketing{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Facebook{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Twitter
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Telegram
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Instagram
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Discord
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                LinkedIn
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Newsletters
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Video production
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Use of influencers{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Any other Marketing strategy.
              </p>
              <br />

              <p>
                {" "}
                6. To actively look for and identify Partners and Influencers
                that will boost EDA’s prospects and arrange for them to sign
                contracts with EDA.
              </p>
              <p>
                7. Decide, design and implement any Marketing strategy and
                platform that will advance EDA’s vision.
                <br />
                <br />
                The Marketing Department will be made up of marketers.
              </p>

              <p>
                The leader will be known as the Head of Department (HOD)
                Marketing.{" "}
              </p>

              <h3 className="cha-header mt-5">Units of DOM</h3>
              <p className="cha-sub-header">
                The Department of Marketing will consist of two Units:
              </p>

              <h3 className="token-holder">(a) Sales Unit</h3>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                This unit is in charge of all forms of EDA sales.
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                The leader of the Sales Unit will be known as the{" "}
                <strong>Sales Manager</strong>, and he/she will be reporting to
                the HOD of Marketing.
              </p>

              <h3 className="token-holder mt-5">(b). Media Unit</h3>

              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                This unit is in charge of production and management of graphics,
                videos, and all media needs of EDA.
              </p>

              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                The leader of the Media Unit will be known as the{" "}
                <strong>Media Manager</strong>, and he/she will be reporting to
                the HOD of Marketing.
              </p>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-8">
                <img
                  src={victoria}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Victoria Jiyana </h4>
                <h6 className="found-pos">HOD of Marketing</h6>
                <p className="found-desc">
                  She is a web developer and a marketer. Holds a Diploma in
                  Information technology in South Africa and has been involved
                  in two crypto projects since 2019. She strongly perceives
                  cryptos to be vehicles for financial empowerment for young
                  Africans and beyond, especially considering that cryptos are
                  decentralized, trustless and permissionless with no
                  third-party interference.
                </p>
                <a
                  href="https://www.linkedin.com/in/victoria-jiyana-a59ba9179"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="col-md-2"></div>

              {/* 
              <div className="col-md-6">
                <img
                  src={abo}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Abosede Adebowale</h4>
                <h6 className="found-pos">Media Content Creator</h6>
                <p className="found-desc">
                  Holds Masters degree in Computer Science from Akure’s Federal
                  University of Technology. He has 6-year expertise in SEO
                  writing of blockchain hyperledger protocol and content
                  creation for crypto projects. His desire is to impact the
                  crypto world, especially Africa, through the power of writing
                  skill and Information Technology.
                </p>
                <a
                  href=" https://www.linkedin.com/in/samson-abosede-3a45aa233/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Logistics;
