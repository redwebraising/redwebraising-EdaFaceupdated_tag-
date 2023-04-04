import React from "react";
import Footer2 from "../partials/footer2";
import Nav from "../partials/nav";
import { useEffect } from "react";

const Eda = () => {
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
              <h3 className="cha-sub-header">FAQ on EDA</h3>
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
              Q: What is EDA? <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample">
              <div class="disclaimer-card">
                <p>
                  A: EDA is a registered company in South Africa that creates
                  digital products. The company has 5 departments – Chief
                  Executive Department (CED), Eda Labs, Department of Finance,
                  Department of Logistics, and Department of Marketing. It is
                  the first of its kind in Africa. For more, see our{" "}
                  <a href="http://localhost:3000/tokenomics">Whitepaper.</a>
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
              Q: What is the Vision and Mission of EDA?{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample2">
              <div class="disclaimer-card">
                <p>
                  A: The vision is: “Bringing New Insight for your Financial
                  Freedom.” The mission of EDA, among others, is to pioneer the
                  digitalization process in Africa and beyond, and facilitate
                  rapid adoption of crypto as the currency of the emerging
                  digital age, with the ultimate goal of empowering the user and
                  his family financially. By journeying with EDA, this vision
                  and its mission will become realized in your life.{" "}
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
              Q: Who are the EDA Team members?{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample3">
              <div class="disclaimer-card">
                <p>
                  A: The Eda Team is made up of vibrant young experts and
                  technocrats from across Africa and beyond. Along with its
                  partners, the Team has a combined 42 years of crypto
                  experience and blockchain expertise. The Team is fully doxxed,
                  and you can check up their identities in the{" "}
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

export default Eda;
