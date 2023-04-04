import Footer2 from "./footer2";
import Nav from "./nav";

const ExpiredShopRental = () => {
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
                <strong>Expired Shop Rental Fee</strong>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-1"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  (a). Once the Shop Rental Fee is about to expire, the Seller
                  will receive notices from EdaFace Mall Admin for rent renewal.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (b). If the Shop Rent expires, the Shop will become
                  deactivated. That is, the Shop will not be clickable again.
                  Hence, access to the listed items in the Shop will no longer
                  be feasible.
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

export default ExpiredShopRental;
