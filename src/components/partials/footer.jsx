import React from "react";
import { Link } from "react-router-dom";
import edafacelogo from "../../images/edafacelogo.png";
import chevron from "../../images/chevron.svg";

const Footer = () => {
  return (
    <div>
      <div className="bac-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div class="row">
                <div className="col-6 col-sm-4">
                  <h4 className="link-header">Company</h4>
                  <Link to="/vision" className="link-footer li-tweak">
                    <li>Vision</li>
                  </Link>
                  <Link to="/mission" className="link-footer li-tweak">
                    <li>Mission</li>
                  </Link>
                  <Link to="/core" className="link-footer li-tweak">
                    <li>Core Values</li>
                  </Link>
                  <Link to="/contact" className="link-footer li-tweak">
                    <li>Contact us</li>
                  </Link>
                  <Link to="/branding" className="link-footer li-tweak">
                    <li>Branding</li>
                  </Link>
                  <Link to="/founders" className="link-footer li-tweak">
                    <li>Team</li>
                  </Link>
                  <Link to="" className="link-footer li-tweak">
                    <li>Careers</li>
                  </Link>
                  <Link to="/eda" className="link-footer li-tweak">
                    <li>FAQ</li>
                  </Link>
                </div>
                <div className="col-6 col-sm-4">
                  <h4 className="link-header">Products</h4>
                  <a
                    href="https://launchpad.edaface.com/login"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>Eda Token</li>
                  </a>
                  <a
                    href="https://www.digitalclinicnet.com/"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>Digital Clinic</li>
                  </a>
                  <a
                    href="https://www.eda.social/"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>School of Cryptos</li>
                  </a>
                  <a
                    href="https://launchpad.edaface.com/white-paper"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>Litepaper</li>
                  </a>
                  <Link to="/tokenomics" className="link-footer li-tweak">
                    <li>Whitepaper</li>
                  </Link>
                  <Link to="" className="link-footer li-tweak">
                    <li>Welfare Donations</li>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <img
                src={edafacelogo}
                className="img-fluid logo-footer"
                alt="footer logo"
              />
              <h4 className="news-letter-header">Subscribe Our Newsletter</h4>

              <div className="form-border">
                <form>
                  <input
                    type="email"
                    placeholder="Enter Email address"
                    className="form-email"
                  ></input>{" "}
                  <button className="submit-news">
                    Subscribe
                    <span>
                      <img
                        src={chevron}
                        className="img-fluid"
                        alt="button-icon"
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-6 col-sm-4">
                  <h4 className="link-header">Legal</h4>
                  <Link to="/terms" className="link-footer li-tweak">
                    <li>Terms of Use</li>{" "}
                  </Link>
                  <Link to="/privacy" className="link-footer li-tweak">
                    <li>Privacy Policy</li>{" "}
                  </Link>
                  <Link to="/disclaimer" className="link-footer li-tweak">
                    <li>Disclaimers</li>{" "}
                  </Link>
                  <Link to="/tc" className="link-footer li-tweak">
                    {" "}
                    <li>Listing T&C</li>{" "}
                  </Link>
                </div>
                <div className="col-6 col-sm-4">
                  <h4 className="link-header">Communities</h4>
                  <a
                    href="https://www.facebook.com/edaface20"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>Facebook</li>{" "}
                  </a>
                  <a
                    href="https://www.facebook.com/EdaFace.Office1/"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    <li>Instagram</li>{" "}
                  </a>
                  <a
                    href="https://t.me/+8O9tfHSRdEZkY2E0"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>Telegram</li>{" "}
                  </a>
                  <a
                    href=" https://twitter.com/EdaFace_office"
                    className="link-footer li-tweak"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li>Twitter</li>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6 className="copy-text">
                Copyright © 2022. EdaFace is a product of EDA Holdings. All
                Rights Reserved.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
