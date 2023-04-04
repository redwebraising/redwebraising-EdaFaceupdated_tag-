import Footer2 from "./footer2";
import Nav from "./nav";

const SellerSubmitsTheItemForDisplay = () => {
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
                <strong>SELLER SUBMITS THE ITEM FOR DISPLAY</strong>
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
                  After filling in the Sales Form, the next step is to submit it
                  by clicking on the <strong>Submit</strong> button.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Once the Seller clicks the Submit button, a page should pop
                  out that carries the following five things:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (a). A summary of the Sales Form with all the filled details
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (b). A message that requires the Seller to confirm if all the
                  details are correctly entered
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (c). A ticked button that shows the confirmation of paid Ads
                  Option of the Rental Shop Fee.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (d). The Seller will be asked to review the Terms of Use,
                  Disclaimers, Listing Terms and Conditions, Privacy Policy, and
                  all legal&nbsp; requirements of EDA, and tick the appropriate
                  box.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (If disagreed, the Seller won’t be able to submit the Sales
                  Form).
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (e). Once all the above parameters have been successfully
                  entered, the Seller can go ahead and click Confirm Submission.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  EdaFace Mall is decentralized, hence, once the{" "}
                  <strong>Confirm Submission</strong> button is clicked, the
                  item will be listed automatedly and becomes live on EdaFace
                  Mall in accordance with its placement selections.
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

export default SellerSubmitsTheItemForDisplay;
