import React from "react";
import bannervector from "../../images/bannervector.png";
import chevron from "../../images/chevron.svg";

const Intro = () => {
  return (
    <div>
      <div id="particles">
        <div id="webcoderskull">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <h1 className="main-heading">Emerging Digital Africa</h1> */}
                <h1 className="main-heading">
                  Bringing New Insight For Your Financial Freedom!
                </h1>
                <p className="body-text">
                  EdaFace is a user interface aggregator that brings all the
                  various functionalities of the crypto industry onto a single
                  platform!
                </p>
                <div className="row">
                  <div className="col-lg-12">
                    <a
                      href="https://launchpad.edaface.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="btn-edaface-intro">
                        Launchpad{" "}
                        <span>
                          <img
                            src={chevron}
                            className="img-fluid"
                            alt="button-icon"
                          />
                        </span>
                      </button>
                    </a>
                    <a
                      href="https://edaface.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="btn-edaface-intro">
                        NFT Marketplace
                        <span>
                          <img
                            src={chevron}
                            className="img-fluid"
                            alt="button-icon"
                          />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <a
                      href="https://news.edaface.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="btn-edaface-intro-primary">
                        Crypto News{" "}
                        <span>
                          <img
                            src={chevron}
                            className="img-fluid"
                            alt="button-icon"
                          />
                        </span>
                      </button>
                    </a>
                    <a
                      href="https://launchpad.edaface.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="btn-edaface-intro-primary">
                        P2P Trading{" "}
                        <span>
                          <img
                            src={chevron}
                            className="img-fluid"
                            alt="button-icon"
                          />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src={bannervector}
                  className="img-fluid banner-intro"
                  alt="banner-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
