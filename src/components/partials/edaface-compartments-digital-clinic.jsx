import Footer2 from "./footer2";
import Nav from "./nav";

const CompartmentsOfDigitalClinic = () => {
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
                <strong>Compartments of Digital Clinic</strong>
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
                  The Digital Clinic has the following Compartments:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(a). Doctor Compartment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is the area that focuses on doctor-patient visits.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(b). Pharmacist Compartment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is the area that focuses on pharmacist-patient visits.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This will also involve online pharmacy.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(c). Midwife Compartment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is the area that focuses on midwife-patient visits.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(d). Laboratory Compartment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is the area that focuses on laboratory-patient visits.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(e). Record Compartment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This will pioneer e-medical records in which patient records
                  are safely collated, securely stored, and easily retrievable.
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

export default CompartmentsOfDigitalClinic;
