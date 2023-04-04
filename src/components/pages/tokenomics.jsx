import React from "react";
import { useEffect } from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";

import Chart from "../partials/chart";

const Tokenomics = () => {
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
              <div className="card-token mb-0">
                <h3 className="token-header">Tokenamics</h3>
                <p className="intro-token">
                  Eda Token is the native utility token for EdaFace and the EDA
                  ecosystem in general. The token will be an ethical,
                  community-driven cryptocurrency that rewards long-term holding
                  with high-yield interest rates.
                </p>
                <p className="token-caster">
                  <span className="token-holder">Name:</span>Eda Token
                </p>
                <p className="token-caster">
                  <span className="token-holder">Abbreviation:</span>EDA
                </p>
                <p className="token-caster">
                  <span className="token-holder">Blockchain:</span>Binance
                  Smartchain
                </p>
                <p className="token-caster">
                  <span className="token-holder">Format:</span>BEP20 Token
                </p>
                <p className="token-caster">
                  <span className="token-holder">Decimals:</span>18
                </p>
                <p className="token-caster">
                  <span className="token-holder">Maximum supply:</span>100
                  trillion
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card-token mt-5">
                {/* Ddb react chart */}
                {/* <img src={piechart} className="img-fluid" alt="piechart" /> */}
                <h3 className="token-header">Token Distribution (%) </h3>
                <Chart></Chart>

                <p className="token-caster">
                  <span className="token-holder">Once-off Burnt:</span> 40%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Seed Phase: </span> 5%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Team allocation:</span> 17%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Staking allocation:</span> 10%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Blockchain development:</span>
                  10%
                </p>
                <p className="token-caster">
                  <span className="token-holder">ICO Sales:</span> 11%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Marketing:</span> 3%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Airdrops:</span> 2%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Exchange Listing:</span>
                  1%
                </p>
                <p className="token-caster">
                  <span className="token-holder">Welfare: </span>1%
                </p>
              </div>
              <div className="card-token mt-0">
                <h3 className="token-header">Audit/Security of Token</h3>
                <p className="intro-token">
                  Eda Token’s contract is being audited by Certik. We’ll let you
                  know once it has been finalized.
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

export default Tokenomics;
