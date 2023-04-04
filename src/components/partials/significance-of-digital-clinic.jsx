import Footer2 from "./footer2";
import Nav from "./nav";

const SignificanceOfDigitalClinic = () => {
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
                <strong>Significance of Digital Clinic </strong>
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
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(a). Reduces Waiting Time</strong>
                  <br />
                </p>
                <ul>
                  <li>
                    Discourages long waiting time.
                    <br />
                  </li>
                  <li>
                    Limits long queue.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(b). Practitioner Accountability:</strong>
                  <br />
                </p>
                <ul>
                  <li>
                    Time consciousness.
                    <br />
                  </li>
                  <li>
                    Duty to patients and clients.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(c). Monitoring and Control</strong>
                  <br />
                </p>
                <ul>
                  <li>
                    Patient pays more money for carelessly booking appointments.
                    <br />
                  </li>
                  <li>
                    Rates efficiency and effectiveness of a healthcare facility.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(d). Limits Patient’s carelessness</strong>
                  <br />
                </p>
                <ul>
                  <li>
                    Patient pays more money for carelessly booking appointments.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(e). Strengthens Healthcare System</strong>
                  <br />
                </p>
                <ul>
                  <li>
                    Encouraging digitalisation of healthcare practice.
                    <br />
                  </li>
                  <li>
                    Discourages abuse of healthcare system.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(f). Simplifying Healthcare Records</strong>
                  <br />
                </p>
                <ul>
                  <li>
                    Simplify records storage and transmission in healthcare
                    system.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>(g). Simplifying Dispensary</strong>
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

export default SignificanceOfDigitalClinic;
