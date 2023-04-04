import Footer2 from "./footer2";
import Nav from "./nav";

const EdafacePlantation = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container col-xxl-8 px-4 py-5 resources">
        <div className="accordion" role="tablist" id="accordion-1">
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="false"
                aria-controls="accordion-1 .item-1"
              >
                <strong>EDAFACE PLANTATION</strong>
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
                  This is EdaFace decentralized exchange with its unique answers
                  to liquidity provision in pools. Here, you can supply LP to
                  pools or even create your pools for traders. EdaFace
                  Plantation is indeed a plantation where you can digitally
                  plant and reap daily rewards. It is a superior version of
                  BabySwap and PancakeSwap.
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
                <strong>Divisions</strong>
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
                  When you click on EdaFace Plantation, the followings will open
                  up:
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
                  (a). Swap
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  When you click on EdaFace Plantation, the followings will open
                  up:
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
                  (b). Liquidity
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Here is where you can create the Liquidity Provider (LP) pair
                  for staking.
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
                  (c). Farms
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is where you do liquidity mining, which is also called
                  Yield Farming.
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
                  (d). Pools
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This is where you stake your crypto in the blockchain pools.
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
                <strong>Benefits for Eda Token</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    Payment of Dex listing will be done with Eda Token
                    <br />
                  </li>
                  <li>
                    Payment for Dex transactions (Swapping, Yield Farming, Pool
                    staking, etc.) will be done with Eda Token
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

export default EdafacePlantation;
