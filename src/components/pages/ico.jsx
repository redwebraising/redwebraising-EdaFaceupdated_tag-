import React from "react";
import { useEffect } from "react";
import Nav from "../partials/nav";

import Footer2 from "../partials/footer2";

const Ico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav></Nav>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-token">
              <h3 className="token-holder">Fund Raising target</h3>
              <p className="intro-token">
                Softcap = 500 BNB = 200 000 USD (at 1BNB = 400 USD)
              </p>
              <p className="intro-token">
                Hardcap = 126 142 BNB = 50 456 800 USD (at 1BNB = 400 USD)
              </p>
              <br />

              <h3 className="token-holder">Presale Phases</h3>
              <p className="intro-token">
                There will be 30 Phases of Presales.
              </p>
              <p className="intro-token">
                Starting Presale Price: 0.000 000 5 USD
              </p>
              <p className="intro-token">Last Presale Price: 0.000 008 USD</p>
              <br />
              <p className="intro-token">
                Total token allocation for each Presale Phase is shown in Table
                1.
              </p>
              <p className="intro-token">
                The target generated funds for each Presale Phase is shown in
                Table 1.
              </p>
              <br />
              <p className="intro-token">
                <span className="token-holder">Minimum Buy</span>= 0.05 BNB = 20
                USD (at 400 USD per BNB)
              </p>
              <p className="intro-token">
                <span className="token-holder">Maximum Buy</span>= 50 BNB = 20
                000 USD (at 400 USD per BNB)
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card-token mt-0">
              <div className="data-table mt-0">
                <div className="card shadow">
                  <div className="card-header py-2">
                    <p
                      className="lead text-info m-0"
                      style={{
                        color: "#26b6d4",
                        fontWeight: "semi-bold",

                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      <strong>
                        Table 1:&nbsp;Eda Token ICO Presale Phases
                      </strong>
                    </p>
                  </div>
                  <div className="card-body">
                    <div
                      className="table-responsive table mb-0 pt-3 pe-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <table className="table table-striped table-sm my-0 mydatatable">
                        <thead
                          style={{
                            color: "#26b6d4",
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          <tr>
                            <th>Presale Phase</th>
                            <th>Price (USD)</th>
                            <th style={{ textAlign: "center" }}>
                              Token Allocation (x<strong>10^9)</strong>
                            </th>
                            <th>Fund (USD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>0.000 000 50</td>
                            <td style={{ textAlign: "center" }}>214</td>
                            <td>107 000</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>0.000 000 60</td>
                            <td style={{ textAlign: "center" }}>214</td>
                            <td>128 400</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              0.000 000 65
                              <br />
                            </td>
                            <td style={{ textAlign: "center" }}>214</td>
                            <td>139 100</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>0.000 000 70</td>
                            <td style={{ textAlign: "center" }}>214</td>
                            <td>149 800</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              0.000 000 75
                              <br />
                            </td>
                            <td style={{ textAlign: "center" }}>214</td>
                            <td>160 500</td>
                          </tr>
                          <tr
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              color: "#26b6d4",
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            <td style={{ fontSize: 15 }}>Subtotal</td>
                            <td />
                            <td style={{ textAlign: "center" }}>1 070</td>
                            <td>684 800</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              0.000 000 80
                              <br />
                            </td>
                            <td style={{ textAlign: "center" }}>274</td>
                            <td>219 200</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              0.000 000 85
                              <br />
                            </td>
                            <td style={{ textAlign: "center" }}>274</td>
                            <td>232 900</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              0.000 000 90
                              <br />
                            </td>
                            <td style={{ textAlign: "center" }}>274</td>
                            <td>246 600</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              0.000 000 95
                              <br />
                            </td>
                            <td style={{ textAlign: "center" }}>274</td>
                            <td>260 300</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              0.000 001 0<br />
                            </td>
                            <td style={{ textAlign: "center" }}>274</td>
                            <td>274 000</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              color: "#26b6d4",
                              fontSize: 15,
                            }}
                          >
                            <td>Subtotal</td>
                            <td />
                            <td style={{ textAlign: "center" }}>1 370</td>
                            <td>1 233 000</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>
                              0.000 001 5<br />
                            </td>
                            <td style={{ textAlign: "center" }}>334</td>
                            <td>501 000</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>
                              0.000 002 0<br />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              334
                              <br />
                            </td>
                            <td>668 000</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>
                              0.000 002 5<br />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              334
                              <br />
                            </td>
                            <td>835 000</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>
                              0.000 003 0<br />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              334
                              <br />
                            </td>
                            <td>1 002 000</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>
                              0.000 003 5<br />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              334
                              <br />
                            </td>
                            <td>
                              1 169 000
                              <br />
                            </td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              color: "#26b6d4",
                              fontSize: 15,
                            }}
                          >
                            <td>Subtotal</td>
                            <td />
                            <td style={{ textAlign: "center" }}>1 670</td>
                            <td>4 175 000</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>
                              0.000 004 0<br />
                            </td>
                            <td style={{ textAlign: "center" }}>394</td>
                            <td>1 579 000</td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>
                              0.000 004 5<br />
                            </td>
                            <td style={{ textAlign: "center" }}>394</td>
                            <td>1 773 000</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>
                              0.000 005 0<br />
                            </td>
                            <td style={{ textAlign: "center" }}>394</td>
                            <td>1 970 000</td>
                          </tr>
                          <tr>
                            <td>19</td>
                            <td>0.000 005 5</td>
                            <td style={{ textAlign: "center" }}>394</td>
                            <td>2 167 000</td>
                          </tr>
                          <tr>
                            <td>20</td>
                            <td>0.000 006 0</td>
                            <td style={{ textAlign: "center" }}>394</td>
                            <td>2 364 000</td>
                          </tr>
                          <tr
                            style={{
                              color: "#26b6d4",
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            <td>Subtotal</td>
                            <td />
                            <td style={{ textAlign: "center" }}>1 970</td>
                            <td>9 850 000</td>
                          </tr>
                          <tr>
                            <td>21</td>
                            <td>0.000 006 2</td>
                            <td style={{ textAlign: "center" }}>454</td>
                            <td>2 814 800</td>
                          </tr>
                          <tr>
                            <td>22</td>
                            <td>0.000 006 4</td>
                            <td style={{ textAlign: "center" }}>454</td>
                            <td>2 905 600</td>
                          </tr>
                          <tr>
                            <td>23</td>
                            <td>0.000 006 6</td>
                            <td style={{ textAlign: "center" }}>454</td>
                            <td>2 996 400</td>
                          </tr>
                          <tr>
                            <td>24</td>
                            <td>0.000 006 8</td>
                            <td style={{ textAlign: "center" }}>454</td>
                            <td>3 087 200</td>
                          </tr>
                          <tr>
                            <td>25</td>
                            <td>0.000 007 0</td>
                            <td style={{ textAlign: "center" }}>454</td>
                            <td>3 178 000</td>
                          </tr>
                          <tr
                            style={{
                              color: "#26b6d4",
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            <td>Subtotal</td>
                            <td />
                            <td style={{ textAlign: "center" }}>2 270</td>
                            <td>14 982 000</td>
                          </tr>
                          <tr>
                            <td>26</td>
                            <td>
                              0.000 007 2<br />
                            </td>
                            <td style={{ textAlign: "center" }}>514</td>
                            <td>3 700 800</td>
                          </tr>
                          <tr>
                            <td>27</td>
                            <td>
                              0.000 007 4<br />
                            </td>
                            <td style={{ textAlign: "center" }}>514</td>
                            <td>3 803 600</td>
                          </tr>
                          <tr>
                            <td>28</td>
                            <td>
                              0.000 007 6<br />
                            </td>
                            <td style={{ textAlign: "center" }}>514</td>
                            <td>3 906 400</td>
                          </tr>
                          <tr>
                            <td>29</td>
                            <td>
                              0.000 007 8<br />
                            </td>
                            <td style={{ textAlign: "center" }}>514</td>
                            <td>4 009 200</td>
                          </tr>
                          <tr>
                            <td>30</td>
                            <td>
                              0.000 008 0<br />
                            </td>
                            <td style={{ textAlign: "center" }}>514</td>
                            <td>4 112 000</td>
                          </tr>
                          <tr
                            style={{
                              color: "#26b6d4",
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            <td>Subtotal</td>
                            <td />
                            <td style={{ textAlign: "center" }}>570</td>
                            <td>19 532 000</td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td />
                          </tr>
                          <tr
                            style={{
                              color: "#26b6d4",
                              fontWeight: "bold",
                              fontSize: 17,
                            }}
                          >
                            <td>Grand Total</td>
                            <td />
                            <td style={{ textAlign: "center" }}>10 920</td>
                            <td>50 456 800</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2></Footer2>
    </div>
  );
};

export default Ico;
