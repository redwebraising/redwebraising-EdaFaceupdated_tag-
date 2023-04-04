import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";

const Character = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>

      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cha-header">Characteristics of Eda Token</h3>
              <p className="cha-sub-header">
                Eda Token has the following characteristics that make it very
                unique:
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card-token-2">
                <h3 className="token-header"> Hyper-Deflationary Mechanisms</h3>
                <p className="intro-token">
                  Eda Token is hyper-deflationary, which means the amount of
                  tokens in circulation will progressively decrease over time.
                  This will enhance continuous price growth. The
                  hyper-deflationary mechanisms built into Eda Token are as
                  follows:
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    {" "}
                    Continuous Token Burning:
                  </span>
                  4% of anti-dumping transaction fee
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    {" "}
                    Periodical Automatic BuyBack:
                  </span>
                  1% of anti-dumping transaction fee
                </p>
                <p className="token-caster">
                  <span className="token-holder"> Marketing:</span>2% of
                  anti-dumping transaction fee
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-token-2">
                <h3 className="token-header">Holder’s Incentive Mechanisms</h3>
                <p className="intro-token">
                  For holding Eda Token, you’ll enjoy not only continuous
                  increase in the number of the token in your wallets, but also
                  increase in LP liquidity for your trading. This is because of
                  the following mechanisms that have been built into Eda Token:
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    {" "}
                    Distribution to Holders:
                  </span>
                  2% of anti-dumping transaction fee
                </p>
                <p className="token-caster">
                  <span className="token-holder"> Distribution to LP: </span>1%
                  of anti-dumping transaction fee
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    {" "}
                    Referral Bonus for Referrer:{" "}
                  </span>{" "}
                  10% of referee’s purchase
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    {" "}
                    Purchase Bonus for Buyer:
                  </span>
                  3% of every purchase
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card-token-2">
                <h3 className="token-header"> Anti-Whale Mechanisms</h3>
                <p className="intro-token">
                  We encourage everyone to hold Eda Token for a long time in
                  order to enjoy immense growth benefits but discourage massive
                  dumping of the token. To ensure these, the following
                  mechanisms are built into Eda Token:
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    Maximum Holding per Wallet:
                  </span>
                  0.5% of Total Supply
                </p>
                <p className="token-caster">
                  <span className="token-holder">
                    Maximum Sell per Transaction:
                  </span>
                  0.1% of Total Supply
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-token-2">
                <h3 className="token-header">Anti-dumping Transaction Fee</h3>
                <p className="intro-token">
                  10% transaction fee to deter dumping will be applied for each
                  sell. This 10% fee will be distributed via the following
                  mechanisms that will ensure not only continuous price growth
                  but also continuous increase in the number of tokens in the
                  holders’ wallets.
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

export default Character;
