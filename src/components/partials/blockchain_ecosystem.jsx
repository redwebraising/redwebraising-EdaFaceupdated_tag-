import Footer2 from "./footer2";
import Nav from "./nav";

const BlockchainEcosystem = () => {
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
                <strong>BLOCKCHAIN ECOSYSTEM</strong>
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
                  This is the Second Compartment of EdaFace Fourth Component.
                  The Blockchain Ecosystem is a platform where users can search
                  for a crypto on blockchain explorers.
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
                <strong>Display Parameters</strong>
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
                  The Blockchain Ecosystem will display:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (i). The list of POW blockchains
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (ii). The list of POS blockchains (delegated and nondelegated)
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (iii). The list of POA blockchains
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (iv). The list of combined blockchain algorithms
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (v). Check which cryptocurrency is native to a particular
                  blockchain.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Thus, a user can type in the name of a crypto or its contract
                  address, and the blockchain explorer details of the
                  <br /> cryptocurrency should be revealed:
                  <br />
                </p>
                <ul style={{ marginTop: 20 }}>
                  <li>Official name of the crypto</li>
                  <li>
                    Symbol
                    <br />
                  </li>
                  <li>Blockchain type</li>
                  <li>
                    Decimals – referring to how much fractions you can divide
                    the crypto
                  </li>
                  <li>
                    Website – if there is a website for the crypto project, it
                    may be seen as well
                    <br />
                  </li>
                  <li>Total coin supply</li>
                  <li>
                    Total coin burnt
                    <br />
                  </li>
                  <li>
                    Total coin burnt
                    <br />
                  </li>
                  <li>Price chart movement</li>
                  <li>
                    Holders – referring to the number of wallet addresses that
                    hold the crypto
                  </li>
                  <li>
                    Transfers – referring to each transaction that involves the
                    crypto.
                  </li>
                  <li>
                    Analytics – gives the listing date and graphical summary of
                    transactions involving the crypto.
                    <br />
                  </li>
                </ul>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  These and many other information about a crypto can be seen on
                  the explorer. Meaning, you can see all the wallets that
                  <br /> hold the crypto and how much coins are in each of the
                  wallet but will not be able to identify the owners of such
                  wallets.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Note:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (a). EdaFace may start with few number of
                  blockchain/smartchain, e.g. Ethereum, Binance, Solana,
                  Cardano, Polkadot, Polygon (Matic), Avalanche, Algorand, etc.
                  Then increase the number of blockchain systems as the platform
                  matures.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  (b). The Blockchain Ecosystem compartment is a modified
                  superior version of Poocoin.app and Dextools.io.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>Benefits for Eda Token:</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  The Crypto Verification offers free services. The reasons for
                  this are:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  1. To help fight off scams in the Crypto Market and sanitize
                  crypto transactions
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  2. To drive in traffic to EdaFace
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

export default BlockchainEcosystem;
