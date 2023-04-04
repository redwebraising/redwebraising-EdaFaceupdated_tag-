import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const DigitalClinic = () => {
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
                <h3 className="token-header">Component 9: Digital Clinic</h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    EdaFace Digital Clinic is a digital application that seeks
                    to digitize healthcare system in Africa and beyond.
                  </span>
                </p>

                {/* <h4 className="token-header">Compartments of Digital Clinic</h4>
                <p>
                  <span className="token-holder th">
                    The Digital Clinic has the following Compartments:
                  </span>
                </p>

                <p className="mt-2 mb-0">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Doctor Compartment
                </p>
                <p>This is the area that focuses on doctor-patient visits.</p>
                <p className="mt-2 mb-0">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Pharmacist Compartment
                </p>
                <p className="mb-0">
                  This is the area that focuses on pharmacist-patient visits.
                </p>
                <p>This will also involve online pharmacy.</p>
                <p className="mt-2 mb-0">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Midwife Compartment
                </p>
                <p>This is the area that focuses on midwife-patient visits.</p>
                <p className="mt-2 mb-0">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Laboratory Compartment
                </p>
                <p>
                  This is the area that focuses on laboratory-patient visits.
                </p>
                <p className="mt-2 mb-0">
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  Record Compartment
                </p>
                <p>
                  This will pioneer e-medical records in which patient records
                  are safely collated, securely stored, and easily retrievable.
                </p> */}
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

export default DigitalClinic;
