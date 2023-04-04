import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const CentralizedReflector = () => {
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
                  COMPONENT 2: CENTRALIZED EXCHANGE REFLECTOR
                </h3>
                <h4 className="token-header">Introduction</h4>

                <p className="mb-5">
                  <span className="token-holder">
                    This is the component that displays all the centralized
                    exchanges (Cex). There are more than 400 centralized
                    exchanges that are listed on EdaFace Cex Platform, and the
                    number is growing.
                  </span>
                </p>
                <h4 className="token-header my-4">
                  There are two types of Cex:
                </h4>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />{" "}
                  Spot Exchanges – these are Cex that offer spot trading
                  services
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Derivatives Exchanges – these are Cex that offer derivatives
                  trading services, which are also called futures.
                </p>

                <p>
                  <span>
                    On EdaFace Cex Reflector, anyone can list their Cex (both
                    Spot and Derivatives Exchanges)
                  </span>
                </p>

                <p className="mt-5">
                  <span className="token-header">
                    Compartments of Cex Reflector
                  </span>
                </p>

                <p>EdaFace Cex Reflector has three compartments:</p>
                <p>(A). Spot Exchange Platform</p>
                <p>(B). Derivatives Exchange Platform</p>
                <p>(C). Launchpad</p>
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

export default CentralizedReflector;
