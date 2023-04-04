import React from "react";
import { useEffect } from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";

const Stakability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>

      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-token mb-5">
                <h3 className="token-header">Stakability</h3>
                <p>
                  Another benefit you get from Eda Token is that you can stake
                  your tokens and enjoy a growth rate of 5% annual percentage
                  yield (APY).
                </p>
                <p>
                  <span className="token-holder">
                    Staking Liquidity Supply (LS)
                  </span>
                </p>

                <p>
                  Maximum Token for Staking = Maximum Supply – Burnt at Listing
                </p>
                <p>
                  {" "}
                  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                  &emsp; = 100 trillion – 40 trillion = 60 trillion
                </p>
                <p>
                  The following calculations presume that all 60 trillion will
                  be staked.
                </p>
                <p>
                  Interest in the 1st year at 5% APY for 60 trillion staked =
                  0.05 x 60 trillion = 3 trillion
                </p>
                <p>
                  Thus, Principal for the 2nd year: 60 trillion + 3 trillion =
                  63 trillion
                </p>
                <p>
                  Interest for 2nd year at 5% APY = 63 trillion x 0.05 = 3.15
                  trillion
                </p>
                <p>
                  Therefore, Principal for the 3rd year: 63 trillion + 3.15
                  trillion = 66.15 trillion
                </p>
                <p>
                  Interest for 3rd year at 5% APY = 66.15 trillion x 0.05 =
                  3.3075 trillion
                </p>
                <p>
                  Hence, total compounded interest for 3 years at 5% APY =
                  (3+3.15+3.3075) trillion = 9.4575 trillion.
                </p>
                <p>
                  In summary, what these calculations imply is that by staking
                  your Eda Token you’ll be receiving a compounded yield of 5%
                  APY.
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card-token mt-0">
                <h3 className="token-header">Lock and Release Measures</h3>
                <p>
                  To further enhance stability and progressive price movement,
                  the following Lock and Release Measures will be effected:
                </p>

                <p>(a). Team allocation will be locked for 12 months</p>
                <p>
                  (b). Monthly release of 10% per wallet per month for ICO
                  purchases
                </p>
                <p className="token-holder">
                  Again, note that these measures are designed to protect and
                  stabilize the value of Eda Token, and enhance its price
                  appreciation, thereby rewarding long term holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Stakability;
