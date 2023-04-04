import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import check from "../../images/check.svg";
import captain from "../../images/captain.jpg";
import ikechukwu from "../../images/ikechukwu.jpg";
import victoria from "../../images/victoria.jpg";
import mabela from "../../images/mabela.jpg";
import linkedin from "../../images/linkedin.svg";

const Founders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="token-bac">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cha-header">EDA Board of Founders (BOF)</h3>
              <p className="cha-sub-header-bof" style={{ fontSize: "24" }}>
                This is the body responsible for EDA ecosystem adoption by
                promoting and protecting the vision of EDA.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <h3 className="token-holder">Functions:</h3>
              <p>The EDA BOF will serve the following functions:</p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                approval of projects submitted by any of EDA Departments
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                review EDA’s budget that will be finally endorsed by the
                Director
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                in charge of appointment of a HOD of each Department for final
                endorsement by the Director
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                maintain discipline among EDA staff
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                pioneer and promote the digitalization of Africa in
                collaboration with other key holders.
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                facilitate blockchain education – offering courses and expertise
                to institutions, professionals, enterprises, and blockchain
                beginners within Africa and beyond.
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                work with other key industries within the blockchain realm,
                contributing to the advancement of the technology and driving
                adoption with other compatible systems.
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                contribute to the blockchain technology by focusing on how to
                utilize the technology to advance healthcare provision, banking
                services, legal system, with the ultimate goal to bringing new
                insight for the financial freedom of many Africans and beyond.
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                publication of research studies for rapid adoption of cryptos
                and the various aspects of digitalization.
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                research works on emerging digital world such as the Crypto
                Market, e-Medicine, etc.
              </p>
              <br />
              <p>
                In summary, the functions of BOF is to promote, protect, and
                preserve the vision of EDA. Therefore, the slogan of BOF is:
                Promote, Protect and Preserve EDA.
              </p>
            </div>

            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="wrapper-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={captain}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Adiari Captain</h4>
                <h6 className="found-pos">Director/CEO</h6>
                <p className="found-desc">
                  An entrepreneur with passionate interest in blockchain
                  technology, and has been involved in a number of blockchain
                  projects since 2017. A Medical Practitioner and a Public
                  Health Expert, trained in Nigeria, South Africa and the United
                  Kingdom. Seeing the power blockchain technology holds in
                  alleviating mass poverty in Africa and beyond, his interest in
                  the crypto industry has been awakened greatly.
                </p>
                <a
                  href="https://www.linkedin.com/in/captain-adiari-bb496a45/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={ikechukwu}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Ikechukwu Ezeocha</h4>
                <h6 className="found-pos">HOD of Finances</h6>
                <p className="found-desc">
                  A Public Health Pharmacist with expertise in Project/ Program
                  Management, trained in Nigeria and the USA with B.Pharm, MPH,
                  Cert Project Mgt, and Cert Leadership in Global Health. Has
                  work experience as a Community Pharmacy Practitioner, Medical
                  Representative, and as a Pharmaceutical Marketing/Sales
                  Representative. Has been involved in the crypto industry the
                  past 3 years and he sees crypto industry as a platform that
                  will create financial freedom, especially for Africans.
                </p>
                <a
                  href="http://linkedin.com/in/ikechukwu-ezeocha-b101a461"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>

              {/* <div className="col-md-6">
                <img
                  src={mabela}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Mabela Patricia </h4>
                <h6 className="found-pos">HOD Logistics</h6>
                <p className="found-desc">
                  Has expertise in digital marketing and direct sales. Trained
                  in Tanzania and South Africa and is completing her
                  Biochemistry degree program, has been in the crypto industry
                  since 2019. Her personal vision is to engage technology in
                  changing the face of Africa.
                </p>
                <a
                  href="https://www.linkedin.com/in/patricia-mabela-41134517a"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div> */}

              <div className="col-md-6">
                <img
                  src={victoria}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Jiyana Victoria</h4>
                <h6 className="found-pos">HOD of Marketing</h6>
                <p className="found-desc">
                  She is a web developer and a marketer. Holds a Diploma in
                  Information technology in South Africa and has been involved
                  in two crypto projects since 2019. She strongly perceives
                  cryptos to be vehicles for financial empowerment for young
                  Africans and beyond, especially considering that cryptos are
                  decentralized, trustless and permissionless with no
                  third-party interference.
                </p>
                <a
                  href="https://www.linkedin.com/in/victoria-jiyana-a59ba9179"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="space"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Founders;
