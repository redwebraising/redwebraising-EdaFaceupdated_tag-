import Footer2 from "./footer2";
import Nav from "./nav";

const ShopRentalFee = () => {
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
                <strong>SHOP RENTAL FEE</strong>
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
                <ol style={{ marginTop: 10 }} type="a">
                  <li>The Shop Rental Fee has four Ads Options</li>
                  <li>You can choose any Ads Option that suits you.</li>
                  <li>
                    The Shop Rental Fee payment is made only with Eda Token.
                    <br />
                  </li>
                  <li>
                    You can change your Ads Option at any time.
                    <br />
                  </li>
                  <li>
                    Note that the Shop Rental Fee is non-Refundable
                    <br />
                  </li>
                </ol>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  You can view the Ads Options of the Shop Rental Fee here…
                  (hyperlinked please)
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Note: To pay the Shop Rental Fee, click here&nbsp;(hyperlink
                  here, please…{" "}
                  <a href="https://launchpad.edaface.com/login">
                    https://launchpad.edaface.com/login
                  </a>
                  ).
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

export default ShopRentalFee;
