import Footer2 from "./footer2";
import Nav from "./nav";

const EdafaceTwoLevelsVerificcation = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container col-xxl-8 px-4 py-5 resources">
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
                <strong>EDAFACE TWO-LEVELS OF VERIFICATION</strong>
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
                  EdaFace SOC 4-year Scorecard system determines which
                  cryptocurrency can list on EdaFace. As a further measure of
                  scam check, all listed cryptocurrencies on EdaFace undergo
                  <strong> Two-Levels of Verification </strong>as follows:
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
                <strong>(1). Preliminary Verification</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  If your Crypto Project scores above 20% SOC Scorecard with
                  EdaFace SOC 4-year Scorecard system, the CVC will prompt you
                  to:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (a). Accept the terms and conditions of listing, Privacy
                  Policy, EDA disclaimers, and all other related legal terms of
                  <br /> service of EDA.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (b). Pay a listing fee in Eda Token.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Once all these have been successfully carried out, you will be
                  able to submit your project successfully by clicking
                  <br /> on the “<strong>SUBMIT NOW</strong>” button.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Because EdaFace is a decentralized platform, once submitted,
                  your project will automatically become live on EdaFace.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The submitted Crypto Project will bear the status of “
                  <strong>Prelim Verif</strong>.” This means your Project has
                  successfully achieved “Preliminary Verification,” which will
                  be conspicuously visible next to your listed Project.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>(2). Complete Verification</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  <strong>Comp Verif</strong> is the second level of
                  verification. To receive “<strong>Comp Verif</strong>,” which
                  means “Complete Verification,” you may be required to submit
                  some documentation (“Request Form”) to the CVC for manual
                  check.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>Comp Verif</strong> is the second level of
                  verification. To receive “<strong>Comp Verif</strong>,” which
                  means “Complete Verification,” you
                  <br /> may be required to submit some documentation (“Request
                  Form”) to the CVC for manual check.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Upon your submission of the requested documentations, EdaFace
                  CVC will process them to ascertain, among other things, their
                  <br /> authenticity.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The processing period may take days to weeks or even months.
                  EdaFace CVC will do all it can to finalize the process within
                  90 days of receipt of the requested documents. The process is
                  faster if all the requested documents are sent at the same
                  time.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  EdaFace CVC does a background check of the authenticity of the
                  documents. If the process is not finalized within 90 days on
                  submission, EdaFace may or may not notify you, depending on
                  the backlog of work.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  EdaFace CVC does a background check of the authenticity of the
                  documents. If the process is not finalized within 90 days
                  <br /> on submission, EdaFace may or may not notify you,
                  depending on the backlog of work.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default EdafaceTwoLevelsVerificcation;
