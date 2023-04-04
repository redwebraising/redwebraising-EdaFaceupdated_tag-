import Footer2 from "./footer2";
import Nav from "./nav";

const Miscellaneous = () => {
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
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="true"
                aria-controls="accordion-1 .item-1"
              >
                <strong>MISCELLANEOUS&nbsp;</strong>
                <br />
                <br />
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-1"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  <strong>(a). Physical Malls</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  To power up the EdaFace Digital Mall, EDA will build physical
                  malls across Africa and partner with others outside across the
                  world that will serve as depots for goods that are accessed
                  online.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  <strong>(b). Benefits for Eda Token</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (i). Payment of goods and services on EdaFace Mall will be
                  done with Eda Token. This gives more utility cases to Eda
                  Token, making the token highly profitable for long-time
                  keeping.
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

export default Miscellaneous;
