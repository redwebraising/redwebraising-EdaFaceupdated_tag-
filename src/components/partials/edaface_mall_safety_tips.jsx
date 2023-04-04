import Footer2 from "./footer2";
import Nav from "./nav";

const EdafaceMallSafetyTips = () => {
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
                <strong>EDAFACE MALL SAFETY TIPS</strong>
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
                <ol style={{ marginTop: 10 }}>
                  <li>
                    Meet in a&nbsp;public space&nbsp;to view and testrun the
                    item and exchange money.
                    <br />
                  </li>
                  <li>
                    Never send your item&nbsp;before receiving the money.
                    <br />
                  </li>
                  <li>
                    Use safer, traceable method to send item and exchange money.
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

export default EdafaceMallSafetyTips;
