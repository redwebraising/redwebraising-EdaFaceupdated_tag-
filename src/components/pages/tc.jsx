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
              <h3 className="cha-header">EDA Listing Terms & Conditions</h3>
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
              1.1. Terms <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample">
              <div class="disclaimer-card">
                <p>
                  Emerge Digital Afrika Holdings (“EDA”, “we” or “us”), for the
                  listing of your cryptocurrency, exchange, any digital
                  products, goods, services, and/or listing activity
                  (collectively and severally referred to as “Project”) on
                  EdaFace’s online platform at www.edaface.com (“Site” or
                  “Platform”), you are hereby agreeing to be fully bound by all
                  the provisions herein these Terms and Conditions for Listing
                  on EdaFace (“Listing TCs”), EDA’s Terms of Use, Privacy Policy
                  and Disclaimers agreement (that you have executed or will
                  execute with EDA) (collectively, the “Agreement”).
                </p>

                <p>
                  In the event that you do not agree to any provision therein
                  the Agreement, you must immediately email us at
                  admin@edaface.com, and we will stop all process to upload/list
                  your Project on our Site, or if your Project has already been
                  listed on our Site, we will remove it, as soon as is
                  reasonably practicable (in our discretion) for us to do so. We
                  will thereafter also destroy all Data (defined below in Clause
                  7.1) unless there is legitimate business or legal purpose for
                  us to retain it, pursuant to the terms of our Privacy Policy
                  and Agreement in general.
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
              2.0. Evaluative Measures <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample2">
              <div class="disclaimer-card">
                <p>
                  Our Platform, EdaFace, is a user interface aggregator that
                  brings all the various functionalities of the crypto industry
                  onto a single platform! EdaFace has a decentralized system;
                  this means anyone can list his project as long as the terms
                  and conditions of listing are met.
                </p>
                <p>
                  Once you have done the preliminary registration, EdaFace
                  system will prompt you to put your project through its Scam
                  Verification Centre (“SVC”). SVC will verify your project
                  using EDA School of Cryptocurrencies (SOC) Scorecard, which
                  consists of five items:
                </p>

                <p> Item 1: Project Team</p>
                <p> Item 2: Application Protocol</p>
                <p> Item 3: Use Case</p>
                <p> Item 4: Coin Supply</p>
                <p> Item 5: Market Value</p>
                <p>
                  Each item has 2 or more evaluative features. The verification
                  process of EdaFace system will automatedly confirm these
                  evaluative features. Some of these evaluative features are
                  compulsory; that is, they must have Automated Confirmation
                  before a crypto project can be listed on EdaFace.
                </p>

                <p>
                  The aim of SOC Scorecard is to evaluate all the Eight
                  Components of Productivity of a crypto project, which are:
                </p>

                <p>transparency – checked six times</p>
                <p>reputability – checked two times</p>
                <p>reliability – checked three times</p>
                <p> durability – checked two times</p>
                <p>relevance – checked one time</p>
                <p>uniqueness – checked one time</p>
                <p> scarcity – checked two times</p>
                <p> viability – checked two times</p>

                <p>
                  Thus, the SOC Scorecard of SVC comprehensively analyses the
                  profitability of a crypto project by utilising these eight
                  components of productivity, in the process automatically
                  generating a score for each evaluative feature.
                </p>
                <p>
                  At the end, EdaFace SVC system will automatedly sum up the
                  scores, and the interpretation of the potential productivity
                  of the crypto investment is based on this total score as
                  follows:
                </p>

                <p>
                  Total Score ≤ 20%: Bad Investment Total Score of 21 to 40%:
                  Cautious Investment Total Score of 41 to 60%: Good Investment
                  Total Score of 61 to 80%: Very Good Investment Total Score of
                  81 to 100%: Awesome Investment In other words, based on the
                  SOC Scorecard, there are five types of outcomes in crypto
                  investment, and your crypto project will be classified under
                  one of them at the end of SVC evaluation. The five types of
                  outcomes of crypto investment are bad, cautious, good, very
                  good, and awesome investment. EdaFace system does not allow a
                  crypto project with a score ≤ 20% (that is, Bad Investment) to
                  be listed on its platform. To learn how to generate a higher
                  score for your project so as to be able to list on EdaFace
                  platform, visit SVC of EdaFace. Warning Note: Even though
                  these evaluative measures will build up a measure of trust and
                  confidence for any crypto project in users, it is still not
                  100% guaranteed that there are no malicious intents involved
                  in a crypto project. Therefore, users and developers are
                  advised to always do their own research (DYOR) and manage
                  their risk appropriately. EDA, its Team, employees, and
                  platforms will not be liable to any losses and adversities you
                  may incur by using any of its services or platforms.
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
              3.0. Preliminary Verification{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample3">
              <div class="disclaimer-card">
                <p>
                  If your Project scores above 20% SOC Scorecard, the SVC will
                  prompt you to:
                </p>
                <p>
                  accept the terms and conditions of listing, Privacy Policy,
                  EDA disclaimers, and all other related legal terms of service
                  of EDA.
                </p>
                <p>
                  pay a listing fee in Eda Token. The amount being charged
                  depends on the type of the crypto project. EDA reserves the
                  right to change the amount of fees and the mode of payment at
                  any point in time with or without prior notice.
                </p>
                <p>
                  Once all these have been successfully carried out, you will be
                  able to submit your project successfully and the project will
                  bear the status of “Prelim Verif.” This means your Project has
                  successfully achieved “Preliminary Verification,” which will
                  be conspicuously visible next to your listed Project.
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
              4.0. Complete Verification <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample4">
              <div class="disclaimer-card">
                <p>
                  To receive “Comp Verif,” which means “Complete Verification,”
                  you will need to submit some documentation (“Request Form”) to
                  the SVC for manual check.
                </p>

                <p>
                  We manually check routinely to be sure every crypto project
                  listed on EdaFace adheres to EDA’s minimum safety listing
                  requirements (MSLR). The required documents for submission
                  will appear once you click on the “Complete Verification”
                  button displayed at the SVC.
                </p>
                <p>
                  Upon your submission of the Request Form to us, EDA will
                  process the submitted documentation to ascertain, among other
                  things, their authenticity. The process may take days to weeks
                  or even months. We will do all we can to finalize the process
                  within 90 days of receipt of the requested documents. The
                  process is faster if all the requested documents are sent at
                  the same time.
                </p>
                <p>
                  EDA does a background check of the authenticity of the
                  documents. If the process is not finalized within 90 days on
                  submission, EDA may or may not notify you, depending on the
                  backlog of work. In that case, you are advised to resubmit
                  only after 90 days of non-confirmation for a Comp Verif.
                  Crypto project that fails to receive Comp Verif after 180 days
                  will automatically be delisted from the platform.
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
              5.0. Delisting <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample5">
              <div class="disclaimer-card">
                <p>
                  On our receipt of your Request Form, we will determine in our
                  discretion the suitability of your Project for Comp Verif on
                  our Site based on our MSLR criteria. In the event that your
                  Project fails to meet EDA’s MSLR, you may receive a
                  notification to rectify or submit further documentations to
                  help EDA do further checks.
                </p>

                <p>
                  Failure to send the documentation, your Project will be
                  delisted within 180 days, counting from the date it receives
                  Prelim Verif status.
                </p>
                <p>
                  However, if your resubmission passes the MSLR test, your
                  Project will receive Comp Verif. We will notify you via email
                  once we have decided to upgrade your Project to Comp Verif,
                  however, the time-frame at which we will upgrade is in our
                  sole discretion, and you agree that time is not of the essence
                  in this regard.
                </p>
                <p>
                  If your Project FAILS to meet the MSLR criteria, your Project
                  will be delisted within 180 days, counting from the date it
                  receives Prelim Verif status. You will not be informed and we
                  are not obligated to provide any reasons for such delisting
                  (even if you send a request thereto).
                </p>

                <p>
                  You hereby acknowledge that you will not hold EDA, its Team,
                  employees, or Platforms responsible for any suffering, losses
                  of any kind, damages or deprivations for delisting your
                  project from EDA platform.
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
              6.0. Listing on our Site <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample6">
              <div class="disclaimer-card">
                <p>
                  Note that it is your responsibility to make sure the requested
                  documents get to EDA’s provided destination. EDA will not and
                  does not accept responsibility for document safety, transfer
                  and delivery. EDA does not have any agreement with any third
                  party or courier agency to transfer and deliver your documents
                  to EDA’s provided destination. Only send duly certified
                  documents, which should be “a true copy of the original.” DO
                  NOT SEND AN ORIGINAL COPY.
                </p>

                <p>
                  You warrant that all Personal Data provided to EDA has been
                  disclosed to us with the prior full informed consent of the
                  Personal Data owner which includes consent for our use
                  pursuant to our performance of this Agreement and transfer
                  outside of South Africa as may be necessary for hosting and
                  other functions incidental to the listing and maintenance of
                  the Project. “Personal Data” shall refer to information,
                  whether true or otherwise, that can be used singly or in
                  conjunction with other available (or likely accessible)
                  information to identify an individual.
                </p>
                <p>
                  You warrant that all information you provide to us as well as
                  all Data (as defined in Clause 7.1 below) that we procure are
                  true, accurate, complete, updated and not misleading in any
                  respect. You further warrant that you are duly authorised by
                  your company to submit the Request Form and to enter into the
                  Agreement on behalf of your company, therefore binding your
                  company fully to all obligations herein the Agreement. For the
                  avoidance of doubt, all references in the Agreement to “you”
                  shall also refer to the company that you represent, severally
                  and jointly. Accordingly, you undertake to fully indemnify,
                  defend, hold harmless and reimburse EDA for any and all losses
                  and claims resulting from your breach of the aforegoing
                  warranty, including but not limited to settlement fees, third
                  party claims and legal fees
                </p>
                <p>
                  on a solicitor-client basis. We will determine in our sole
                  discretion the layout, format, design, position and other
                  matters related to the listing of your Activity Post on our
                  Site, and you agree not to raise any objections or request for
                  changes thereto.
                </p>

                <p>
                  You agree that you (and therefore the company you represent)
                  have submitted the Request Form and would like your Project to
                  be uploaded on our Site voluntarily in your own informed
                  discretion, and you (and therefore the company you represent)
                  have not relied on any information or representations from EDA
                  in the submission of your Request Form. Accordingly, you
                  hereby understand and acknowledge that EDA will not be
                  howsoever liable whatsoever in relation to any results that
                  ensue from the listing of your Project on our Site, including
                  but not related to your receipt of spam mail, unwanted
                  questions, unwanted queries, third party claims,
                  non-complimentary remarks or feedback, etc.
                </p>

                <p>
                  Prior to listing your Project, we are entitled (but not
                  obligated) to request in our sole discretion for verification
                  regarding you, your company and/or for further information,
                  and failure to provide such information or verification will
                  result in the non-listing of your Project on our Site.
                </p>

                <p>
                  You undertake not to provide our Company with any Personal
                  Data unless necessary for the performance of the Agreement
                  (which shall include but is not limited to contacting you from
                  time to time in relation to the listing of your Project).
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
              7. Data <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample7">
              <div class="disclaimer-card">
                <p>
                  7.1 You agree that once you submit a Request Form, regardless
                  of whether we have confirmed that we will upgrade your Project
                  on our Site, we will be permitted to procure all information
                  related to your company and its Crypto Coins, Utility Tokens,
                  Cryptocurrency, New Exchange Listing and/or Events Listing,
                  including but not limited to your company’s history, team
                  profile and curricula vitae, write-ups, logos, trademarks,
                  brand, photographs, graphics, graphs, charts, analysis,
                  reports, pictures, videos and other content (collectively,
                  “Data”) from your company’s website, Facebook, Twitter,
                  Telegram, LinkedIn, blog, forum and other social media
                  platforms, and thereafter upload such Data onto our Site in
                  such format and layout in our sole discretion, without prior
                  notification or reference to you. Accordingly, you hereby
                  grant us a royalty-free, non-transferable licence to procure
                  and use your Data as per the aforegoing.
                </p>

                <p>
                  7.2 You warrant that all Data are owned by you or you have
                  full licence to sub-licence the use of the Data to us as per
                  Clause 2.1 above. In the event that we receive any third party
                  claims for infringement of their rights (including but not
                  limited to intellectual property rights), you undertake to
                  fully defend, hold harmless, indemnify and reimburse EDA for
                  any and all losses and claims resulting from your breach of
                  the aforegoing warranty, including but not limited to
                  settlement fees, third party claims and legal fees on a
                  solicitor-client basis.
                </p>
                <p>
                  7.3 Except as set out in Clause 7.4 below, we will upload all
                  Data and other information provided by you to us “AS IS” onto
                  our Site without verification as to accuracy or other
                  qualities. You hereby expressly agree that we bear no
                  liability whatsoever whether to you, your company or any third
                  parties in relation to any content uploaded onto our Site with
                  regards to your Project. You undertake to be fully responsible
                  for all information related to your Project on our Site. If
                  you become aware of any changes, inaccuracy or potential third
                  party claims in relation to any content that we have uploaded
                  onto our Site with regards to your Project, you undertake to
                  notify us promptly so that we can make changes accordingly.
                  You therefore further undertake to regularly check your
                  Project to ensure that all content thereto continues to be
                  accurate and non-infringing of third parties’ rights as long
                  as your Project is still listed on our Site, and to promptly
                  notify us in the event of any suspected infringement or
                  inaccuracy in relation to the aforesaid content.
                </p>

                <p>
                  7.4 We are not obligated to howsoever review or verify your
                  Data (or any part thereof), however, in the event that we
                  determine in our sole discretion any Data to be inaccurate,
                  outdated, erroneous or potentially misleading, we may propose
                  changes to such Data and will email the proposed changes to
                  you for your approval. Should we not receive any objections
                  from you to the proposed changes within seven (7) days from
                  the date of our email, it will be deemed that you have
                  approved the proposed changes and we will proceed to upload
                  such duly amended Data onto our Site in relation to your
                  Project. For the avoidance of doubt, this Clause 7.4 in no way
                  prejudices our exclusion of liability in relation to your Data
                  and other information as stipulated in Clause 7.3 above.
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
              8. Content on our Site <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample8">
              <div class="disclaimer-card">
                <p>
                  8.1 As per our Terms of Service, all content on our Site are
                  our intellectual property, excluding your Data and data of
                  other customers and users. Accordingly, you may not use any of
                  our intellectual property or the data of our other customers
                  and users (and their respective Projects) without our prior
                  written consent.
                </p>

                <p>
                  8.2 Any and all feedback regarding your Project on our Site or
                  associated forum or emailed to us shall belong to EDA, and you
                  shall therefore not howsoever duplicate, copy or use such
                  feedback or comments without our prior written consent.
                </p>

                <p>
                  8.3 You are permitted to provide a hyperlink on your company’s
                  website to our Site in relation to your Project. Any other use
                  of our Site’s web-address or other content therein our Site
                  must be with our prior written approval.
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
              9. Limitation of Liability <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample9">
              <div class="disclaimer-card">
                <p>
                  9.1 While we have exercised due care in the preparation of all
                  content displayed and/or made available on our Site and in
                  relation to your Activity Post, all such content are provided
                  “AS IS”, “WITH ALL FAULTS" and "AS AVAILABLE”. We make no
                  warranties of any kind, express or implied, direct or
                  indirect, in relation to our Site and your Activity Post,
                  including but not limited to the number of viewerships, web
                  traffic, any subscriptions to your event thereunder your
                  Activity Post, non-interrupted access to your Activity Post,
                  security, worm-free, virus-free, updatedness, non-omissions,
                  merchantability or fitness for purpose (even if we have been
                  informed in advance of such fitness). Accordingly, your use of
                  our Site for the listing of your Activity Post is at your own
                  discretion and risk.
                </p>

                <p>
                  9.2 In no circumstances, to the fullest extent permitted at
                  law, shall EDA or any of its shareholders, directors,
                  officers, agents, representatives, licensees, licensors,
                  contractors or employees be liable for any damages, loss, loss
                  of customers, damaged personal property (including but not
                  limited to virus attacks on computers), loss of data, cost of
                  servicing or repairing tablets, computers, smart phones or
                  other equipment, lost profits, lost business, lost
                  opportunities, loss of goodwill, degradation of reputation,
                  inability to conduct business, consequential losses and
                  indirect damages, howsoever sustained whether in relation to
                  our Site, your Project, our use of your Data, information that
                  you provide to us, this Agreement or other viewers or users of
                  our Site.
                </p>

                <p>
                  9.3 In the event that EDA’s liability to you in relation to
                  our Site, the Project, our use of information that you provide
                  to us and your Data, our services, our content on our Site or
                  other activities, products and/or services (whether provided
                  by EDA or other third parties) featured on our Site, cannot be
                  fully disclaimed or excluded, you agree that EDA’s total
                  liability to you shall not exceed fifty United States Dollars
                  (50 USD) (or in the event that you have paid any listing fees,
                  the aggregate amount of listing fees that you have paid),
                  which you agree is a reasonable compensation amount taking
                  into consideration the limited nature of EDA’s services as
                  provided hereunder this Listing TCs. Accordingly, you agree
                  that upon receipt of 50 USD (or in the event that you have
                  paid any listing fees, the aggregate amount of listing fees
                  that you have paid) from EDA, you will waive all rights
                  against EDA and will make no further claims whatsoever against
                  EDA.
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
              10. Non-Interference <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample10">
              <div class="disclaimer-card">
                <p>
                  10.1 You undertake that you shall not howsoever mine data
                  from, hack, interfere or attempt to interfere with any part of
                  our Site, your Project, other activity posts of other
                  customers or users, disrupt accessibility to our Site (or any
                  part thereof), or bypass any security measures that we may
                  include with our Site and activity posts, including but not
                  limited to the utilization of any screen-scraper, hacks,
                  spider, robot, virus, worms or other means to access or attack
                  our Site for any purpose without our prior written consent.
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
              11. Indemnification <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample11">
              <div class="disclaimer-card">
                <p>
                  11.1 You agree to fully indemnify, defend and hold EDA and its
                  shareholders, directors, officers, employees, representatives,
                  agents, subcontractors, licensees and licensors harmless from
                  and against any and all claims (including but not limited to
                  third party claims for intellectual property infringement due
                  to your Data), damages, costs and expenses, including but not
                  limited to legal fees and settlement payments on a full
                  indemnity (solicitor-client) basis arising from or related to
                  your breach of any of the provisions herein this Listing TCs,
                  other service terms of the Agreement, your use of our Site,
                  your listing of Project on our Site, our services, our
                  content, other services and products.
                </p>

                <p>
                  11.2 For the avoidance of doubt, regardless of the
                  indemnification received by EDA from you, EDA shall have full
                  authority and charge over its own defence, legal actions, and
                  settlement proceedings in relation to any third party claims
                  without any reference to you.
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
              12. Governing Law and Jurisdiction{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample12">
              <div class="disclaimer-card">
                <p>
                  12.1 The Agreement (which includes this Listing TCs) shall be
                  governed by and construed in accordance with the laws of the
                  Republic of South Africa, without reference to any
                  conflict-of-law principles. 12.2 In the event of any disputes
                  arising from this Listing TCs or any of the other service
                  terms of the Agreement, your agreement thereto, your use of
                  our Site, the listing of your Project, our use of your Data,
                  your use of our services, content, and/or products, you must
                  first contact EDA’s officer at admin@edaface.com regarding
                  your dispute, and use your best endeavours to amicably settle
                  any dispute in good faith. We on our part will also use our
                  best endeavours to amicably settle your concerns in good
                  faith. However, if no amicable resolution is reached within 60
                  days, both parties agree to submit to the exclusive
                  jurisdiction of the Courts of South Africa.
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
              13. Miscellaneous <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample13">
              <div class="disclaimer-card">
                <p>
                  13.1 If any provision or clause of this Listing TCs, any of
                  our service terms of the Agreement, or part thereof
                  respectively, is rendered void, illegal or unenforceable by
                  any legislation or laws to which it is subject, it shall be
                  modified so as to give effect to its intention, or where such
                  modification is not possible, that provision or clause shall
                  be rendered void, illegal or unenforceable to that extent only
                  and it shall in no way affect or prejudice the enforceability
                  of the remainder of such provision or clause or the other
                  provisions of this Listing TCs and our other service terms of
                  the Agreement.
                </p>

                <p>
                  13.2 The failure or delay of EDA at any time to enforce any of
                  its rights hereunder this Listing TCs and other service terms
                  of the Agreement shall not be constituted as a waiver thereof
                  and shall in no manner affect EDA’s rights at a later time to
                  enforce the same.
                </p>

                <p>
                  13.3 You agree that you shall not hold EDA howsoever liable
                  for any delay or failure in performance (including but not
                  limited to non-accessibility to your Project on our Site) due
                  to events beyond EDA’s reasonable control, including but not
                  limited to natural catastrophes, civil riots, acts of war,
                  shortage of utilities, and any applicable laws and
                  regulations.
                </p>

                <p>
                  13.4 You are not permitted to assign any of your rights and
                  obligations hereunder the Agreement to any third parties
                  without the prior written consent of EDA.
                </p>

                <p>
                  13.5 A person who is not a party to this Agreement shall have
                  no right to enforce any of its terms.
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
