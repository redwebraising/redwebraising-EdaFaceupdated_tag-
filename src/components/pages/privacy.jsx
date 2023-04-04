import React from "react";
import { useEffect } from "react";
import Nav from "../partials/nav";
import Footer2 from "../partials/footer2";

const Tc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>

      <div className="disclaimer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cha-header">Privacy Policy</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              1.0. Introduction <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample">
              <div class="disclaimer-card">
                <p>
                  This Privacy Policy describes how Emerge Digito Afrika
                  Holdings (“EDA,” "us," "we," or "our") collects, uses and
                  shares information about you when you visit interfaces (e.g.,
                  websites and mobile applications) owned or controlled by us
                  (collectively referred to herein as the "Website"). Please
                  read this Privacy Policy carefully to understand how we
                  process your information.
                </p>

                <p>
                  EDA is the data controller of all “Personally Identifiable
                  Information” (that is, information that can be used to
                  identify you) collected via the Site and of certain Personally
                  Identifiable Information collected from third parties, as set
                  out in this Privacy Policy.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              2.0. What You Agree by Using Our Site{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample2">
              <div class="disclaimer-card">
                <p>
                  Some of our Website's functionality can be used without
                  revealing any Personally Identifiable Information. In order to
                  access certain features on our Website, you may need to
                  submit, or we may collect, Personally Identifiable
                  Information. By submitting any Personally Identifiable
                  Information to us, you consent and agree that we may collect,
                  use and disclose such Personally Identifiable Information in
                  accordance with this Privacy Policy and our Terms of Use, and
                  as permitted or required by law.
                </p>
                <p>
                  If you do not agree with our Privacy Policy and our practices,
                  please do not provide any Personally Identifiable Information.
                </p>

                <p>
                  If you refuse or withdraw your consent, or if you choose not
                  to provide us with any required Personally Identifiable
                  Information, we may not be able to provide you with the
                  services that can be offered on our Site.
                </p>
                <p>
                  Consent can be withdrawn at any time by contacting us at
                  support@edaface.com Please note that we may also rely on
                  legitimate interests or fulfillment of a contract to continue
                  processing your data.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              3.0. What Information this Privacy Policy Covers{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample3">
              <div class="disclaimer-card">
                <p>
                  This Privacy Policy covers information we collect through:
                </p>
                <p>Our Website;</p>
                <p>Our mobile applications;</p>
                <p>
                  Email, chat, form, and any other electronic communication
                  between you and EDA;
                </p>
                <p>
                  {" "}
                  Interactions with websites, apps, and services that link to
                  this Privacy Policy, including ones that are third-party.
                </p>
                <p>
                  {" "}
                  This Privacy Policy does not cover information collected
                  through:
                </p>
                <p>
                  Offline channels or any other website that is affiliated with
                  us, but not expressly linked to this Privacy Policy; Any
                  third-party, including advertising services or any other
                  content services that are present or accessible from or on our
                  Website.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              4.0. What Information We Collect{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample4">
              <div class="disclaimer-card">
                <p>
                  For all users interacting with our Website, we collect the
                  following information: • Information about the device used to
                  interact with our Website (e.g. operating system, model,
                  manufacturer); • Information about the browser used to
                  interact with our Website; • The date and time of the request,
                  the IP address and other software and hardware information.
                  For users logged in into their registered accounts, we collect
                  the following information: • E-mail address; • Last country
                  and IP you accessed the Website from; • For each device, the
                  date and time when you have registered on the Website; • For
                  each device, the software version and platform used to access
                  the Website. For non-registered users, or users who are not
                  logged in into their registered account, we do not collect any
                  Personally Identifiable Information.
                </p>
                <p>
                  We collect Personally Identifiable Information that you
                  provide to us when you register for an account, update or
                  change information for your account, complete a survey,
                  sign-up for email updates, send us email messages, and/or
                  participate in other services on our website. We may use the
                  Personally Identifiable Information that you provide to
                  respond to your questions, provide you the specific services
                  of your choosing, improve and personalize your visit to our
                  Website, and send email messages about website maintenance or
                  updates.
                </p>
                <p>
                  For your convenience we may provide links to sites operated by
                  organizations other than as EDA ("Third- Party Sites") that we
                  believe may be of interest to you. We do not disclose your
                  Personally Identifiable Information to these Third Party Sites
                  without obtaining your consent. We do not endorse and are not
                  responsible for the privacy practices of these Third Party
                  Sites. If you choose to click on a link to one of these Third
                  Party Sites, you should review the privacy policy posted on
                  the other site to understand how that Third Party Site
                  collects and uses your Personally Identifiable Information.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              5.0. How We Use the Information{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample5">
              <div class="disclaimer-card">
                <p>
                  We use information relating to your use of the Website to
                  build higher quality, more useful services by performing
                  statistical analyses of the collective characteristics and
                  behavior of our users, and by measuring demographics and
                  interests regarding specific areas of our Website. We may also
                  use this information to ensure the security of our services
                  and the Website.
                </p>

                <p>
                  We may use your Personally Identifiable Information (i) to
                  process your registration on our Website, (ii) to send you
                  information regarding changes to our terms and policies, (iii)
                  to provide information or content you have requested, (iv) to
                  contact you and send you promotional information regarding our
                  programs, products, features, or services, (v) for internal
                  business purposes such as identification and authentication of
                  our users, (vi) to tailor content, advertisements and offers,
                  (vii) to process your information where we are legally
                  required to do so, (viii) to protect and defend the rights,
                  property, or safety of EDA, the website, our users, customers,
                  or others; and in connection with our Terms of Use and other
                  agreements, (ix) any other purpose which we will disclose at
                  that time.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              6.0. How We Share the Information{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample6">
              <div class="disclaimer-card">
                <p>
                  EDA will never share your Personally Identifiable Information
                  provided directly by you or via third- parties to
                  third-parties without your prior consent. However, we may
                  share aggregated statistics about your use of our services as
                  long as such information does not contain Personally
                  Identifiable Information.
                </p>

                <p>We may also disclose your personal information:</p>
                <p>
                  To comply with any court order, law, or legal process,
                  including responding to any government or regulatory request;
                </p>

                <p>
                  To enforce or apply our terms of use or terms of sale and
                  other agreements, including for billing and collection
                  purposes;
                </p>

                <p>
                  If we believe disclosure is necessary or appropriate to
                  protect the rights, property, or the safety of EDA, our
                  customers, or others. We may also exchange information with
                  other companies and organizations for the purposes of fraud
                  protection and credit risk reduction.
                </p>

                <p>
                  EDA may disclose and/or transfer your Personally Identifiable
                  Information to an acquirer, assignee or other successor entity
                  in connection with a sale, merger, or reorganization of all or
                  substantially all of the equity, business or assets of EDA to
                  which your Personally Identifiable Information relates.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample7"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              7.0. Retention of Personally Identifiable Information{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample7">
              <div class="disclaimer-card">
                <p>
                  We keep your Personally Identifiable Information for no longer
                  than necessary for the purposes for which the Personally
                  Identifiable Information is processed. The length of time we
                  retain Personally Identifiable Information depends on the
                  purposes for which we collect and use it and/or as required to
                  comply with applicable laws.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample8"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              8.0. Management of Personally Identifiable Information{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample8">
              <div class="disclaimer-card">
                <p>
                  You have certain rights in relation to your Personally
                  Identifiable Information. If you would like further
                  information in relation to your rights or would like to
                  exercise any of them, you may also contact us via
                  support@edaface.com.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample9"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              9.0. International Privacy <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample9">
              <div class="disclaimer-card">
                <p>
                  By accessing the Website and providing Personally Identifiable
                  Information, you agree and acknowledge and consent to the
                  collection, maintenance, processing and transfer of such
                  information in and to South Africa and other countries and
                  territories in which EDA servers operate. These jurisdictions
                  may have different privacy laws from your home jurisdiction
                  and provide different levels of protection of personal
                  information.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample10"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              10.0. Data Security <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample10">
              <div class="disclaimer-card">
                <p>
                  We take measures to ensure the security of your personal
                  information by using a combination of administrative,
                  technical, personnel and physical measures to safeguard
                  personal data in its possession against loss, theft and
                  unauthorized use, disclosure or modification. Unfortunately,
                  the transmission of information via the internet is not
                  completely secure. Although we do our best to protect your
                  personal information, we cannot guarantee the security of your
                  personal information transmitted to our Website. Any
                  transmission of personal information is at your own risk. We
                  are not responsible for circumvention of any privacy settings
                  or security measures contained on the Website.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample11"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              11.0. No Information from Children{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample11">
              <div class="disclaimer-card">
                <p>
                  We do not knowingly collect or maintain Personally
                  Identifiable Information on our Site from children under 16
                  years of age, and no part of our Site is directed to children
                  under 16 years of age. By using EDA, you are representing that
                  you are at least 18 years of age, or that you are at least 16
                  years of age and have your parents’ or guardians’ permission
                  to use our Site. If you have reason to believe that we might
                  store Personally Identifiable Information from or about an
                  underage user, please contact us at support@edaface.com.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample12"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              12.0. Changes to our Privacy Policy{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample12">
              <div class="disclaimer-card">
                <p>
                  Please note that we review our privacy practices from time to
                  time, and that these practices are subject to change. Any
                  change, update, or modification will be effective immediately
                  upon posting on our Site. Please take a look at the Effective
                  date at the top of this page to see when this Privacy Policy
                  was last revised. Be sure to return to this page periodically
                  to ensure familiarity with the most current version of this
                  Privacy Policy.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample13"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              13.0. Complaints, Questions, Suggestions{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample13">
              <div class="disclaimer-card">
                <p>
                  If you have any complaints, suggestions, privacy-related
                  questions, unresolved problems, or queries regarding our
                  processing of Personally Identifiable Information, please
                  contact us at support@edaface.com.
                </p>

                <p>
                  Trading and investing in digital assets is highly speculative
                  and comes with many risks. The analysis / stats on edaface.com
                  are for informational purposes and should not be considered
                  investment advice. Statements and financial information on
                  edaface.com should not be construed as an endorsement or
                  recommendation to buy, sell or hold. Please do your own
                  research on all of your investments carefully. Scores are
                  based on common sense Formulas that we personally use to
                  analyse crypto coins & tokens. We'll open source these
                  formulas soon. Past performance is not necessarily indicative
                  of future results. See the full Disclaimers.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample14"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              14.0. Sales Policy <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample14">
              <div class="disclaimer-card">
                <p>
                  EDA with its products does not intend, and will NEVER, sell
                  off to any buyer because it is of God with specific vision
                  that only the visioner/undertaker knows about. No billions of
                  USD, Pounds, Yens, Euros, Yuan, Rand, Naira or any amount of
                  money will make EDA to sell off itself and its
                  vision/products.
                </p>

                <p>
                  However, EDA can enter into profitable partnerships. Any
                  individual or organization that will want to partner with EDA
                  and its products will be accepted if such partnership will not
                  jeopardise EDA’s vision, will not cause EDA to lose control of
                  its vision, or will not cause EDA to become the lesser voice
                  in such partnership.
                </p>

                <p>
                  These words are written under the anointing of the Holy Spirit
                  of God. And curse upon the head of anyone that will do
                  otherwise and stand against the divine vision of EDA. For the
                  vision of EDA is as given and directed by Jesus Christ, and to
                  Him alone be all the glory forever!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Tc;
