import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";

const Edafacecharacteristics = () => {
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
              <h3 className="cha-header">
                Four Main Characteristics of EdaFace
              </h3>
              <div className="card-token mb-5 mt-5">
                <p>
                  <h4 className="token-header">Decentralisation</h4>
                </p>
                <p>
                  EdaFace has a decentralized system, which is in keeping with
                  the key feature of cryptocurrencies that eliminates
                  centralization. This offers users trustless and permissionless
                  interaction with the Crypto Market via EdaFace and, in
                  addition, anyone can list his project as long as the terms and
                  conditions of listing are met.
                </p>
              </div>
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="card-token mt-0 mb-5">
                <h4 className="token-header">Simplicity</h4>

                <p>
                  EdaFace is simple and easily navigatable by anyone. As such,
                  both newcomers and experienced users in the crypto industry
                  will enjoy the ease of using cryptocurrencies.
                </p>
              </div>
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="card-token mt-0 mb-5">
                <h4 className="token-header">Beautiful design</h4>

                <p>
                  Besides being a simple platform, EdaFace also has a modern,
                  beautiful design outlook that makes interaction in the crypto
                  industry quite friendly and welcoming.
                </p>
              </div>
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="card-token mt-0 ">
                <h4 className="token-header">Security</h4>

                <p>
                  EdaFace platform is safe, secure and reliable. It offers one
                  of the world’s most sophisticated security systems. Indeed,
                  the security of your crypto transactions is one of EdaFace’s
                  topmost priorities.
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

export default Edafacecharacteristics;
