import React from "react";
import chevron from "../../images/chevron.svg";
import profile from "../../images/profile.svg";
import secure from "../../images/secure.svg";
import buy from "../../images/buy.svg";
import coin from "../../images/coin.svg";
const How = () => {
  return (
    <div>
      <div className="bac-how">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="main-heading">Characteristics of EdaFace</h3>

              <h6 className="sub-heading">Decentralisation</h6>
              <p className="body-text">
                EdaFace is a DECENTRALISED structure. This is in keeping with
                the key feature of cryptos that eliminates centralization.
              </p>

              <h6 className="sub-heading">Simplicity</h6>
              <p className="body-text">
                EdaFace is simple and easily navigable by anyone. As such, both
                newcomers and experienced users in the crypto industry will
                enjoy the ease of using cryptocurrencies.
              </p>
              <a
                href="https://app.edaface.com/sign-up"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="btn-edaface">
                  Get Started{" "}
                  <span>
                    <img
                      src={chevron}
                      className="img-fluid"
                      alt="button-icon"
                    />
                  </span>
                </button>
              </a>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-how">
                    <img
                      src={profile}
                      className="img-fluid ico-prof"
                      alt="profile"
                    />
                    <h3 className="card-header-edaface">Create account</h3>
                    <p className="card-body-edaface">
                      EdaFace Core, however, is a full node, meaning it helps
                      verify and transmit other token transactions across the
                      network and stores copy of the entire blockchain.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-how">
                    <img
                      src={secure}
                      className="img-fluid ico-prof"
                      alt="secure"
                    />
                    <h3 className="card-header-edaface">Safe & Secure</h3>
                    <p className="card-body-edaface">
                      We take careful measures to ensure that your Token is as
                      safe as possible. Offline storage provides an important
                      security measure against theft or loss.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-how">
                    <img src={buy} className="img-fluid ico-prof-2" alt="buy" />
                    <h3 className="card-header-edaface">Buy & Sell</h3>
                    <p className="card-body-edaface">
                      EdaFace works with exchange partners all around the world
                      to make buying token in your wallet both a seamless and
                      secure experience.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-how">
                    <img
                      src={coin}
                      className="img-fluid ico-prof-3"
                      alt="coin"
                    />
                    <h3 className="card-header-edaface">Aesthetic Design</h3>
                    <p className="card-body-edaface">
                      Besides being a simple platform, EdaFace also has a
                      modern, beautiful design outlook that makes interaction in
                      the crypto industry quite friendly and welcoming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
