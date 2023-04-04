import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import bookmark from "../../images/bookmark.svg";

// import mabela from "../../images/mabela.jpg";
// import linkedin from "../../images/linkedin.svg";

const Logistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <h3 className="cha-header">Department of Logistics</h3>
              <p className="cha-sub-header-2">
                The leader of the Department of Logistics (DOL) will be known as
                the Head of Department (HOD) of Logistics.
              </p>
              <br />

              <h3 className="token-header" style={{ color: "#26b6d4" }}>
                Units of DOL
              </h3>

              <p>This Department will have three units:</p>
              <h4 className="token-header">(a). Business Development Unit</h4>
              <p className="cha-sub-header-2">
                This unit will be in charge of business development.{" "}
              </p>
              <p>Its work is to “think” out the way forward for EDA. </p>
              <br />
              <p>Thus, its functions include:</p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Formulate new project ideas in line with EDA’s vision through
                creative and innovative ingenuity
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Develop ideas into a digital design for approval by the EDA
                Board of Founders
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Design the structure of Eda Ecosystem{" "}
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />{" "}
                Design how each project in Eda Ecosystem will interact with all
                the other projects to advance EDA’s vision.
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />{" "}
                Identify the need for staff recruitment for all the Departments
                and make such recommendations to the BOF for approval.
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />{" "}
                Organize employment interviews along with the relevant
                Department and the Department of Finance. In other words, those
                that will sit in each employment interview are personnel from
                the Logistic Department, Financial Department, and the relevant
                Department in which the employee will be working.{" "}
              </p>

              <p>
                In summary, the work of Business Development is to “think” out
                the way forward for EDA. Therefore, the Unit will consist of
                individuals with brilliant minds whose job is principally to
                produce creative and innovative solutions in line with EDA’s
                vision.
              </p>
              <br />
              <h4 className="token-header">(b). Legal Unit</h4>
              <p className="cha-sub-header-2">
                This Unit is in charge of all legal matters of EDA.{" "}
              </p>
              <p>The functions include:</p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Review and advise EDA on all legal issues.
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Check all EDA documentations to ascertain their legal
                compliance.
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Guide, prepare, and ratify any appropriate documents for any
                contractual relationship that EDA will want to enter into.
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Attend to all legal issues of EDA.
              </p>

              <p>This Unit will be made up of legal personnel.</p>
              <p>The leader of the Unit will report to the HOD Logistics.</p>
              <br />

              <h4 className="token-header">(c). Statistics Unit</h4>
              <p>This Unit will be in charge of data management.</p>
              <p>Its functions include:</p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Collate, arrange and coordinate information into statistics for
                usage in advancing the vision of EDA.{" "}
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />
                Record keeping of EDA’s data
              </p>
              <p>
                <img
                  src={bookmark}
                  className="img-fluid check-push"
                  alt="bookmark"
                />{" "}
                Periodical release of data to show the progress of EDA in line
                with the vision
              </p>

              <p>
                This Unit will be made up of statisticians and data managers.
              </p>
              <p>The leader will be reporting to the HOD Logistics.</p>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
        {/* <div className="wrapper-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <img
                  src={mabela}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Patricia Mabela</h4>
                <h6 className="found-pos">HOD of Logistics</h6>
                <p className="found-desc">
                  Has expertise in digital marketing and direct sales. Trained
                  in Tanzania and South Africa and is completing her
                  Biochemistry degree program, has been in the crypto industry
                  since 2019. Her personal vision is to engage technology in
                  changing the face of Africa.
                </p>
                <a
                  href="https://www.linkedin.com/in/patricia-mabela-41134517a"
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
        </div> */}
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Logistics;
