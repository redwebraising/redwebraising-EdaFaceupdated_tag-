import { Link } from "react-router-dom";
import edafacelogo from "../../images/edafacelogo.png";

const Footer2 = () => {
  return (
    <footer
      className="text-white border-top border-info"
      style={{ background: "rgb(17,55,94)" }}
    >
      <div className="container text-center text-sm-start position-relative py-5">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <h3
              className="text-info pb-2 border-bottom border-info"
              style={{ color: "#26b6d4", fontFamily: "Poppins, sans-serif" }}
            >
              Company
            </h3>
            <ul
              className="list-unstyled d-inline-block d-sm-block"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <li className="mb-2">
                <Link className="link-light footer-link" to="/vision">
                  Vision
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/mission">
                  Mission
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/core">
                  Core Values
                </Link>
              </li>
              {/* <li className="mb-2">
                <Link className="link-light footer-link" to="/contact">
                  Contact us
                </Link>
              </li> */}
              <li className="mb-2">
                <Link className="link-light footer-link" to="/branding">
                  Branding
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/founders">
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/eda">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h3
              className="text-info pb-2 border-bottom border-info"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Products
            </h3>
            <ul
              className="list-unstyled d-inline-block d-sm-block"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://launchpad.edaface.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eda Token
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://www.digitalclinicnet.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Digital Clinic
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://www.eda.social/"
                  target="_blank"
                  rel="noreferrer"
                >
                  School of Cryptos
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://launchpad.edaface.com/white-paper"
                >
                  Litepaper
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-light footer-link"
                  href="https://www.edaface.com/tokenomics"
                >
                  Whitepaper
                </a>
              </li>
              <li className="mb-2">
                <Link
                  className="link-light footer-link"
                  to="/welfare-donations"
                >
                  Welfare Donations
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h3
              className="text-info pb-2 border-bottom border-info"
              style={{
                borderColor: "#26b6d4",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Legal
            </h3>
            <ul
              className="list-unstyled d-inline-block d-sm-block"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <li className="mb-2">
                <Link className="link-light footer-link" to="/terms">
                  Terms of Use
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/tc">
                  Listing T&amp;C
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light footer-link" to="/tc">
                  Eda Token Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h3
              className="text-info pb-2 border-bottom border-info"
              style={{
                borderColor: "#26b6d4",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Communities
            </h3>
            <ul
              className="list-unstyled d-inline-block d-sm-block"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://www.facebook.com/EdaFace.Office1"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://t.me/+8O9tfHSRdEZkY2E0"
                >
                  Telegram
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://www.instagram.com/edaface_office/"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="a-light footer-link"
                  href="https://twitter.com/EdaFace_office"
                >
                  Twitter
                </a>
              </li>
              <li className="mt-5 bold">
                <Link className="a-light footer-link contact-us" to="/contact">
                  <h3>Contact Us</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center position-absolute w-100 mt-4">
          <a href="#top">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x text-dark" />
              <i className="fa fa-angle-up fa-stack-1x text-white" />
            </span>
          </a>
        </div>
      </div>
      <div
        className="pt-5 pb-4 text-dark"
        style={{ background: "rgb(255,255,255)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 text-center text-md-start pb-4">
              <img src={edafacelogo} alt="Edaface logo" />
            </div>
            <div className="col-md-6 col-lg-4 text-center text-md-start pb-4">
              <p
                className="my-3"
                style={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  color: "#26b6d4",
                }}
              >
                EdaFace is a user interface aggregator that brings all the
                various functionalities of the crypto industry onto a single
                platform!
                <br />
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end pb-4">
              <h3
                className="mb-0"
                style={{ fontFamily: "Poppins, sans-serif", color: "#26b6d4" }}
              >
                Follow us
              </h3>
              <p
                className="mb-2"
                style={{ fontFamily: "Poppins, sans-serif", color: "#26b6d4" }}
              >
                Subscribe to our newsletter
              </p>
              <form
                className="d-flex justify-content-center justify-content-lg-end"
                action="https://edaface.us9.list-manage.com/subscribe/post?u=4e12aea915b24c4b28504fd2c&amp;id=5b04eb15fa&amp;f_id=00830ae1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate
              >
                <div className="w-75 form-group mb-3">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="email"
                      name="EMAIL"
                      required
                      placeholder="Your email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                      inputMode="email"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_4e12aea915b24c4b28504fd2c_5b04eb15fa"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <button
                      className="btn btn-dark"
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        background: "#26b6d4",
                        borderColor: "#26b6d4",
                        borderTopColor: "rgb(255,",
                        borderRightColor: "255,",
                        borderBottomColor: "255)",
                        borderLeftColor: "255,",
                      }}
                    >
                      Go!
                    </button>
                    <div id="mce-responses" class="clear foot">
                      <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <a
                  className="text-dark mx-2 mx-lg-0 ms-lg-3"
                  href="https://www.instagram.com/edaface_office/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-instagram fa-2x"
                    style={{ color: "#C13584" }}
                  />
                </a>
                <a
                  className="text-dark mx-2 mx-lg-0 ms-lg-3"
                  href="https://twitter.com/EdaFace_office"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-twitter fa-2x"
                    style={{ color: "#00acee" }}
                  />
                </a>
                <a
                  className="text-dark mx-2 mx-lg-0 ms-lg-3"
                  href="https://www.facebook.com/EdaFace.Office1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-facebook-square fa-2x"
                    style={{ color: "#4267B2" }}
                  />
                </a>
                <a
                  className="text-dark mx-2 mx-lg-0 ms-lg-3"
                  href="https://t.me/+8O9tfHSRdEZkY2E0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-telegram fa-2x"
                    style={{ color: "#2AABEE" }}
                  />
                </a>
                <a
                  className="text-dark mx-2 mx-lg-0 ms-lg-3"
                  href="https://www.youtube.com/channel/UCpCIoI_03jXv7rC7DUdCAww"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa fa-youtube-play fa-2x"
                    style={{ color: "#FF0000" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-lg-start py-2 small bg-dark text-info fst-italic">
        <div className="container">
          <p
            className="m-0"
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "normal" }}
          >
            Copyright © 2022. EdaFace is a product of Emerging Digital Age (EDA)
            Pty Ltd. All Rights Reserved.
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
