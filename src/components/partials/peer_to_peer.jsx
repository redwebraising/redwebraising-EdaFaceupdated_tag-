import Footer2 from "./footer2";
import Nav from "./nav";

const PeerToPeer = () => {
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
                <strong>PEER-TO-PEER TRADING PLATFORM</strong>
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
                  This is the second compartment of the Crypto Reflector. This
                  P2P compartment allows traders to buy and sell their cryptos
                  on
                  <br /> EdaFace platform without the interference of a central
                  authority.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-2"
                aria-expanded="false"
                aria-controls="accordion-1 .item-2"
              >
                <strong>Division of P2P Trading Platform</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  The P2P has two main Divisions: Buy and Sell as discussed on
                  “How to Use the P2P Market.”
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ marginRight: 0, textAlign: "left" }}
          >
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>How to Use the P2P Market</strong>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  The Peer-to-Peer (P2P) platform facilitates direct trading
                  between sellers and buyers. The P2P trading is safe, fast and
                  convenient, using an algorithm that is simple and
                  understandable to any user.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is an absolutely transparent system in which there are no
                  intermediaries and all transactions take place between the
                  <br /> two parties directly.
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
                  The procedure involves three simple Phases.
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
                  Phase One:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Step 1: Create your offer to buy or sell with conditions that
                  suit YOU. Just fill in the fields, confirm the offer and wait
                  for someone to accept it!
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  You can also choose an offer created by another user, if the
                  conditions suit you. Just select an offer from the list
                  <br /> and accept it!
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Step 2: When both parties to the transaction join the offer,
                  EdaFace sends them a notification.
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
                  Phase Two:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Step 1: The buyer and seller are connected to the transaction
                  and can chat.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Step 2: Coins in the seller’s account are “frozen”. This is a
                  guarantee of transaction security.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Step 3: The seller of coins sends the buyer the details for
                  which you want to send money, in accordance with the terms of
                  the transaction.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Step 4: The buyer pays for the details and informs about this
                  in the transaction by attaching screenshots in the chat and
                  pressing the payment confirmation button.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Step 5: The seller verifies the payment and if the transfer is
                  successful, confirms the receipt of money.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Step 6: For security reasons, double authentication of EdaFace
                  is used for confirmation.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The three different charts are:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 30,
                    color: "#26b6d4",
                    marginRight: 0,
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Phase Three:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  Step 1: Frozen coins are automatically transferred from the
                  seller’s account to the buyer's account.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  Step 2: Users can rate the deal and write reviews to each
                  other. This will affect the reputation and in the future will
                  <br /> help other users in choosing deals.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  Step 2: Users can rate the deal and write reviews to each
                  other. This will affect the reputation and in the future will
                  <br /> help other users in choosing deals.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  Step 3: The deal is completed! All parties got what they were
                  counting on!
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "rgb(33,37,41)",
                    marginRight: 0,
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Important Note
                  <br />
                </p>
                <ul>
                  <li>
                    All transactions on EdaFace P2P Trading Platform are 100%
                    safe.
                  </li>
                  <li>
                    EdaFace acts as a guarantor!
                    <br />
                  </li>
                  <li>
                    Funds in the seller’s account are “frozen” until the
                    transaction is completed or cancelled.
                    <br />
                  </li>
                  <li>All chat correspondence is saved to avoid fraud.</li>
                  <li>
                    If the seller or buyer does not respond at the indicated
                    time, then the transaction can be cancelled.
                  </li>
                  <li>
                    If a dispute arises between the participants, the arbiter
                    EdaFace will join the transaction and will make a fair
                    decision.
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

export default PeerToPeer;
