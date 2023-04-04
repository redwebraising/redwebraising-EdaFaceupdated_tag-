import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
// import check from "../../images/check.svg";
import bookmark from "../../images/bookmark.svg";

const NFTMarketplace = () => {
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
                <h3 className="token-header">Component 5: NFT Marketplace</h3>
                <h4 className="token-header">Introduction</h4>

                <p>
                  <span className="token-holder">
                    EdaFace NFT Marketplace is where non-fungible tokens (NFT)
                    will be created, displayed, and traded. It is a uniquely
                    well-thought-out platform that offers all newcomers and old
                    members seamless and simplified transactions in NFTs for
                    their profiting.
                  </span>
                </p>
                <h4 className="token-header">Target Niche</h4>

                <p>
                  <span className="token-holder">
                    Any crypto users such as artists, sportsmen and women,
                    politicians, institutions, traders, scientists, etc. can
                    create, display or trade NFTs.
                  </span>
                </p>

                <h4 className="token-header">Mutichain Platform</h4>

                <p>
                  <span className="token-holder">
                    EdaFace NFT Marketplace is a multichain platform. It handles
                    all the EVM (Ethereum Virtual Machine) supported chains as
                    well as non-EVM supported chains.
                  </span>
                </p>
                <p>
                  <span className="token-holder">
                    Examples of the EVM-supported chains that will ultimately be
                    part of EdaFace NFT Marketplace are: Ethereum, BNB Smart
                    Chain, Solana, Polygon, Polkadot, Avalanche, Algorand, Huobi
                    ECO Chain, Fantom, Arbitrum, and OKEx Chain.
                  </span>
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

export default NFTMarketplace;
