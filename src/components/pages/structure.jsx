import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";

const Structure = () => {
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
              <h3 className="cha-header">Four Levels of EdaFace Structure</h3>
              <p
                className="cha-sub-header"
                style={{ fontSize: "24px", textAlign: "left" }}
              >
                To make it easier for the user to understand EdaFace and be able
                to navigate easily through its platforms, the structure of
                EdaFace is methodologically arranged into four (4) levels:
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card-token-2">
                <h3 className="token-header">Level 1: Components</h3>

                <p>EdaFace has nine (9) Components, which are:</p>

                <p className="token-caster">
                  <span className="token-holder">Component 1:</span>Crypto
                  Reflector
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 2:</span>Centralized
                  Exchange Reflector
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 3:</span>
                  Decentralized Exchange Reflector
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 4:</span> Crypto
                  Verification Centre
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 5:</span> NFT
                  Marketplace
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 6:</span>Digital
                  Literature Reflector
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 7:</span>Eda Digital
                  Mall
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 8:</span> Eda Academy
                </p>
                <p className="token-caster">
                  <span className="token-holder">Component 9:</span>Digital
                  Clinic
                </p>
              </div>

              <div className="card-token-2">
                <p className="token-caster">
                  <span className="token-holder">Mnemonic</span>
                </p>
                <p className="token-caster">
                  You can easily remember EdaFace structure with this mnemonic:
                  CCDA:
                </p>
                <p className="token-caster">
                  <span className="token-holder">C = </span>Components
                </p>
                <p className="token-caster">
                  <span className="token-holder">C = </span>Compartments
                </p>
                <p className="token-caster">
                  <span className="token-holder">D = </span> Divisions
                </p>
                <p className="token-caster">
                  <span className="token-holder">A = </span>Anatomy
                </p>
                <p className="token-caster">
                  This is the structural format by which EdaFace has been built.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-token-2">
                <h3 className="token-header">Level 2: Compartments</h3>

                <p className="token-caster">
                  Each Component is divided into Compartments. Some Components
                  have just two Compartments while some others have upto four
                  (4) Compartments.
                </p>

                <h3 className="token-header">Level 3: Divisions</h3>

                <p className="token-caster">
                  Each Compartment is further divided into Divisions. There may
                  be two or more Divisions for each Compartment.
                </p>

                <h3 className="token-header">Level 4: Anatomy</h3>

                <p className="token-caster">
                  Each of the Divisions are organized in such a way that it is
                  easy to navigate and offers speedy transactions. The
                  structural organization of the Division is what is known as
                  the Anatomy. Thus, the Anatomy is the framework of EdaFace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Structure;
