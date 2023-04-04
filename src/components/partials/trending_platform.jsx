import Footer2 from "./footer2";
import Nav from "./nav";

const TrendingPlatform = () => {
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
                <strong>TRENDING PLATFORM</strong>
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
                <p className="mb-0">
                  This is the fourth Compartment of the Crypto Reflector, and it
                  is where you will see the latest trend in the crypto industry.
                  This trend updates itself almost every hour. That is, it is a
                  fast-moving train to catch up with the rapidly changing trends
                  in the Crypto industry.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  If you are serious about crypto investment, you should better
                  pay attention to EdaFace Trending Platform.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  To make it easier, you can subscribe to{" "}
                  <strong>EdaFace Trending News</strong> so that you can get
                  alerts on any of your electronic devices once a new trend is
                  brewing up and about to explode. In this way, you can, not
                  only keep track of trend development, but will be privileged
                  to have insight news before it bursts out in the market.
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

export default TrendingPlatform;
