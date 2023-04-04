import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import check from "../../images/check.svg";
import ikechukwu from "../../images/ikechukwu.jpg";
import linkedin from "../../images/linkedin.svg";

const Finance = () => {
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
              <h3 className="cha-header" style={{ textAlign: "left" }}>
                Department of Finance
              </h3>
              <p
                className="cha-sub-header"
                style={{ fontSize: "24px", textAlign: "left" }}
              >
                The functions of the Department of Finance include:
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                In charge of day-to-day running of financial activities of EDA
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Oversees the financial execution of Eda projects
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Draw up the annual budgets of EDA for the BOF deliberation{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Interpret the budgetary allocation for the running of EDA{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Advise the EDA Board of Founders on financial matters{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Keep proper records of EDA financial activities.
              </p>
              <br />
              <br />
              <p>
                The Financial Department will be made up of accountants, HR
                personnel, etc.
              </p>
              <p>
                The leader of the Financial Department will be known as Head of
                Department (HOD) of Finances.
              </p>
              <br />
              <br />

              <p style={{ fontSize: "24px" }}>
                This Financial Department will have two units:
              </p>
              <h3 className="token-holder">(a). Budgetary Unit</h3>
              <p>
                It will be in charge of budgetary formulation and allocations of
                EDA.
              </p>

              <h3 className="token-holder">(b). Human Resource Unit</h3>
              <p>
                This unit will be in charge of payroll, staff recruitment, and
                be part of staff disciplinary committee.
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
                  src={ikechukwu}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Ikechukwu Ezeocha </h4>
                <h6 className="found-pos">HOD of Finances</h6>
                <p className="found-desc">
                  A Public Health Pharmacist with expertise in Project/ Program
                  Management, trained in Nigeria and the USA with B.Pharm, MPH,
                  Cert Project Mgt, and Cert Leadership in Global Health. Has
                  work experience as a Community Pharmacy Practitioner, Medical
                  Representative, and as a Pharmaceutical Marketing/Sales
                  Representative. Has been involved in the crypto industry the
                  past 3 years and he sees crypto industry as a platform that
                  will create financial freedom, especially for Africans.
                </p>
                <a
                  href="https://www.linkedin.com/in/ikechukwu-ezeocha-b101a461"
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
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Finance;
