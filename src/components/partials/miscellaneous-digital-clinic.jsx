import Footer2 from "./footer2";
import Nav from "./nav";

const MiscellaneosDigitalClinic = () => {
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
                <strong>Miscellany</strong>
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
                  Miscellaneous of the Digital Clinic
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
                <strong>Development of Compartments</strong>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  The various compartments of EdaFace Digital Clinic are being
                  developed.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Note that as the platform grows and the usage awareness
                  multiplies, the Digital Clinic will add more compartments in
                  line with the vision of digitalizing the healthcare system of
                  Africa and beyond.
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
                <strong>Benefits for Eda Token</strong>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (a). Payment for the usage of the Digital Clinic is currently
                  done in fiat currencies
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (b). Gradual introduction of payment with Eda Token is being
                  developed.
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

export default MiscellaneosDigitalClinic;
