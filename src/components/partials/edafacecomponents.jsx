import React from "react";
import crypto from "../../images/crypto.svg";
import market from "../../images/market.svg";
import edadigital from "../../images/edadigital.svg";
import academy from "../../images/academy.svg";
import token from "../../images/token.svg";
import tokens from "../../images/tokens.svg";
import memo from "../../images/memo.svg";
import clinic from "../../images/clinic.svg";
import libary from "../../images/libary.svg";

const Edafacecomponents = () => {
  return (
    <div>
      <div className="bac-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*
<h6 className="component-intro">EDAFACE COMPONENTS</h6>
    */}
              <h3 className="component-header">
                The Nine Components Of EdaFace
              </h3>
              <p className="component-body">
                EdaFace has the following components:
              </p>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
            <div className="col">
              <div className="eda-components-card">
                <img
                  src={crypto}
                  className="img-fluid component-icon"
                  alt="crypto"
                />
                <h5 className="reflector-text">Crypto Reflector</h5>
              </div>
            </div>
            <div class="col">
              <div className="eda-components-card">
                <img
                  src={market}
                  className="img-fluid component-icon"
                  alt="market"
                />
                <h5 className="reflector-text">NFT Marketplace</h5>
              </div>
            </div>
            <div class="col">
              <div className="eda-components-card">
                <img
                  src={edadigital}
                  className="img-fluid component-icon"
                  alt="edadigital"
                />
                <h5 className="reflector-text">Eda Digital Mall</h5>
              </div>
            </div>
            <div class="col">
              <div className="eda-components-card">
                <img
                  src={academy}
                  className="img-fluid component-icon"
                  alt="academy"
                />
                <h5 className="reflector-text">Eda Academy</h5>
              </div>
            </div>
            <div class="col">
              <div className="eda-components-card">
                <img
                  src={clinic}
                  className="img-fluid component-icon"
                  alt="clinic"
                />
                <h5 className="reflector-text">Digital Clinic</h5>
              </div>
            </div>

            <div class="col">
              <div className="eda-components-card">
                <img
                  src={memo}
                  className="img-fluid component-icon"
                  alt="memo"
                />
                <h5 className="reflector-text">Scam Verification Centre</h5>
              </div>
            </div>
            <div class="col">
              <div className="eda-components-card">
                <img
                  src={token}
                  className="img-fluid component-icon"
                  alt="token"
                />
                <h5 className="reflector-text">
                  Centralized Exchange Reflector
                </h5>
              </div>
            </div>
            <div class="col">
              <div className="eda-components-card">
                <img
                  src={tokens}
                  className="img-fluid component-icon"
                  alt="token"
                />
                <h5 className="reflector-text">
                  Decentralized Exchange Reflector
                </h5>
              </div>
            </div>

            <div class="col">
              <div className="eda-components-card">
                <img
                  src={libary}
                  className="img-fluid component-icon"
                  alt="libary"
                />
                <h5 className="reflector-text">Digital Literature Reflector</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edafacecomponents;
