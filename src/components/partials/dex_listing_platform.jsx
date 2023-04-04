import Footer2 from "./footer2";
import Nav from "./nav";

const DexListingPlatform = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container col-xxl-8 px-4 py-5 resources">
        <div className="accordion" role="tablist" id="accordion-1">
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="false"
                aria-controls="accordion-1 .item-1"
              >
                <strong>DEX LISTING PLATFORM</strong>
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
                  This is where all decentralized exchanges (Dex) can be listed.
                  The good news is that anyone can list their Dex.
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
                <strong>Parameters for Dex Display</strong>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  For each Dex, the parameters being displayed are as follows:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
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
                    Number of Listed Coins
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
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>Anatomy of Dex Platform</strong>
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
                  When you click on each listed decentralized exchange, the Dex
                  Market of the exchange website will open up.
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

export default DexListingPlatform;
