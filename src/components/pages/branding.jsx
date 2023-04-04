import React from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";
import branding from "../../images/branding.png";
import { useEffect } from "react";

const Branding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="hd-brand top-hd">
              Our logos are in different variations:
            </h3>

            <img src={branding} className="img-fluid branding" alt="branding" />
            <div className="padd-brand">
              <h3 className="hd-brand">Logo Usage</h3>
              <p className="hd-brand-body">
                You must not edit, change, distort, recolor or reconfigure the
                Eda Logo, which is protected by intellectual property rights
                (see our Terms of Use for further details).{" "}
              </p>
              <p className="hd-brand-body">
                You may adjust the size provided such a change maintains the
                aspect ratio. You must not use our logo or any of our protected
                rights for commercial purposes; if you so wish, please contact
                us to discuss further on admin@edaface.com.{" "}
              </p>
              <p className="hd-brand-body">
                You may use our logo solely for the promotion of EdaFace or any
                other EDA products on your personal website, social media and
                other associated platforms.
              </p>

              <h3 className="hd-brand">Intellectual Property</h3>
              <p className="hd-brand-body">
                EdaFace is a product of EDA, designed by Eda Labs. Hence, the
                logo for EdaFace is applicable for all other EDA projects and
                platforms.
              </p>

              <h3 className="hd-brand">Five Points about Logo</h3>
              <p className="hd-brand-body">
                (1). The Logo has 6 borders, representing the 6 continents of
                the world that EdaFace is meant to service. The 6 continents of
                the world are Africa, America (consists of North, Central and
                South), Antartica, Asia, Europe, and Oceania (comprises mostly
                Australia and New Zealand).
              </p>

              <p className="hd-brand-body">
                (2). Each of the 6 borders of the logo are linked to each other,
                representing EdaFace linking the crypto services across all the
                continents of the world.
              </p>

              <p className="hd-brand-body">
                (3). Notice that some of the borders are shorter than some,
                representing the different population densities of the different
                continents, and EdaFace will service all, the population density
                and peculiarities notwithstanding.
              </p>
              <p className="hd-brand-body">
                (4). There is a complex network of connectivity within the logo
                borders, representing the complex nature of Crypto money, which
                EdaFace aims to demystify.
              </p>

              <p className="hd-brand-body">
                (5). There is more than one opening into the logo on the
                borders, depicting the different services EdaFace is meant to
                provide through many outlets like Reflectors, Eda Plantation,
                Digital Mall, Metaverse, Scam Verification, Digital Clinic, etc.
                with no central interference – that is true decentalisation,
                which is the key characteristic of EdaFace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Branding;
