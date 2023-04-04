import Footer2 from "./footer2";
import Nav from "./nav";

const RugPullDetection = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container col-xxl-8 px-4 py-5 resources">
        <div className="accordion" role="tablist" id="accordion-1">
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="false"
                aria-controls="accordion-1 .item-1"
              >
                <strong>RUGPULL DETECTION CENTRE</strong>
                <br />
                <br />
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-1"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  This compartment will help users to identify Rugpull scams
                  that are very common in the Crypto Market. Rugpull scams will
                  be identified using EdaFace{" "}
                  <strong>SOC 4-Year Scorecard</strong>.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The SOC Scorecard, developed by EdaFace School of
                  Cryptocurrencies (SOC), consists of five items, each item
                  having 2 or more evaluative features.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The verification process of EdaFace system will automatedly
                  confirm these evaluative features.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Some of these evaluative features of SOC Scorecard are
                  compulsory; that is, they must have{" "}
                  <strong>Automated Confirmation&nbsp;</strong>before any Crypto
                  Project can be listed on EdaFace.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The followings are the Five Items of SOC Scorecard:
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-2"
                aria-expanded="false"
                aria-controls="accordion-1 .item-2"
              >
                <strong>Item 1: Project team</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  The identities of the Project Team MUST be identified as
                  follows:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (1). Official Names of Project Team
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The official names and identities of each Core Project Team
                  member must be <strong>Automatedly Confirm</strong>.<br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The Core Project Team members that must be verified are:
                  <br />
                </p>
                <ol type="I" style={{ marginTop: 10 }}>
                  <li>
                    Founder (CEO, Director, or whatever title he goes by) – the
                    founder or the most high-ranking executive of the Crypto
                    Project
                    <br />
                  </li>
                  <li>
                    Chief Technical Officer (CTO) - the executive in charge of
                    an organization's technological needs as well as its
                    research and development
                    <br />
                  </li>
                  <li>
                    Chief Marketing Officer (CMO) – the CMO is the officer in
                    charge of marketing.
                    <br />
                  </li>
                  <li>
                    Chief Admin Officer – this is the officer in charge of
                    personnel and company’s front office.
                  </li>
                  <li>Head of Legal Matters</li>
                  <li>
                    Head of Finances
                    <br />
                  </li>
                  <li>Chairman of Board of Directors (BOD)</li>
                </ol>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  Verification will be of <strong>three kinds</strong>:<br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (a). LinkedIn account Verification
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  <strong>Automated Confirmation</strong> of the LinkedIn
                  account of each of the above Core Team Members is required.
                  <br /> Meaning, each member must supply their LinkedIn
                  account, which EdaFace system will confirm automatedly.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Each confirmed LinkedIn account will be awarded a score of
                  0.1.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (b). National Identification Verification
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  All the Core Team Members mentioned above will be required to
                  undergo National Identification Verification. This means each
                  of them will need to upload their national identification,
                  e.g. passport,
                  <br /> ID card, etc. for verification.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Each confirmed upload of national identification will be
                  awarded a score of 0.2.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (c). Facial Recognition
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  A camera will take the facial picture of each Core Team
                  member.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Each confirmed facial verification will be awarded a score of
                  0.2.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (2). Ownership renunciation
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This refers to the owner or creator of the cryptocurrency
                  renouncing control so that crypto fully belongs to the public.
                  Evidence of Ownership Renunciation is{" "}
                  <strong>Not An Automated Confirmation</strong>.<br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Ownership renunciation can be confirmed via websites
                  like&nbsp;
                  <a href="https://tokensniffer.com/">
                    https://tokensniffer.com/
                  </a>
                  &nbsp;and&nbsp;
                  <a href="http://www.bscheck.eu/bsc">
                    http://www.bscheck.eu/bsc
                  </a>
                  .
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Ownership Renunciation will be awarded a score of 1.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (3). Confirmation of Crypto Project Website
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This requires <strong>Automated Confirmation.</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The website of a crypto project can be confirmed in{" "}
                  <a href="https://whois.domaintools.com/">
                    https://whois.domaintools.com/
                  </a>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Confirmation of Crypto Project Website will be awarded a score
                  of 0.5.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (4). Auditing
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  An audit of a Crypto Project establishes
                  <strong> reputability</strong> as well as{" "}
                  <strong>reliability</strong>, hence, determining how the
                  Crypto Market will react to the crypto project.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The question to be answered is:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    fontWeight: "bold",
                    color: "#26b6d4",
                  }}
                >
                  (a). Has your Crypto Project been audited by any of the
                  followings?
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>Certik</li>
                  <li>
                    Hacken
                    <br />
                  </li>
                  <li>ConsenSys</li>
                </ul>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    fontWeight: "bold",
                    color: "#26b6d4",
                  }}
                >
                  (b). If yes, supply the URL link.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The above mentioned are the reputable crypto auditors in the
                  industry. EdaFace will be expanding the list as more audit
                  firms prove their reputability and reliability.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Crypto Audit requires <strong>Automated Confirmation.</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Once your Crypto Project has been confirmed to be audited, it
                  receives a score of 1 (0.5 point each for reputability and
                  reliability).
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="false"
                aria-controls="accordion-1 .item-3"
              >
                <strong>Item 2: Application protocol</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (1). Project Whitepaper
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This requires <strong>Automated Confirmation</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  It seeks to ascertain the <strong>transparency</strong> and{" "}
                  <strong>reliability</strong> of the crypto project.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The question is:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    Is there a well-documented whitepaper for the Project?
                    <br />
                  </li>
                  <li>If yes, supply the whitepaper URL link.</li>
                </ol>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Once your Crypto Project whitepaper has been confirmed, it
                  receives a score of 0.5 (0.25 point each for transparency and
                  reliability).
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (2). Social Media links
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This <strong>Does Not Require</strong>{" "}
                  <strong>Automated Confirmation</strong>, and the evaluative
                  questions are:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (a). Does your Crypto Project have the following active social
                  media accounts?
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    Twitter
                    <br />
                  </li>
                  <li>
                    Telegram
                    <br />
                  </li>
                  <li>
                    Facebook
                    <br />
                  </li>
                  <li>Instagram</li>
                  <li>
                    Youtube
                    <br />
                  </li>
                </ol>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (b). If yes, supply the URL links.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (Note that you can Confirm Twitter account genuineness here:{" "}
                  <a href="https://www.followeraudit.com/">
                    https://www.followeraudit.com/
                  </a>
                  )<br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  Each confirmed social media platform will receive a score of
                  0.1
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (3). Source Code (e.g. Github)
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This requires <strong>Automated Confirmation.</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  It seeks to establish <strong>transparency&nbsp;</strong>and{" "}
                  <strong>reliability</strong> of the crypto project.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The question will be:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (a). Does the Crypto Project have an accessible Source Code?
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (b). If yes, supply the URL link?
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  Once confirmed, the project will receive a score of 0.5.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (4). DeFi application
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This <strong>Does Not Require</strong>{" "}
                  <strong>Automated Confirmation</strong>.<br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The question to be asked is:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  <em>
                    Is there or will there be a DeFi application in the crypto
                    project within 12 months?
                  </em>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  This seeks to establish how long the crypto project will
                  remain profitable in the market (<strong>durability</strong>).
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  Once confirmed to have an associated DeFi program, the project
                  will receive a score of 0.5.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (5). Locked Liquidity
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This requires <strong>Automated Confirmation.</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The question will be:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontStyle: "italic",
                  }}
                >
                  <em>(a). Has the wallet holding the LP pair been locked?</em>
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontStyle: "italic",
                  }}
                >
                  (b). If yes, provide the URL link.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  Once Locked Liquidity has been confirmed, the project will
                  receive a score of 1.0.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (6). TimeLock
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The question will be:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontStyle: "italic",
                  }}
                >
                  (a). Any timelock in contract?
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#212529",
                    fontStyle: "italic",
                  }}
                >
                  (b). If yes, provide the URL link.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#212529" }}>
                  Once Time-Lock has been confirmed, the project will receive a
                  score of 0.5.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-4"
                aria-expanded="false"
                aria-controls="accordion-1 .item-4"
              >
                <strong>Item 3: Use case</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-4"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This will identify each of the crypto’s use cases.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This requires <strong>Automated Confirmation</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The statement will be:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  <em>
                    Please, supply the use case(s) of your crypto (maximum three
                    use cases):
                  </em>
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>
                    Use Case 1<br />
                  </li>
                  <li>
                    Use Case 2<br />
                  </li>
                  <li>
                    Use Case 3<br />
                  </li>
                </ol>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Each use case that has been identified will receive a score of
                  0.5.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-5"
                aria-expanded="false"
                aria-controls="accordion-1 .item-5"
              >
                <strong>Item 4: Coin supply</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-5"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This requires <strong>Automated Confirmation</strong>, and it
                  demands the following information:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (1). Please, enter the{" "}
                  <strong>Maximum Coin Supply&nbsp;</strong>as seen on the
                  blockchain.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Supply the blockchain URL of the Maximum Coin Supply.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This will receive a score of 0.5.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (2). How much coin has been burnt [
                  <strong>Burnt Amount</strong>
                  ]?
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Supply the blockchain URL of the coin burnt.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  This will receive a score of 0.5.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (3). EdaFace system will then subtract the coin burnt from the
                  Maximum Supply.The result will yield the{" "}
                  <strong>Total</strong> <strong>Coin Supply.</strong>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Note that where the Maximum Coin Supply is not known, you must
                  input the Total Coin Supply.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Total Coin Supply will receive a score of 0.5.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (4). Please, provide the following details on Locked-up Coins:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (a). Amount of coins that have been locked up as LP.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The URL link of the locked LP.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (b). The amount of Team allocation that has been locked up.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The URL link of the Team allocation.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (c). The amount of any other coins that have been locked up.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The URL link of the locked-up coins.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  (d). EdaFace system will automatedly sum up all the amount of
                  coins that have been locked up [
                  <strong>Locked-Up Amount</strong>].
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The Locked-Up Amount will receive a score of 0.5.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (5). EdaFace system will now automatedly subtract the
                  Locked-up Amount from the Total Coin
                  <br /> Supply. The result will be the{" "}
                  <strong>Circulating Coin Supply</strong>.<br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The determination of the Circulating Coin Supply will receive
                  a score of 0.5.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-6"
                aria-expanded="true"
                aria-controls="accordion-1 .item-6"
              >
                <strong>Item 5: Market Value</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-6"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (1) Listed Exchanges
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (a). Indicate the Centralised Exchanges where your crypto has
                  been listed.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Provide the URL link.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (b). Indicate the Decentralized Exchanges where your crypto
                  has been listed.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  Provide the URL link.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20, color: "#26b6d4" }}>
                  (c). When the listed exchange(s) is provided, EdaFace system
                  will automatedly pull out the crypto current
                  <strong> Market Price</strong>.<br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The generated Market Price will receive a score of 0.5.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 20,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (2). Finally, EdaFace system will multiply the generated
                  Circulating Coin Supply by the current Market Price. The
                  result will be the coin’s{" "}
                  <strong>Market Capitalization</strong>, which should appear
                  automatically once the Circulating Supply and the Current
                  Market price are known.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  That is:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  <em>
                    Market Capitalization = Circulating Supply x Market Price
                  </em>
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10, color: "#212529" }}>
                  The generated Market Capitalization will receive a score of
                  1.0.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default RugPullDetection;
