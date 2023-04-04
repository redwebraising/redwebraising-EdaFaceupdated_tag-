import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const DecentralizedExchangeReflector = () => {
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
                  Component 3: Decentralized Exchange Reflector
                </h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    This is the Decentralized Exchange Reflector that takes you
                    into the Decentralized Market System of cryptocurrencies. It
                    is where you can do liquidity mining (yield farming), swap
                    your tokens, interact with decentralized exchanges, and much
                    more.
                  </span>
                </p>
                <h4 className="token-header">Compartments of Dex Reflector</h4>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Dex Listing Platform
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  EdaFace Plantation
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

export default DecentralizedExchangeReflector;
