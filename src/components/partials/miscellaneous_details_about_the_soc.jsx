import Footer2 from "./footer2";
import Nav from "./nav";

const MiscellaneousDetailsAboutTheSoc = () => {
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
                <strong>MISCELLANEOUS DETAILS ABOUT THE SOC</strong>
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
                  <strong>(a). Conditions for Enrollment</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The SOC is a tuition (subscription)-based school. However, the
                  subscription fees are highly subsidized so that affordability
                  <br /> issue does not deny anyone access to the school.
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
                  All subscription payments will be done with Eda Token. This
                  will increase the utility of the token and, hence, enhance the
                  price
                  <br /> value of the token.
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

export default MiscellaneousDetailsAboutTheSoc;
