import Footer2 from "./footer2";
import Nav from "./nav";

const UserRights = () => {
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
                <strong>USER RIGHTS&nbsp;</strong>
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
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  In his EdaFace Mall account, a User (a Seller or Buyer) should
                  be able to perform the following functions:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>Delete his User Account</li>
                  <li>Delete any item he has registered</li>
                  <li>
                    Modify the User Contact Details
                    <br />
                  </li>
                  <li>
                    Modify details of his listed item for sale
                    <br />
                  </li>
                  <li>
                    Reset his account password
                    <br />
                  </li>
                  <li>
                    Upgrade his Shop Rental Fee
                    <br />
                  </li>
                  <li>
                    Change Item Payment Option.
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

export default UserRights;
