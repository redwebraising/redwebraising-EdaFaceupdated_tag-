import Footer2 from "./footer2";
import Nav from "./nav";

const SOCInterpretations = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container col-xxl-8 px-4 py-5 resources">
        <div className="accordion" role="tablist" id="accordion-1">
          <div className="accordion-item">
            <h2
              className="accordion-header"
              role="tab"
              style={{ color: "#2315a7" }}
            >
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="false"
                aria-controls="accordion-1 .item-1"
              >
                <strong>SOC INTERPRETATION OF THE 4-YEAR SCORECARD</strong>
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
                  Besides being comprehensive, EdaFace SOC 4-year Scorecard is
                  also very <strong>SIMPLE </strong>to use. The answer to each
                  investigative question is given a weighted score within the
                  range of 0 to 1.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The summed up maximum score is 15 (see{" "}
                  <strong>Table 1:</strong>{" "}
                  <strong>SOC Scorecard for Rugpull Detection</strong>
                  …hyperlinked please). The scores are expressed in percentage.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  &nbsp;The simplicity of EdaFace SOC 4-year Scorecard is that
                  the only thing you will be required to do is
                  <br /> simply to supply answers to the questions.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  When you input the required parameters, EdaFace system will
                  sum up the scores (referred to as <strong>Total Score</strong>
                  ) for that crypto.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The Total Score gives the overview potential productivity of
                  the crypto Project as follows:
                  <br />
                </p>
                <ul style={{ marginTop: 10 }}>
                  <li>
                    Total Score ≤ 20%: Bad Investment.
                    <br />
                  </li>
                  <li>Total Score of 21 to 40%: Cautious Investment</li>
                  <li>Total Score of 41 to 60%: Good Investment</li>
                  <li>Total Score of 61 to 80%: Very Good Investment</li>
                  <li>
                    Total Score of 81 to 100%: Awesome Investment
                    <br />
                  </li>
                </ul>
                <section className="mt-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className="card-header py-2">
                            <p
                              className="lead text-info m-0"
                              style={{ fontWeight: "bold" }}
                            >
                              <strong>
                                Table 2: SOC Interpretation of Score
                              </strong>
                              <br />
                            </p>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive table mb-0 pt-3 pe-2">
                              <table className="table table-striped table-sm my-0 mydatatable">
                                <thead>
                                  <tr>
                                    <th style={{ textAlign: "center" }}>
                                      <strong>Total Score</strong>
                                      <br />
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                      <strong>Percentage</strong>
                                      <br />
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                      <strong>
                                        Investment Interpretation&nbsp;
                                      </strong>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "center" }}>
                                      0 – 3.0
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      0 – 20
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      Bad Investment
                                      <br />
                                    </td>
                                  </tr>
                                  <tr style={{ textAlign: "center" }}>
                                    <td style={{ textAlign: "center" }}>
                                      3.1 – 6.0
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      21 – 40
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      Cautious Investment
                                      <br />
                                    </td>
                                  </tr>
                                  <tr style={{ textAlign: "center" }}>
                                    <td style={{ textAlign: "center" }}>
                                      6.1 – 9.0
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      6.1 – 9.0
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      Good Investment
                                      <br />
                                    </td>
                                  </tr>
                                  <tr style={{ textAlign: "center" }}>
                                    <td style={{ textAlign: "center" }}>
                                      9.1 – 12.0
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      61 – 80
                                      <br />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      Very Good Investment
                                      <br />
                                    </td>
                                  </tr>
                                  <tr style={{ textAlign: "center" }}>
                                    <td style={{ textAlign: "center" }}>
                                      12.1 – 15.0
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      81 – 100{" "}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      Awesome Investment{" "}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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
                <strong>Summary:</strong>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse item-2"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  In other words, based on EdaFace SOC 4-year Scorecard, there
                  are five types of outcomes in crypto investment:{" "}
                  <strong>Bad, Cautious,&nbsp; Good, Very Good, </strong>and{" "}
                  <strong>Awesome </strong>investment.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  A Bad Investment is one you shouldn’t enter into while for a
                  Cautious Investment, you have to really weigh the risks.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  EdaFace will not list a crypto project with a score ≤ 20%: Bad
                  Investment.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  <em>
                    Generally, it is very difficult to see an awesome
                    investment.
                  </em>{" "}
                  But if you search diligently, you can get one. If you see an
                  awesome investment, rush in with your whole heart and reap the
                  awesome profits.
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
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>Warning Note:</strong>
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-3"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  Even though EdaFace SOC 4-year Scorecard system will build up
                  a measure of trust in users, but still there can’t be 100%
                  certainty that there are no malicious intents involved in a
                  crypto project.{" "}
                  <em>
                    Therefore, always Do Your Own Research (DYOR) and invest
                    only what you can afford to lose
                  </em>
                  .<br />
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

export default SOCInterpretations;
