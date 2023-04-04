import Footer2 from "./footer2";
import Nav from "./nav";

const SpotExchangePlatform = () => {
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
                <strong>SPOT EXCHANGE PLATFORM</strong>
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
                  This platform displays all the exchanges that offer spot
                  trading.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The parameters you will see being displayed on the Spot
                  Exchange Platform are:
                  <br />
                </p>
                <ol type="I" style={{ marginTop: "10PX" }}>
                  <li>
                    EdaFace Rank (this is based on the 24-hour trade volume)
                    <br />
                  </li>
                  <li>
                    24-hour trade volume
                    <br />
                  </li>
                  <li>
                    Average Liquidity
                    <br />
                  </li>
                  <li>
                    Weekly Visits
                    <br />
                  </li>
                  <li>
                    Weekly Visits
                    <br />
                  </li>
                  <li>
                    Number of Markets (number of coin pairs)
                    <br />
                  </li>
                </ol>
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
                <strong>Anatomy of Spot Exchange Platform:</strong>
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
                  When you click on each listed exchange in the Spot Platform of
                  Cex Reflector, the following details will be displayed:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    The Spot Market of the exchange website should open up
                    <br />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default SpotExchangePlatform;
