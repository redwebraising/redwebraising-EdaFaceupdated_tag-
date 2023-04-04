import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const CryptoReflector = () => {
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
                <h3 className="token-header">COMPONENT 1: CRYPTO REFLECTOR</h3>
                <h4 className="token-header">Introduction</h4>
                <p>
                  <span className="token-holder component-text">
                    This component is the Crypto Reflector.
                  </span>
                </p>

                <h4 className="token-header">
                  Compartments of Crypto Reflector:
                </h4>

                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Listing Platform
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Peer-to-Peer trading platform
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Advertisement Platform
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Trending Platform
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

export default CryptoReflector;
