import Footer2 from "./footer2";
import Nav from "./nav";

const HowBuyersCanMakeAPurchase = () => {
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
                <strong>HOW BUYERS CAN MAKE A PURCHASE&nbsp;</strong>
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
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (1).<strong>Buy Now&nbsp;</strong>button
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Once the user clicks on <strong>Buy Now</strong> button, the
                  buyer will be prompted to Log into his account or Open an
                  Account, if he hasn’t done so.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Once he has logged into his account, he can then proceed to
                  click on the Buy Now button, which will cause the{" "}
                  <strong>Buy Page&nbsp;</strong>to pop out.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  <strong>(2). Buy Page</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Buy Page will show the following details:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontWeight: "bold",
                  }}
                >
                  (a). Item Price Details
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontWeight: "bold",
                  }}
                >
                  (b). Additional Costs (where applicable)
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>Shipping Cost within Country</li>
                  <li>Shipping Cost outside Country</li>
                  <li>
                    Installation Cost
                    <br />
                  </li>
                  <li>
                    Any other Cost
                    <br />
                  </li>
                </ul>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontWeight: "bold",
                  }}
                >
                  (c). Seller Contact Details
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  All the Seller’s contact details will be conspicuously
                  displayed next to item, which are:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Seller’s Names (if he chooses to be anonymous, his names
                    will not be displayed)
                    <br />
                  </li>
                  <li>
                    Phone Number (optional)
                    <br />
                  </li>
                  <li>
                    Email address
                    <br />
                  </li>
                  <li>
                    Social Media contacts (e.g. WhatsApp, Telegram, etc.)
                    (optional)
                    <br />
                  </li>
                </ul>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontWeight: "bold",
                  }}
                >
                  (d). Buyer Contact Details
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This will include:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Buyer’s Name
                    <br />
                  </li>
                  <li>
                    Buyer’s Phone Number (optional)
                    <br />
                  </li>
                  <li>
                    Buyer’s Email
                    <br />
                  </li>
                  <li>
                    Buyer’s Social Media links (optional)
                    <br />
                  </li>
                </ul>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontWeight: "bold",
                  }}
                >
                  (e). Send Message
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    A place to type in a message to Seller
                    <br />
                  </li>
                  <li>
                    SEND button
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Once the Buyer clicks the SEND button, the typed message with
                  all the above details in the <strong>Buy Page</strong> will be
                  sent to all the Seller’s&nbsp; contact details.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 30,
                    color: "#212529",
                    fontWeight: "bold",
                  }}
                >
                  <strong>Important Note:</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Buyer can contact Seller via any of the Seller’s contact
                  details.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 30,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (3). Acknowledgement of Payment
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  When Buyer clicks on the SEND button and the message is
                  successfully sent to the Seller, an acknowledgment page for
                  using EdaFace Mall will pop out.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 30,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (4). Related Advertised Items
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Below the advertised or sold item will be related items for
                  purchase so that the Buyer can see other displayed options
                  that he may need for further purchase.
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

export default HowBuyersCanMakeAPurchase;
