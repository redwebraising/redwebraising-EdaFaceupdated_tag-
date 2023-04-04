import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import check from "../../images/check.svg";
import captain from "../../images/captain.jpg";

import linkedin from "../../images/linkedin.svg";

const Executive = () => {
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
              <h3 className="cha-header">
                The Chief Executive Department (CED)
              </h3>
              <p
                className="cha-sub-header"
                style={{ fontSize: "24px", textAlign: "left" }}
              >
                The Chief Executive Department (CED) is the coordinating office
                of EDA activities. It consists of two Units:
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <h3 className="token-holder">(a). CEO Office</h3>
              <p>
                The leader of the CED will be known as the Chief Executive
                Officer (CEO). He will perform the following functions:
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Ensure the vision of EDA is adhered to by all the Departments
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Lead, direct, and ensure the functions of the Secretariat Office
                are carried out effectively and efficiently.{" "}
              </p>
              <br />
              <br />

              <h3 className="token-holder">(b). Secretariat Office</h3>
              <p>
                The Secretariat Office will have a Secretary, who will be the
                official Secretary of EDA. The functions of the Secretary
                include:
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                The official spokesperson of EDA{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Supervision of the day-to-day activities of all the Departments
                of EDA.{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Calling up of meetings and making arrangements for the success
                of each meeting.{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Record keeping of each meeting.{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Ensure staff regular training to conform with EDA’s vision{" "}
              </p>

              <p>
                The Secretary performs the above duties under the leadership of
                the CEO. That is, the CEO has the right and powers to override
                any decisions or plans by the Secretary. In fact, the Secretary
                can only function with the express permission of the CEO.
              </p>
              <p>Appointment of the Secretary will be done by the BOF.</p>
              <p>
                The CEO can recommend a suitable candidate for the Secretary
                post, but such recommendation will have to be approved by the
                BOF and endorsed by the Office of the Director.
              </p>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <img
                  src={captain}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Captain Adiari</h4>
                <h6 className="found-pos">Director/CEO</h6>
                <p className="found-desc">
                  An entrepreneur with passionate interest in blockchain
                  technology, and has been involved in a number of blockchain
                  projects since 2017. A Medical Practitioner and a Public
                  Health Expert, trained in Nigeria, South Africa and the United
                  Kingdom. Seeing the power blockchain technology holds in
                  alleviating mass poverty in Africa and beyond, his interest in
                  the crypto industry has been awakened greatly.
                </p>
                <a
                  href="https://www.linkedin.com/in/captain-adiari-bb496a45/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-3"></div>

              <div className="col-md-4"></div>

              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Executive;
