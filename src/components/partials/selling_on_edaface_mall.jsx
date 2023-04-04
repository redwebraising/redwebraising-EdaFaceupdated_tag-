import Footer2 from "./footer2";
import Nav from "./nav";

const SellingOnEdafaceMall = () => {
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
                <strong>SELLING ON EDAFACE MALL</strong>
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
                  To Sell on EdaFace Digital Mall, the Seller must first Open an
                  Account as a User.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  After EdaFace Mall account opening, the Seller will then carry
                  out the following activities to be able to list his item:
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>
                    Rents a Shop
                    <br />
                  </li>
                  <li>Registers an Item for Sale</li>
                  <li>
                    Submits the Item for Display
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

export default SellingOnEdafaceMall;
