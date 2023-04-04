import Footer2 from "./footer2";
import Nav from "./nav";

const SellerRegistersAnItemForSale = () => {
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
                <strong>SELLER RENTS A SHOP</strong>
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
                  Once the Seller has paid the rental fee for a Shop, he can
                  click on a SALES FORM button and a Sales Form will pop out.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Sale Form is the page where the Seller will enter the
                  details of his item for sale as indicated below. &nbsp;
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Note that the more details you provide, the higher the chance
                  for your item to attract a buyer and the easier the buyer will
                  be able to contact you.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(1). Shop</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Seller will indicate the<strong> </strong>Structure of his
                  Shop (that is, the Shop name and description).
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(2). Item Imagery</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Here, the Seller will upload three different pictures or
                  videos of the item he plans to sell.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(3). Item Description</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Seller will give Brief Description of his Item (maximum 30
                  words).
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(4). Websites (optional)</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  If he has a website for his item, he may enter the website
                  URL.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(5). Selling Price</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Seller will input the Selling Price (in USD) of his Item.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(6). Additional Cost (where applicable)</strong>
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Shipping Cost within Country
                    <br />
                  </li>
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
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(7). Seller Contact Details</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Next, the Seller will have to indicate his contact details
                  with which the potential buyer will contact him. Such details
                  include:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Seller Names (he may choose to be anonymous in which case
                    his names will not be displayed)
                    <br />
                  </li>
                  <li>Phone Number (optional)</li>
                  <li>
                    Email address
                    <br />
                  </li>
                  <li>
                    Social Media contacts (e.g. WhatsApp, Telegram, etc.)
                    (optional)
                    <br />
                  </li>
                  <li>
                    Country of Residence
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Seller will input the Selling Price (in USD) of his Item.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>(8). Item Payment Options</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Seller will indicate any one of the followings as his payment
                  option:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default SellerRegistersAnItemForSale;
