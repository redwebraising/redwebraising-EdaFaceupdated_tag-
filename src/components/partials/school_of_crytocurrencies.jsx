import Footer2 from "./footer2";
import Nav from "./nav";

const SchoolOfCryptocurrencies = () => {
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
                <strong>SCHOOL OF CRYPTOCURRENCIES</strong>
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
                  The School of Cryptocurrencies (SOC) is the academic arm of
                  EdaFace.
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
                data-bs-target="#accordion-1 .item-2"
                aria-expanded="true"
                aria-controls="accordion-1 .item-2"
              >
                <strong>Why EdaFace SOC</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  In keeping with vision of EdaFace, the SOC is designed to:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }}>
                  <li>
                    Impart knowledge on the dynamic movements of the Crypto
                    Market
                  </li>
                  <li>Impart knowledge about the blockchain revolution</li>
                  <li>
                    Create a platform for continuous research on blockchain
                    development
                    <br />
                  </li>
                </ol>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  By going through the EdaFace SOC, you will be among the 5% of
                  the world that know about cryptocurrency with its rapidly
                  evolving Crypto Market.
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

export default SchoolOfCryptocurrencies;
