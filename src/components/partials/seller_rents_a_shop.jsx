import Footer2 from "./footer2";
import Nav from "./nav";

const SellerRentsAShop = () => {
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
                  (1). After a user opens an EdaFace Mall account and logs in,
                  the user can either click on a button (---{" "}
                  <strong>Enter Mall Plazas</strong> ---), which will take him
                  into Mall Plazas from where he can access the shops, or he can
                  click on the <strong>SELL ITEM</strong> button if he plans to
                  list an item for sale.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (2). If the user plans to list an item for sale and clicks on
                  the SELL ITEM button, he will be taken to the Continental
                  Shopping Region page, where he will select which continental
                  region he wants to sell his item.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  As he places his cursor on any of the Continental Shopping
                  Region, there will be a dropdown menu for all countries within
                  the region.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>Region --&gt; Country</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (3). Once a country is clicked, a page will open up to reveal
                  the Mall Plazas, which are the first category platforms. The
                  Seller will need to select the Plaza that he plans to list his
                  item for sale.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (4). Once the Seller clicks on any of the Plaza, he will be
                  prompted to pay the Shop Rental Fee:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (5). Shop Rental Fee
                  <br />
                </p>
                <ol style={{ marginTop: 20 }} type="a">
                  <li>
                    EdaFace Mall system will automatedly and instantly verify
                    and confirm if Shop Rental Fee has been paid and which of
                    the Ads Option of the Shop Rental Fees was paid.
                    <br />
                  </li>
                  <li>
                    The Shop Rental Fee has four Ads Options (hyperlink here,
                    please)
                  </li>
                  <li>
                    You can choose any Ads Option that suits you.
                    <br />
                  </li>
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
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>Note</strong>: To pay the Shop Rental Fee, click
                  here&nbsp;(hyperlink here, please…{" "}
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

export default SellerRentsAShop;
