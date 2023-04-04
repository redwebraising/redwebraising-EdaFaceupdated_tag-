import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const EdafaceAcademy = () => {
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
                <h3 className="token-header">Component 8: EdaFace Academy</h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    This is EdaFace Academy that serves the following functions:
                  </span>
                </p>
                <p className="token-holder">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Provide current news on the Emerging Digital
                </p>
                <p className="token-holder">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Educate users about the Emerging Digital World
                </p>
                <p className="token-holder">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Research studies and publication on the Emerging Digital World
                </p>

                <h4 className="token-header">
                  Compartments of EdaFace Academy
                </h4>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  EdaFace Newsfeed Platform
                </p>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  School of Cryptocurrencies
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

export default EdafaceAcademy;
