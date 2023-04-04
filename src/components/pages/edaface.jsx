import React from "react";
import Footer2 from "../partials/footer2";
import Nav from "../partials/nav";
import { useEffect } from "react";

const Edaface = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="faq-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cha-header-faq">
                Frequently Asked Questions (FAQ)
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-bac-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="cha-sub-header">FAQ on EdaFace</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Q: What is EdaFace? <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample">
              <div class="disclaimer-card">
                <p>
                  A: EdaFace is a user interface aggregator that brings all the
                  various functionalities of the crypto industry onto a single
                  platform! In other words, EdaFace offers you the opportunity
                  to track and transact in cryptos and their exchanges, engage
                  in DeFi, display and mint NFTs, monitor the metaverse world,
                  engage in other varieties of digital assets such as digital
                  music and books as well as advertise, launch and crowdfund
                  your crypto project, detect rugpulls, etc. Indeed, EdaFace is
                  the face of the Crypto Market! 
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Q: How is EdaFace structured?{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample2">
              <div class="disclaimer-card">
                <p>
                  EdaFace is made up of 9 components. Each Component is divided
                  into two or more Compartments. Each Compartment is itself
                  divided into Divisions, and each Division is organized in such
                  a way that it is easy to navigate and offers speedy
                  transactions. The structural organization of the Division is
                  what is known as the Anatomy. Thus, the Anatomy is the
                  framework of EdaFace.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Q: When will all the 9 components of EdaFace be fully functional?{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample3">
              <div class="disclaimer-card">
                <p>
                  A: Some of the components are ready while others are still
                  being developed. You will be notified at each stage of
                  development. See the Road Map in the{" "}
                  <a href="http://localhost:3000/tokenomics">Whitepaper.</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Edaface;
