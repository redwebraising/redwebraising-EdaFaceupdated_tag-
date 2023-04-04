import Footer2 from "./footer2";
import Nav from "./nav";

const ThreeKindsOfNFT = () => {
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
                <strong>THREE KINDS OF NFT ON EDAFACE MARKETPLACE</strong>
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
                  Based on what they represent, NFTs on EdaFace are divided into
                  three kinds:
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
                <strong>(1). Fine Art NFTs</strong>
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
                  These are digital images of visual arts considered to have
                  been created primarily for aesthetic purposes and judged for
                  their beauty and meaningfulness. They include:
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>Paintings</li>
                  <li>Sculptures</li>
                  <li>
                    Drawings
                    <br />
                  </li>
                  <li>
                    Watercolors
                    <br />
                  </li>
                  <li>Graphics </li>
                  <li>
                    Architecture &nbsp;
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="false"
                aria-controls="accordion-1 .item-3"
              >
                <strong>(2). Collectible NFTs</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  A collectible is typically a manufactured item designed for
                  people to acquire as possession. Popular collectible NFTs
                  include:
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>Stamps</li>
                  <li>Ancient coins</li>
                  <li>Rocks</li>
                  <li>Family artifacts</li>
                  <li>
                    Religious relics, etc.
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-4"
                aria-expanded="true"
                aria-controls="accordion-1 .item-4"
              >
                <strong>(3). Gaming NFTs</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-4"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  These are digitalised games that can be traded as NFTs. They
                  include:
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>
                    These are digitalised games that can be traded as NFTs. They
                    include:
                    <br />
                  </li>
                  <li>
                    Sporting Fixtures, e.g. player’s cards, player’s stats,
                    player’s best moves, player’s collectibles like their
                    wearables of jerseys, T-shirts, shoes, equipment, etc.&nbsp;
                    <br />
                  </li>
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

export default ThreeKindsOfNFT;
