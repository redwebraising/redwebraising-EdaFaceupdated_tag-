import Footer2 from "./footer2";
import Nav from "./nav";

const AdvertSubmissionForm = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container mt-5 col-xxl-8 px-4 py-5 resources">
        <div className="accordion" role="tablist" id="accordion-1">
          <div className="accordion-item">
            <h2
              className="accordion-header"
              role="tab"
              style={{ color: "#2315a7" }}
            >
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="false"
                aria-controls="accordion-1 .item-1"
              >
                <strong>ADVERT SUBMISSION FORM</strong>
                <br />
                <br />
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-1"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  This is a platform where a Crypto Project can submit their
                  advertisement for placement on EdaFace Newsfeed Platform.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Adverts on EdaFace Newsfeed Platform receive good attention as
                  they will become visible before thousands of users of EdaFace
                  ecosystem.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-2"
                aria-expanded="false"
                aria-controls="accordion-1 .item-2"
              >
                <strong>Requirements for Advert Submission</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <ol style={{ marginTop: 10 }}>
                  <li>
                    EdaFace verifies any Project before listing it on its
                    platforms. This is to prevent scams, protect the users, and
                    provide more value to users’ investments.
                  </li>
                  <li>
                    Though EdaFace strives to prevent scams, users are advised
                    to do their own research before using any project. See
                    EdaFace full
                    <br />
                    legal requirements at the Footnotes.
                  </li>
                  <li>
                    There are 11 Parameters that a Crypto Project will need to
                    fill in this form and submit for the Project to be
                    advertised on EdaFace Newsfeed Platform.
                    <br />
                  </li>
                  <li>
                    If you have all the required 11 Parameters ready, the
                    process of Submission takes about 10 minutes.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ marginRight: 0, textAlign: "left" }}
          >
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>The 11 Required Parameters</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p
                  className="mb-0"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  (1). Advertisement Banner
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This should be in a pdf or a photo (jpeg, jpg, etc.) format
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  (2). Project Website link
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  (3). Social Media links
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (a). Interactive media links, e.g. Facebook, Telegram,
                  Twitter, Instagram, etc.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (b). Official video link
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(4). Crypto Characteristics</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This involves typing in a brief description of your Crypto
                  Project such as the:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>Crypto Project Name</li>
                  <li>Blockchain type</li>
                  <li>
                    Use case
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(5). Project Team</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Submit the following details for each member of the Core Team
                  and Advisory Team:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (a). Official Names
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (b). National ID Number or Passport number
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (c). Project Position/Title, e.g. CEO, CTO, etc.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (d). LinkedIn account
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(6). Company Details:</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  EdaFace will need to confirm which company owns the Project
                  you are submitting.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Required Company Details are:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (a). Registered Company name
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (b). Company Trade name
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (c). Company Registration Number
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (d). Country of Registration
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (e). Website of Country’s Registration body
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (f). Date of Registration
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (g). Registered Names of Directors
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (h). Company Official Email address
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (i).Company Official Phone number <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>
                    (7). Proof of Company Registration Certificate
                  </strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  For Proof of Registration, you will need to upload a copy of
                  Company Registration Certificate
                  <br />
                </p>
                <ul>
                  <li>A copy of Company Registration Certificate uploaded</li>
                </ul>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(8). Authorised Person Profile</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The person submitting this Project application for advert
                  placement on EdaFace Newsfeed Platform must be either an
                  Official Member of the Company or an Authorized Representative
                  with permission to represent the project and information given
                  in this application.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Proof of your involvement and permission to represent the
                  company and submit this application will be required.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (a). Authorised Person Direct Telegram Message&nbsp;(*Please
                  input your telegram link to directly contact you).
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (b). Authorised Person Email Address
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Note that only email address of the Project website is
                  accepted, e.g.
                  <a href="mailto:sales@edaface.com">sales@edaface.com</a>. No
                  public email such as yahoo mail, gmail, etc. will be accepted.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (c). Please describe your involvement with the Project you're
                  submitting. If your involvement is not listed please specify
                  your role.
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>Founder/Team Member</li>
                  <li>
                    PR/Marketing Agency
                    <br />
                  </li>
                  <li>I am not a Representative of this Project in any way</li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (d). Upload a Proof of Authorisation Letter from the Company
                  that shows you have the authorization to submit this
                  Advertisement.
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>Proof of Authorisation Letter has been uploaded</li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(9). Terms and Conditions</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Before you make any payment, please review the Terms and
                  Conditions and all other legal requirements of EdaFace and
                  EDA&nbsp; Ecosystem in general.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Specifically note that:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Pornography or X-rated project will not be listed
                    <br />
                  </li>
                  <li>Payment is made only with Eda Token</li>
                  <li>All payments are non-refundable</li>
                  <li>
                    Your Advertisement will be displayed at the next available
                    space.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  I have read and I agree to all the Terms of Use, Disclaimers,
                  Listing Terms and Conditions, Privacy Policy, and all legal
                  requirements of EDA
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(10). Make Payment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  See the{" "}
                  <strong>
                    Price List for Advertisement on EdaFace Newsfeed Platform
                  </strong>
                  .<br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  See the{" "}
                  <strong>
                    Price List for Advertisement on EdaFace Newsfeed Platform
                  </strong>
                  .<br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Submit Transaction ID on{" "}
                  <a href="https://launchpad.edaface.com/login">
                    https://launchpad.edaface.com/login
                  </a>
                  .<br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Please, indicate:
                  <br />
                </p>
                <ul>
                  <li>I have made payment </li>
                  <li>
                    Transaction ID submitted
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(11). Submit Your Presale</strong>
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Before you click on the Submission Button, please be sure
                    that ALL the above<strong> 10 Required Parameters</strong>
                    <strong>
                      {" "}
                      for Advertisement&nbsp;on EdaFace Newsfeed Platform{" "}
                    </strong>
                    have been entered. Any missing parameter may delay the
                    placement of your advert.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>Benefits for Eda Token and EdaFace</strong>
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Increase traffic flow to EdaFace website.
                    <br />
                  </li>
                  <li>
                    Enhanced Google search engine optimization for EdaFace
                    website
                  </li>
                  <li>
                    Payment of Advert Fee is by Eda Token, thus, enhancing the
                    utility of the token.
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default AdvertSubmissionForm;
