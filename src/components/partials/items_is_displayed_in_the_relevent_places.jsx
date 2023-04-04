import Footer2 from "./footer2";
import Nav from "./nav";

const ItemsIsDisplayedInTheRelaventPlaces = () => {
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
                <strong>ITEMS IS DIPLAYED IN THE RELEVENT PLACES</strong>
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
                  Once the Seller clicks on Confirm Submission button, the
                  following 5 events MUST occur:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (a). Item will be Displayed on the Frontend of EdaFace Mall
                  for the Buyer
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (b). Records of displayed Item will appear as follows:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>Item details will appear in Seller’s email box</li>
                  <li>
                    Item will be stored in the EdaFace Mall account of the
                    Seller
                  </li>
                  <li>
                    The data of the item will be visible in the Backoffice for
                    EdaFace Admin
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
                <strong>Displayed Items on the Frontend of Edaface Mall</strong>
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
                  Once the Confirm Submission button is clicked, the item will
                  be displayed on the frontend of EdaFace Mall in the following
                  pattern:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (1). Continental Shopping Region
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Listed Item will be automatically allocated as follows:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    Under its Region
                    <br />
                  </li>
                  <li>
                    Under Its Country
                    <br />
                  </li>
                </ol>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (2). Category Platform
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Item will be displayed on its Category Platform:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <strong>Plaza --&gt; Shop</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (3). Item Identification
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The unique BIN (Blockchain Identifying Number) of the item
                  will be conspicuously displayed next to the item
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (4). Pictographic Display
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Item will be displayed in 3-D format to make it more
                    realistic
                    <br />
                  </li>
                  <li>Mobile item should have driving mobility</li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The unique BIN (Blockchain Identifying Number) of the item
                  will be conspicuously displayed next to the item
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (5). Brief Description of the Item
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The displayed item will carry its brief description.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (6). Websites (optional)
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The displayed item will carry all its chosen website URLs as
                  supplied by the Seller.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (7). Item Price Details
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (8). Additional Costs (where applicable)
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>
                    Shipping Cost within Country
                    <br />
                  </li>
                  <li>
                    Shipping Cost outside Country
                    <br />
                  </li>
                  <li>Installation Cost</li>
                  <li>
                    Any other Cost
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (9). Item Payment Options
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The payment option selected by the Seller will be clearly
                  indicated:
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>
                    Accepts only Crypto
                    <br />
                  </li>
                  <li>
                    Accepts only Fiat
                    <br />
                  </li>
                  <li>
                    Accepts both Crypto and Fiat
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (10). Rating
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The listed item will have Option Rating vote of 1 to 5 star by
                  users
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (11).<strong>Buy Now</strong> button
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  This button is for the buyer to click on.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Once the Buy Now button is clicked on, the{" "}
                  <strong>Buy Page</strong> will be generated. (This is
                  discussed further below).
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

export default ItemsIsDisplayedInTheRelaventPlaces;
