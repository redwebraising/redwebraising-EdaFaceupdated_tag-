import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const DigitalLiteratureReflector = () => {
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
                  Component 6: Digital Literature Reflector
                </h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    EdaFace Digital Literature is where digital literature can
                    be minted, listed and traded. Anyone can list their Digital
                    Literature.
                  </span>
                </p>

                <h4 className="token-header">
                  Three Kinds of Digital Literature on EdaFace
                </h4>
                <p>
                  <span className="token-holder th">
                    Digital literature on EdaFace are divided into three kinds:
                  </span>
                </p>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Digital Books
                </p>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Songs
                </p>
                <p className="token-holder th">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Digital Plays
                </p>
                <p className="th">
                  <span className="token-holder th">
                    Examples of digital plays are poetry, movies, dramas, etc.
                  </span>
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

export default DigitalLiteratureReflector;
