import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";
 

const Introduction = () => {
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
                <h3 className="token-header">Introduction</h3>

                <p>
                  <span className="token-holder">How to Use EdaFace</span>
                </p>

                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  EdaFace is a user interface aggregator that brings all the
                  various functionalities of the crypto industry onto a single
                  platform.
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  EdaFace is the face of the crypto world; fully decentralized
                  with a beautiful design to make crypto transactions simple,
                  fast and secure.
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  On EdaFace, you can track your favorite cryptos, Cex and Dex,
                  and engage in DeFi. You can check, trade, and mint NFTs,
                  monitor the metaverse world, transact in all forms of digital
                  products such as digital music and books, as well as track
                  crypto news, etc.
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  You can advertise, launch and crowd fund your crypto project
                  via EdaFace Launchpad.
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  But if you want to scam others, EdaFace has bad news for you!
                </p>
                <p>
                  <img
                    src={bookmark}
                    className="img-fluid check-push"
                    alt="check"
                  />
                  EdaFace does identify crypto scams via its Crypto Verification
                  Centre, especially rug pulls, long before they occur. In other
                  words, EdaFace helps all crypto lovers to avoid scams. This is
                  the first of its kind in the crypto industry.
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

export default Introduction;
