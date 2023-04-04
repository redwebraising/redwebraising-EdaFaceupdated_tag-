import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";

const Utility = () => {
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
                <h3 className="token-header">Utility Cases</h3>
                <p>Eda Token has multi-functional use cases.</p>
                <p>
                  <span className="token-holder">
                    The basic 13 use cases for EDA Token are as follows:
                  </span>
                </p>

                <p>1. Payment for listing of cryptocurrencies on EdaFace</p>
                <p>2. Payment for listing of Cex on EdaFace</p>
                <p>3. Payment for listing of Dex on EdaFace</p>
                <p>4. Payment for listing of digital literatures on EdaFace</p>
                <p>
                  5. Payment for digital literature production and transaction
                  on EdaFace
                </p>
                <p>
                  6. Payment for minting and transactions of NFTs on EdaFace
                </p>
                <p>7. Payment for using EdaFace Lanchpad</p>
                <p>8. EDA Token will be involved in staking</p>
                <p>
                  9. EDA Token will be used for liquidity supply, e.g. yield
                  farming
                </p>
                <p>10. EDA Token will be the currency for Eda Digital Mall</p>
                <p>
                  11. Eda Token will be the currency for enrolment in EDA’s
                  School of Cryptocurrencies
                </p>
                <p>
                  12. EDA Token will be the currency for placement of
                  advertisement on EdaFace
                </p>
                <p>
                  13. Eda Token will be the means of transaction on the Digital
                  Clinic
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

export default Utility;
