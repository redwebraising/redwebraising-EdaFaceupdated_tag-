import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const EdafaceDigitalMall = () => {
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
                  Component 7: EdaFace Digital Mall
                </h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    EdaFace Digital Mall (or EdaFace Mall, for short) is an
                    online shopping complex that links physical products to
                    online services. EdaFace Mall is the place for e-commerce.
                    It is the link between the digital world and the physical
                    world.
                  </span>
                </p>

                <h4 className="token-header">Functions</h4>
                <p>
                  <span className="token-holder th">
                    EdaFace Mall is an e-commerce platform where there will be
                    buying and selling of goods and services over the internet
                    via blockchain services.
                  </span>
                </p>
                <h4 className="token-header">Target Audience</h4>
                <p>
                  <span className="token-holder th">
                    Any person that is 13 years and above can patronize EdaFace
                    Digital Mall
                  </span>
                </p>
                <h4 className="token-header">
                  Conditions for usage of EdaFace Mall{" "}
                </h4>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Meet EDA Legal Requirements
                </p>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Payment of Shop Rental Fee with Eda Token
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

export default EdafaceDigitalMall;
