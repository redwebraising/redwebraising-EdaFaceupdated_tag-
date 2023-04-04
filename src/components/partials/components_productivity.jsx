import Footer2 from "./footer2";
import Nav from "./nav";

const ComponentsOfProductivity = () => {
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
                <strong>The Eight Components of Productivity</strong>
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
                  The 5 items of EdaFace SOC 4-year Scorecard evaluate the eight
                  components of productivity (see{" "}
                  <a href="https://www.eda.social/">
                    Edaface School of Crypocurrencies
                  </a>
                  )
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Eight Components of Productivity and the number of times
                  they have been evaluated are as follows:
                  <br />
                </p>

                <ul style={{ marginTop: 10 }}>
                  <li>transparency – checked six times</li>
                  <li>reputability – checked two times</li>
                  <li>reliability – checked three times</li>
                  <li>durability – checked two times</li>
                  <li>relevance – checked one time</li>
                  <li>uniqueness – checked one time</li>
                  <li>scarcity – checked two times</li>
                  <li>viability – checked two times</li>
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

export default ComponentsOfProductivity;
