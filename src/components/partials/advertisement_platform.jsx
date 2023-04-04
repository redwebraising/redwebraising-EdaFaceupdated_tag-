import Footer2 from "./footer2";
import Nav from "./nav";

const AdvertisementPlatform = () => {
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
                <strong>ADVERTISEMENT PLATFORM</strong>
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
                  This is a platform where Crypto Projects can advertise their
                  cryptos on Crypto Reflector. Here you will keep seeing new and
                  old projects being advertised. Before you buy any of them,
                  remember to always DYOR, which stands for{" "}
                  <em>Do Your Own Research</em>.<br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Crypto Verification Centre on EdaFace will guide and
                  assist you to research on any crypto you are interested in.
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
                <strong>Conditions for Advertisement are:</strong>
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
                  If you are interested in advertising your crypto on EdaFace,
                  you will need to:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    Meet EdaFace’s Terms of Services.
                    <br />
                  </li>
                  <li>Pay advertising fee with Eda Token.</li>
                </ol>
                <p className="mb-0">
                  Note that no pornographic images are allowed on EdaFace
                  Advertisement Platform.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer2></Footer2>
    </>
  );
};

export default AdvertisementPlatform;
