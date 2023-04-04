import React from "react";
import Nav from "../partials/nav";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import location from "../../images/location.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
 
import { useEffect, useRef } from "react";
import Footer2 from "../partials/footer2";

const Contact = () => {
  // Sweetalert usage
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq2ib57",
        "template_u845gj8",
        form.current,
        "Qx1oD5q3rBsQLIXEd"
      )
      .then(
        (result) => {
          MySwal.fire({
            title: <strong>Message Sent</strong>,
            html: <i>We will get back to you as soon as possible</i>,
            icon: "success",
          });
        },
        (error) => {
          MySwal.fire({
            title: <strong>Error Sending Message</strong>,
            html: <i>The was an error sending message please try again</i>,
            icon: "error",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="bac-cont">
        <Nav></Nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    title="map"
                    width="100%"
                    height="450"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Block%20c%20%20Mabopane,%20Pretoria%20&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="contact-header">Contact Us</h3>
              <h6 className="contact-body">We would like to hear from you</h6>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-acc-cnt">
                <div className="space-icon">
                  <img
                    src={phone}
                    className="img-fluid phone-icon"
                    alt="phone"
                  />{" "}
                  <span className="p-number"> +27 67 201 8677</span> <br></br>
                </div>
                <div className="space-icon">
                  <img
                    src={email}
                    className="img-fluid phone-icon"
                    alt="phone"
                  />{" "}
                  <span className="p-number"> support@edaface.com</span>{" "}
                  <br></br>
                </div>
                <div className="space-icon">
                  <img
                    src={location}
                    className="img-fluid phone-icon"
                    alt="phone"
                  />{" "}
                  <span className="p-number">Mabopane, Pretoria, SA</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-card-contact">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="in-1"
                    name="user_name"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="in-2"
                    name="user_email"
                  />
                  <textarea
                    typeof="text"
                    placeholder="Tell us anything"
                    className="txt-1"
                    name="message"
                  ></textarea>
                  <button type="submit" className="send-ct-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Contact;
