import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const CryptoVerificationCentre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="card-token">
                <h3 className="token-header">
                  Component 4: Crypto Verification Centre
                </h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    Another beautiful thing about EdaFace is that it does
                    identify crypto scams via its Crypto Verification Centre,
                    especially rug pulls, long before they occur.
                  </span>
                </p>
                <p>
                  <span className="token-holder th">
                    In other words, EdaFace helps all crypto lovers to avoid
                    scams. This is the first of its kind in the crypto industry.
                  </span>
                </p>
                <h4 className="token-header">
                  Compartments of Crypto Verification Centre{" "}
                </h4>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Rugpull Detection Centre
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Blockchain Ecosystems
                </p>
              </div>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default CryptoVerificationCentre;
