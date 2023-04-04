import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import bookmark from "../../images/bookmark.svg";

const Airdrops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="card-token">
                <h3 className="token-header">Airdrops & Bonuses</h3>
                <p>The free airdrops will be of two kinds:</p>
                <p>
                  <span className="token-holder"> Purchase Bonus:</span>
                </p>
                <p>
                  For every purchase, the buyer will receive extra tokens at 3%
                  of his total purchase.
                </p>

                <p>
                  <span className="token-holder"> Referral Bonus:</span>
                </p>
                <p>
                  In addition, when you refer your family members, friends,
                  colleagues, or anyone you will receive 10% extra tokens for
                  every purchase they make.
                </p>
              </div>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="card-token mt-0">
                <h3 className="token-header">Unsold Tokens</h3>

                <p>
                  If there are any unsold tokens at the end of the ICO sales,
                  the following will apply:
                </p>

                <p>
                  {" "}
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  40% of unsold tokens will be burnt
                </p>
                <p>
                  {" "}
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  30% of unsold tokens will be added to liquidity
                </p>
                <p>
                  {" "}
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  30% of unsold tokens will go for marketing.
                </p>
              </div>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Airdrops;
