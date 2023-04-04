import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import { useEffect } from "react";
import check from "../../images/check.svg";
import anthony from "../../images/anthony.jpg";
import shola from "../../images/shola.jpg";
import ayoade from "../../images/ayoade.jpg";
import jessy from "../../images/jessy.jpg";

import linkedin from "../../images/linkedin.svg";

const Labs = () => {
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
              <h3 className="cha-header">EDA Labs</h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <p>
                Eda Labs is the department in charge of transforming ideas into
                physical products in line with the vision of EDA.
              </p>
              <p>
                Thus, whereas the Logistic Department will generate ideas, Eda
                Labs will be in charge of bringing such ideas into physical
                reality.{" "}
              </p>
              <p>
                EDA Labs will be a leader in building distributed computing
                systems and decentralized technology solutions.
              </p>
              <p>
                EDA Labs will be committed to open-source principles, and
                ethical, purpose-driven business, creating technology to benefit
                its users in line with the vision of EDA.{" "}
              </p>

              <br />
              <h3 className="token-holder">Personnel</h3>
              <p>
                Eda Labs will comprise of dynamic, innovative IT personnel –
                based all over the world, collectively committed to innovation
                through delivering the highest standards in software engineering
                through rigorous peer-to-peer reviewed science.
              </p>
              <p>
                The leader will be known as the <strong>HOD of Eda Labs</strong>
                .{" "}
              </p>
              <br />
              <h3 className="token-holder">Functions of EDA Lab include:</h3>

              <p>
                <img src={check} className="img-fluid check-push" alt="check" />
                Design and build EDA projects
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Maintain and service EDA projects
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Can also generate creative and innovative ideas for Eda
                Ecosystem.
              </p>
              <br />

              <h3 className="token-holder">The Units of Eda Labs</h3>
              <p>Eda Labs will consist of three units:</p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Frontend UI Designing
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Software Engineering{" "}
              </p>
              <p>
                <img src={check} className="img-fluid check-push" alt="check" />{" "}
                Smart Contract Audit{" "}
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
                  src={anthony}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Olasunkanmi Anthony</h4>
                <h6 className="found-pos">Programmer/Software Engineer</h6>
                <p className="found-desc">
                  A Computer Programmer with expertise in Python for Data
                  Science and Machine Learning Bootcamp. Also has expertise in
                  Front End Web Development (HTML, CSS, JavaScript) and Front
                  End Code Analysis. A Microsoft Certified System Engineer
                  (MCSE) since 2003 with professional training in Data Analyst
                  Nanodegree Programming from the University of South Africa,
                  Akure’s Federal University of Technology, and Havatach
                  College, Johannesburg. He sees crypto industry as a means of
                  financial liberation for African youths and beyond.
                </p>
                <a
                  href="https://www.linkedin.com/in/abidakunanthony/ "
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={shola}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Olulana Kola </h4>
                <h6 className="found-pos">Software Engineer</h6>
                <p className="found-desc">
                  Has 12-year expertise in Software Development with a 5-year
                  Crypto Exposure in building apps for Web3, DeFi, DAO, Machine
                  Learning, etc. He is a graduate of Federal University of
                  Technology, Akure, University of Pretoria, and Tshwane
                  University of Technology, South Africa. He believes crypto
                  holds the future for the upcoming generations in Africa.
                </p>
                <a
                  href=" https://www.linkedin.com/in/kolawole-olulana/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={ayoade}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Ayoade Oluwaseun </h4>
                <h6 className="found-pos">Web Developer (Front and Backend)</h6>
                <p className="found-desc">
                  Trained in Bowen University and University of South Africa and
                  holds BSc degree in Computer Science. Has expertise in web
                  development (front and backend), and a 10-year career
                  experience/professional development in Data Science and
                  Machine Learning. He has been involved in the crypto industry
                  the past 5 years, and believes that crypto is the future
                  global financial system, especially for Africans.
                </p>
                <a
                  href="https://www.linkedin.com/in/oluwaseun-adetutu-8057a37b/
"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div>

              <div className="col-md-6">
                <img
                  src={jessy}
                  className="img-fluid profile-pic"
                  alt="profile"
                />
                <h4 className="found-name">Jesse Okolie</h4>
                <h6 className="found-pos">Software Engineer</h6>
                <p className="found-desc">
                  A Software Engineer with 3 years of practice. He is a graduate
                  of Yaba College of Technology and has worked with global
                  brands like DeSpace Ecosystems Ltd. He has expertise in
                  Blockchain, Solidity, Python, JavaScript and Web3 Foundry. He
                  is a young African with 6-year crypto exposure and a vision to
                  create solutions for a better internet ecosystem, where people
                  can earn the privilege to create wealth and freedom for
                  themselves.
                </p>
                <a
                  href="linkedin.com/in/okolie-jesse-745428147
"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedin}
                    className="img-fluid linkedin ddd"
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Labs;
