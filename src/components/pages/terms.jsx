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
              <h3 className="cha-header">TERMS OF USE</h3>
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
                  These Terms of Use govern your access to and use of EdaFace
                  website and its other platforms, (the “Website”), and
                  associated content, software and applications (collectively,
                  the "Service"). These Terms also include our Privacy Policy,
                  which is located at https://edaface.com/privacy.
                </p>

                <p>
                  The Service is administered and maintained by Emerge Digito
                  Afrika Holdings (“EDA”), a private (limited) company, duly
                  incorporated under the South African Companies Act, 71 of
                  2008, with company registration number: 2021/818038/07. The
                  terms "we", "us" and "our" also refer to EDA. The term “you”
                  refers to the person visiting this Website.
                </p>

                <p>
                  Please study these Terms carefully because they contain
                  important information regarding your legal rights, including
                  limitations on EDA’s and certain third parties’ liability,
                  disclaimers of warranties and a submission to jurisdiction.
                  Each time you use our Services by any means (for example,
                  through the Internet or on a mobile device), you irrevocably
                  agree to comply with the version of the Terms posted on this
                  Website at the time you access this Website. You may not use
                  the Service if you do not agree to these Terms.
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
              1.1. Eligibility <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample2">
              <div class="disclaimer-card">
                <p>
                  To access our Services, you must be at least 16 years old or
                  older. The Service is strictly for your personal,
                  non-commercial use unless you enter into a separate agreement
                  with us for your commercial use. You may not use the Service
                  if we have terminated any account of yours or if banned it.
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
              1.2. License<span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample3">
              <div class="disclaimer-card">
                <p>
                  You may only use the Service as expressly permitted by these
                  Terms. All rights not expressly granted to you are reserved by
                  EDA, its third-party providers and other respective owners, if
                  any.
                </p>
                <p>
                  EDA provides content through the Service that is copyrighted
                  and/or trademarked work of EDA or EDA’s third-party licensors
                  and suppliers (collectively, the “Content”). For clarity,
                  Content shall include all such content accessed by you at any
                  time. You acknowledge that the Service has been developed,
                  compiled, prepared, revised, selected, and arranged by EDA and
                  such third parties through the application of methods and
                  standards of judgment developed and applied through the
                  expenditure of substantial time, effort, and money and
                  constitutes valuable intellectual property of EDA and such
                  others. Accordingly, you shall protect the proprietary rights
                  of EDA and all others having rights in the Service during and
                  after the term of this agreement and comply with all
                  reasonable written requests made by EDA to protect its and
                  others’ contractual, statutory, and common law rights in the
                  Service.
                </p>

                <p>
                  Subject to these Terms, and your compliance with these Terms,
                  EDA hereby grants you a limited, personal, non-sub-licensable
                  and non-transferable license to use the Content and to use
                  this Service, in each case solely for your personal use. You
                  agree not to use the Service or any of the Content for any
                  commercial purpose. Except for the foregoing license, you have
                  no other rights to the Service or any Content.
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
              2.0. Prohibited Activities <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample4">
              <div class="disclaimer-card">
                <p>You agree that you will not:</p>
                <p>
                  {" "}
                  Copy, modify or create derivative works of the Service or any
                  Content;
                </p>
                <p>
                  • Copy, manipulate or aggregate any Content (including data)
                  for the purpose of making it available to any third party; •
                  Trade, sell, rent, loan, lease or license any Content or
                  access to the Service, whether commercially or free of charge;
                  • Use or introduce to the Service any data mining, crawling,
                  robot or similar automated or data gathering or extraction
                  method, or manually access, acquire, monitor or copy any
                  portion of the Service, or download or store Content (unless
                  expressly authorized by EDA). • Make excessive requests for
                  information or take any action that interferes with, disrupts
                  or imposes a burden on the Service or any server or network
                  connected to the Service or negatively affects the quality or
                  availability of any Content, or speed or functionality of the
                  Service; • Introduce a virus, worm, time bomb or other malware
                  to the Service, or use any device, software or routine to
                  bypass any software or hardware that prohibits volume requests
                  for information; • Violate or bypass any security measure
                  intended to limit or prevent access to the Website, Content or
                  Service; or otherwise attempt to gain unauthorized access to
                  the Service, any Content or to any computer systems or
                  networks connected to the Service or any EDA server, whether
                  through hacking, password mining, unauthorized use of
                  another's password/credentials or any other means; • Restrict,
                  inhibit or interfere with use of the Service by any other user
                  (including by hacking or defacing the Website); • Introduce or
                  otherwise distribute through the Website any computer program
                  that damages, interferes with, intercepts, collects, releases
                  or discloses any system, data or personal information of ours
                  or any third party; • Make use of any of our trademarks,
                  service marks, trade names or logos or those of any third
                  party displayed on the Website; or modify or remove any
                  copyright or other proprietary notice in the Content; • Use
                  the Website, Content or Services for or in connection with any
                  activity that (i) violates any law, statute, ordinance or
                  regulation, including without limitation, the South African
                  copy right act or (ii) involves proceeds of any unlawful or
                  illegal activity. Additionally, you acknowledge and agree that
                  you (and not EDA) are responsible for obtaining and
                  maintaining all telecommunications, broadband, and computer
                  hardware, equipment, software and services needed for you to
                  access and use the Service, and paying all charges related
                  thereto.
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
              3.0. Ownership and Intellectual Property{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample5">
              <div class="disclaimer-card">
                <p>
                  Subject to these Terms, you may view, print and make copies of
                  Content for your own personal use. You may not, and shall not,
                  copy, reproduce, download, "screen shot ", store, transmit,
                  broadcast, publish, modify, create a derivative work from,
                  display, perform, distribute, redistribute, sell, license,
                  rent, lease or otherwise use, transfer (either in printed,
                  electronic or other format) or exploit any Content, in whole
                  or in part, in any way that does not comply with these Terms
                  without our prior written permission. To request permission to
                  use any Content other than as expressly permitted in these
                  Terms, please contact legal@edaface.com.
                </p>

                <p>
                  As between EDA and you, all Content is owned or controlled by
                  EDA. EDA, its logo, and, except as noted below, all other
                  product or service names or slogans displayed on the Service
                  are registered and/or common law trademarks of EDA or its
                  suppliers or licensors and may not be copied, imitated, or
                  used, in whole or in part, without the prior written
                  permission of EDA or the applicable trademark holder. In
                  addition, the look and feel of the Service, including all page
                  headers, custom graphics, button icons, and scripts, is the
                  service mark, trademark, and/or trade dress of EDA and may not
                  be copied, imitated, or used, in whole or in part, without the
                  prior written permission of EDA. All other trademarks,
                  registered trademarks, product names, and company names or
                  logos mentioned in the Service are the property of their
                  respective owners. Reference to any products, services,
                  processes, or other information, by trade name, trademark,
                  manufacturer, supplier, or otherwise does not constitute or
                  imply endorsement, sponsorship, or recommendation thereof by
                  EDA.
                </p>

                <p>
                  Nothing contained in these Terms grants you any interest in
                  any of EDA's or any third-party's intellectual property.
                </p>

                <p>
                  The use or misuse of EDA’s trademarks or other intellectual
                  property, except as expressly permitted by these Terms, is
                  prohibited. You shall promptly notify EDA at legal@edaface.com
                  if you know or suspect that any of EDA’s or its providers’
                  intellectual property rights has been violated or infringed.
                </p>

                <p>
                  Edaface and all related logos, trademarks, service marks and
                  trade names are solely the property of EDA. The absence of a
                  name, logo or other mark herein does not constitute a waiver
                  of any and all intellectual property rights that EDA has
                  established. Other trademarks, names or logos used on the
                  Website are property of their respective owners. You are not
                  authorized to use any of the foregoing.
                </p>

                <p>
                  You acknowledge that EDA and/or its providers own the
                  copyright in and to all Content under the laws of the South
                  African and other countries, and have reserved all rights in
                  and to such Content.
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
              4.0. Linking to the Service from Your Website{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample6">
              <div class="disclaimer-card">
                <p>
                  You may place one or more links to the Service (collectively,
                  the “Link”) on your own website (“Your Site”), provided that:
                </p>

                <p>
                  The Link shall display only the following text: “EDA” or
                  “edaface.com” or "Link to edaface.com”;
                </p>
                <p>
                  Your Site shall not contain any content that is unlawful,
                  threatening, abusive, libelous, defamatory or otherwise
                  inappropriate, as determined by us in our sole discretion;
                </p>

                <p>
                  The look and feel of all content that accompanies the Link or
                  is on the same page as the Link (for example, the entire
                  article in which the Link appears, even if it is not all on
                  the same page as the Link) shall not otherwise be of a nature
                  that may damage or dilute the goodwill associated with EDA's
                  name, reputation or any of its trademarks, trade names or
                  service marks, as determined by EDA in its sole discretion;
                </p>

                <p>
                  No content on Your Site shall contain any information that, in
                  our sole discretion, may create the false impression that you,
                  Your Site or any other website, service, person or entity is
                  associated with, sponsored by or otherwise endorsed by EDA, or
                  that any activity engaged in by you or anyone else has been
                  approved by EDA.
                </p>

                <p>
                  We may revoke our consent to a Link at any time, without prior
                  notice. If we notify you that you may no longer link to the
                  Service, or to a page or document, you must promptly (and, in
                  any event, within three (3) business days) remove all affected
                  Links from Your Site.
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
              5.0. Feedback <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample7">
              <div class="disclaimer-card">
                <p>
                  This section does not apply to information supplied by you to
                  the Service that can identify you personally. EDA believes in
                  protecting your privacy. Please visit
                  https://edaface.com/privacy to review our current Privacy
                  Policy, which also governs your use of the Service, to
                  understand our practices.
                </p>

                <p>
                  If you send or transmit any communication, including but not
                  limited to feedback, questions, comments or suggestions to
                  EDA, whether by letter, email, telephone or otherwise
                  (collectively, “Feedback”), all such Feedback is, and will be
                  treated as non-confidential and non-proprietary. You hereby
                  assign to EDA all right, title, and interest in, and EDA is
                  free to use, without any attribution or compensation to you,
                  any ideas, concepts, know-how or techniques or other
                  intellectual property and proprietary rights contained in the
                  Feedback, whether or not patentable, for any purpose
                  whatsoever, including but not limited to enhancing the
                  Service, or otherwise developing, manufacturing, licensing,
                  marketing and selling products and services based on or
                  containing such Feedback. You also understand and agree that
                  EDA is not obligated to use, display, reproduce, or distribute
                  any such ideas, know-how, concepts, or techniques contained in
                  the Feedback, and you have no right to compel such use,
                  display, reproduction, or distribution. EDA may use aggregated
                  and statistical data derived from Website usage.
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
              6.0. Limitation of Liability{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample8">
              <div class="disclaimer-card">
                <p>
                  The content on the service is strictly for informational
                  purposes. Nothing on or in the service shall constitute or be
                  construed as an offering of any currency or any financial
                  instrument or as investment advice or investment
                  recommendations (such as recommendations as to whether to
                  purchase a currency or instrument) by EDA or a recommendation
                  as to an investment strategy by EDA. Content on this service
                  should not be considered as information sufficient upon which
                  to base an investment strategy. No content on the service is
                  tailored to the specific needs of any individual, entity or
                  group of individuals. EDA expresses no opinion as to the
                  future or expected value of any currency, security or other
                  interest. EDA does not explicitly or implicitly recommend or
                  suggest any investment strategy of any kind. Content on the
                  service may not be used as a basis for any financial or other
                  product without the express prior written consent of EDA.
                </p>

                <p>
                  The Content provided on the Service is submitted to EDA by
                  unrelated third-party providers. EDA does not review all
                  Content for accuracy, does not review Content for completeness
                  or reliability, and does not warrant or guarantee the
                  accuracy, completeness, reliability or any other aspect of any
                  Content.
                </p>
                <p>
                  The Service and the content published within the Service may
                  include inaccuracies or errors. EDA does not guarantee the
                  accuracy, completeness, timeliness, security, availability or
                  integrity of the service or any content, and disclaims all
                  liability for any errors or other inaccuracies relating to the
                  service or the content. EDA makes no representations about the
                  suitability of the service or any content, or that the service
                  or content will be uninterrupted or operate in combination
                  with any software, service, system or other data or
                  information. The service and all content are provided “as is”
                  without warranty of any kind. EDA disclaims all warranties and
                  conditions that this service, its servers, or any email sent
                  from EDA, are free of viruses or other harmful components. EDA
                  hereby disclaims all warranties and conditions with regard to
                  the service and the content, including all implied warranties
                  and conditions of merchantability, fitness for a particular
                  purpose, title, and non-infringement.
                </p>

                <p>
                  To the maximum extent permitted by applicable law, EDA assumes
                  no liability or responsibility for any (i) errors, mistakes,
                  or inaccuracies of any content; (ii) personal injury or
                  property damage, of any nature whatsoever, resulting from your
                  access to or use of the service; (iii) any unauthorized access
                  to or use of our servers and/or any and all information stored
                  therein; (iv) any interruption of transmission to or from the
                  services (v) any bugs, viruses, trojan horses, or the like
                  that may be transmitted to or through the service by any third
                  party; (vi) any errors or omissions in any content or for any
                  loss or damage incurred as a result of the use of any content
                  posted, transmitted, or otherwise made available through the
                  service; and/or (vii) the defamatory, offensive, or illegal
                  conduct of any third party.
                </p>

                <p>
                  In no event shall EDA (and its respective officers, directors,
                  employees, members, agents, and affiliates) be liable for any
                  direct, indirect, punitive, incidental, special, or
                  consequential damages or damages for lost profits, arising out
                  of, or in any way connected with, your access to or use of the
                  service or with the delay or inability to access, display, or
                  use the service; any computer viruses, information, software,
                  linked services, products, and services obtained through the
                  service; or otherwise arising out of the access to or use of
                  the service whether based on a theory of negligence, contract,
                  tort, strict liability, or otherwise, and even if EDA has been
                  advised of the possibility of such damages.
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
              7.0. Indemnification <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample9">
              <div class="disclaimer-card">
                <p>
                  Except to the extent prohibited under applicable law, you
                  shall indemnify, defend and hold harmless EDA and its members,
                  managers, directors, officers, employees, partners,
                  consultants, contractors, service providers, agents,
                  successors and assigns from and against any and all suits,
                  actions, proceedings and claims by third parties (whether
                  threatened or actual), and all losses, liabilities, damages,
                  judgments, costs and expenses (including reasonable attorneys'
                  fees) arising out of, relating to or in connection with: (i)
                  your use (or misuse) of and access to the Service or Content;
                  (ii) your violation of any of these Terms; (iii) your
                  violation of any applicable law, rule or regulation; (d) any
                  claim that any information provided by you to EDA in
                  connection with the Website, including the Content, caused
                  damage to, infringed upon, misappropriated or otherwise
                  violated the rights of any third party, including
                  infringement, misappropriation or other violation of
                  third-party intellectual property rights, or violation of any
                  right of privacy or publicity; and/or (iv) any dispute that
                  you have with any third party relating to or in connection
                  with the Service or Content. EDA reserves the right, at its
                  own cost, to assume the exclusive defense and control of any
                  matter otherwise subject to indemnification by you, in which
                  event you will fully cooperate with EDA in asserting any
                  available defenses and in the conduct of such defense.
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
              8.0. Third Party Websites <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample10">
              <div class="disclaimer-card">
                <p>
                  The Service may contain links to third-party websites. Your
                  use of all links to third-party websites is at your own risk.
                  We do not monitor or have any control over, and make no claim
                  or representation regarding third-party websites. To the
                  extent such links are provided by us, they are provided only
                  as a convenience, and a link to a third-party websites does
                  not imply our endorsement, adoption or sponsorship of, or
                  affiliation with, such third-party websites.
                </p>

                <p>
                  When you leave the Website, whether via a link contained on
                  the Website or through the use of your web browser or other
                  navigational tool, the information you view is not provided by
                  us. Our terms and policies do not govern your use of
                  third-party websites. We are not responsible for, have no
                  control over and do not monitor or review the content of any
                  other website. A link to a third-party website does not imply
                  sponsorship, approval, affiliation or endorsement by EDA of
                  the linked third-party website or of that third party's
                  products or services.
                </p>

                <p>
                  YOU AGREE THAT EDA WILL NOT, UNDER ANY CIRCUMSTANCES, BE
                  RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY GOODS,
                  SERVICES, INFORMATION, RESOURCES AND/OR CONTENT AVAILABLE ON
                  OR THROUGH ANY THIRD-PARTY WEBSITE OR SERVICES, FOR ANY
                  DEALINGS OR COMMUNICATIONS YOU MAY HAVE WITH THIRD PARTIES, OR
                  FOR ANY HARM, DAMAGES OR LOSS CAUSED OR ALLEGED TO BE CAUSED
                  BY OR IN CONNECTION WITH ANY OF THE FOREGOING OR YOUR USE OF
                  OR RELIANCE ON THE MATERIALS OR THE CONTENT OR BUSINESS
                  PRACTICES OF ANY THIRD PARTY.
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
              9.0. Modification of the Website{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample11">
              <div class="disclaimer-card">
                <p>
                  At any time and in EDA's sole discretion, EDA may (in whole or
                  in part) modify, suspend or discontinue the Service and/or any
                  Content without notice, for any reason. We shall have no
                  liability to you or to any third party for any such
                  modification, suspension or discontinuance.
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
              10.0. Changes to these Terms
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample12">
              <div class="disclaimer-card">
                <p>
                  We may revise these Terms from time to time, without prior
                  notice. You are bound by any changes to these Terms upon our
                  posting of such changes on the Service. You should check these
                  Terms often to make certain that you are aware of the most
                  current Terms.
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
              11.0. Enforcement <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample13">
              <div class="disclaimer-card">
                <p>
                  The remedies available to EDA in these Terms are cumulative
                  and in addition to any others available to EDA. EDA may seek
                  all remedies available to it at law and in equity for any
                  violation of these Terms. EDA may suspend, terminate or block
                  your access to the Service (in whole or in part) for any
                  violation or suspected violation as we determine, without
                  notice to you. Your violation of these Terms shall be
                  considered a breach of contract.
                </p>
                <p>
                  We reserve the right, but do not assume any obligation, to
                  investigate any suspected violation of these Terms or any
                  misuse of the Service. In addition, we further reserve the
                  right to report any activity, data or persons to, and
                  otherwise cooperate with: (i) law enforcement authorities;
                  (ii) financial regulators, (iii) system administrators at
                  Internet service providers, networks or computing facilities;
                  and (iv) providers and/or third-party vendors if we suspect
                  that you have violated these Terms or any law, rule or
                  regulation. You acknowledge that such reporting or cooperation
                  may include, without limitation, providing information
                  relating to you and/or your use of the Service, including
                  without limitation your email address, IP address or other
                  identifying information, to law enforcement authorities,
                  financial regulators, third-party providers, vendors or system
                  administrators. Further, we may disclose any information we
                  think necessary to comply with applicable law, regulation,
                  subpoena or other legal process or governmental or regulatory
                  request.
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
              12.0. Governing Law; Submission to Jurisdiction{" "}
              <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample14">
              <div class="disclaimer-card">
                <p>
                  These Terms and any and all claims, disputes or other legal
                  proceedings by or between you and us, including but not
                  limited to any claims or disputes that are in any way related
                  to or arising out of these Terms or your use of or access to
                  the Service, shall be governed by and construed in accordance
                  with South African laws, without regard to any principles of
                  conflicts of law. You agree that any action arising out of,
                  relating to or in connection with the Service, and/or these
                  Terms shall be litigated solely in a state or federal court of
                  competent jurisdiction located in South Africa, and you
                  further irrevocably submit to the exclusive jurisdiction of
                  such court and waive any objection to jurisdiction and venue
                  (including on the basis of forum non-conveniens).
                </p>

                <p>
                  You acknowledge that any breach of either of the sections
                  above titled "Prohibited Activities" or "Ownership and
                  Intellectual Property” would cause immediate and irreparable
                  harm to EDA, for which monetary damages would not be
                  sufficient, and that, in addition to all other remedies
                  available to EDA at law or in equity, EDA shall be entitled to
                  seek injunctive relief without proof of damages or the posting
                  of bond or other security in the event of such a breach or
                  threatened breach.
                </p>
              </div>
            </div>

            <h4
              className="Legal-Disclaimer"
              data-bs-toggle="collapse"
              href="#collapseExample15"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              13.0. General <span className="icon-floater">+</span>
            </h4>

            <div class="collapse" id="collapseExample15">
              <div class="disclaimer-card">
                <p>
                  These Terms (and any other terms or agreements referenced
                  herein, including our Privacy Policy, which is located at
                  https://edaface.com/privacy), constitute the entire agreement
                  between you and EDA relating to your use of the Service and
                  supersede all prior or contemporaneous communications, whether
                  electronic, oral or written, between you and EDA with respect
                  to the Service. A printed version of these Terms and of any
                  notice given in electronic form shall be admissible in
                  judicial or administrative proceedings based upon or relating
                  to these Terms to the same extent and subject to the same
                  conditions as other business documents and records originally
                  generated and maintained in printed form.
                </p>
                <p>
                  You agree that no joint venture, agency, partnership, or
                  employment relationship exists between you and EDA and/or its
                  affiliates as a result of these Terms or use of the Service.
                </p>
                <p>
                  In no event shall EDA be responsible or liable for any failure
                  or delay in the performance of its obligations hereunder
                  arising out of or caused by, directly or indirectly, forces
                  beyond its control, including, without limitation, strikes,
                  work stoppages, accidents, acts of war or terrorism, civil or
                  military disturbances, nuclear or natural catastrophes or acts
                  of God, and interruptions, loss or malfunctions of utilities,
                  communications or computer (software and hardware) services.
                </p>

                <p>
                  Our performance under these Terms is subject to existing laws
                  and legal process, and nothing contained in these Terms limits
                  our right to comply with law enforcement or other governmental
                  or legal requests or requirements relating to your use of the
                  Service or information provided to, or gathered by, us with
                  respect to such use. To the extent allowed by applicable law,
                  you agree that you will bring any claim or cause of action
                  arising from or relating to your access or use of this Service
                  within two (2) years from the date on which such claim or
                  action arose or accrued or such claim or cause of action will
                  be irrevocably waived.
                </p>

                <p>
                  These Terms, and any rights and licenses granted hereunder,
                  may not be transferred or assigned by you, but may be assigned
                  by EDA without restriction. Any attempted transfer or
                  assignment by you in violation hereof shall be null and void.
                </p>

                <p>
                  If any provision of these Terms, including, but not limited
                  to, the warranty disclaimers and limitations of liability set
                  forth above, is determined to be invalid or unenforceable
                  under applicable law, the invalid or unenforceable provisions
                  in these Terms shall be deemed superseded by valid and
                  enforceable provisions that, to the extent possible, fulfill
                  the business purposes and intent of such invalid and
                  unenforceable provisions.
                </p>

                <p>
                  In addition to and without limiting the preceding paragraph,
                  South Africa and foreign countries may provide rights in
                  addition to those provided in the above "Disclaimers and
                  Limitation of Liability" section or do not allow the exclusion
                  or limitation of implied warranties or liability for
                  incidental or consequential damages. Therefore, the
                  limitations set forth in the above Disclaimer and Limitation
                  of Liability section may not apply to you in whole or in part
                  or there may be state or country specific provisions that
                  supersede such limitations in whole or in part. Any provision
                  of the above Disclaimer and Limitation of Liability section
                  that is declared invalid shall be deemed severable and shall
                  not affect the validity or enforceability of the remainder.
                </p>
                <p>
                  Any heading or section title contained herein is for
                  convenience of reference only and shall not affect the meaning
                  or interpretation of these Terms. The terms "include" and
                  "including" are deemed to include the phrase "without
                  limitation" immediately thereafter.
                </p>
                <p>
                  EDA will not promote pornography or x-rated contents, divisive
                  religious contents, or sexist contents. Penalty for breaking
                  these rules may range from monetary charges to outright ban.
                  Penalty for lying about profile details may range from
                  monetary charges to outright ban. The final decisions will
                  always be made by EDA, and EDA is not obligated to provide an
                  explanation for such decisions (even if you make request for
                  explanation).
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
