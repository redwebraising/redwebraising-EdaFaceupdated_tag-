import Footer2 from "./footer2";
import Nav from "./nav";

const ListingPlatform = () => {
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
                <strong>LISTING&nbsp; PLATFORM </strong>
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
                  This is a platform for listing of cryptocurrencies. Presently,
                  more than 13400 cryptocurrencies are listed on EdaFace, and
                  the number keeps increasing.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 40 }}>
                  If you desire to list your crypto on EdaFace, you will need to
                  meet the following conditions:
                  <br />
                </p>
                <ol className="text-start" style={{ marginTop: 8 }} type="I">
                  <li>
                    Meet EdaFace’s Terms of Services (see Footnotes)
                    <br />
                  </li>
                  <li>
                    Meet EdaFace SOC Scorecard of at least 20%
                    <br />
                  </li>
                  <li>
                    Pay a listing fee with Eda Token (for now, there is no
                    listing fee because of ongoing EdaFace promo)
                    <br />
                  </li>
                </ol>
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
                <strong>Divisions of the Listing Platform</strong>
                <br />
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
                  Each Division shows you how each of the cryptos on the Listing
                  Platform are arranged.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 3 }}>
                  Cryptos are listed in the order of:
                  <br />
                </p>
                <ol style={{ marginTop: 10 }} type="I">
                  <li>market capitalization</li>
                  <li>trade volume</li>
                  <li>
                    six classes of cryptos as outlined in EdaFace School of
                    Cryptocurrencies (SOC)
                    <br />
                  </li>
                  <li>
                    market price movement – top gainers and top losers
                    <br />
                  </li>
                  <li>
                    Blockchain Ecosystem as outlined in EdaFace SOC.
                    <br />
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ marginRight: 0, textAlign: "left" }}
          >
            <h2 className="accordion-header" role="tab">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-3"
                aria-expanded="true"
                aria-controls="accordion-1 .item-3"
              >
                <strong>Anatomy of each Listed Crypto</strong>
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
                  Each listed crypto will display:
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
                  (a). EdaFace Rank
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This rank is based on market capitalization of the crypto.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  For instance, presently, the crypto with the largest market
                  capitalization is Bitcoin. Hence, EdaFace Rank for Bitcoin is
                  1.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 30,
                    color: "#26b6d4",
                    fontWeight: "bold",
                  }}
                >
                  (b). Price Chart View
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  This displays beautifully colored charts. That is, the Price
                  Chart View gives a visual picture of the price movement of a
                  crypto over a specified time. Such visualisation of price will
                  enable you to make informed decision before, during or after
                  trading a crypto.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  Three different charts are available for each crypto on
                  EdaFace. That means you have a variety of choice in your
                  trading, which is the unique feature of EdaFace, and you
                  cannot see this format on other crypto trading platforms.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 20 }}>
                  The three different charts are:
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#26b6d4",
                    marginRight: 0,
                    textAlign: "left",
                  }}
                >
                  (I). Japanese Candlestick
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  This is a variation of the bar chart but in a prettier,
                  graphic format.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  A Candlestick pattern appears as a series of columns well
                  displayed with each candle representing a trade – a sell or
                  buy – at a specific time.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  To make it easy for a trader to differentiate a sell from a
                  buy trade, the candles are displayed with
                  <br /> two distinct colours – sell candles often appear in red
                  or purple while buy candles are usually blue or green.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  Note you can easily change the colours to any type you like.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#26b6d4",
                    marginRight: 0,
                    textAlign: "left",
                  }}
                >
                  (II). Bar Chart
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  This is a bar graph, which is a type of graph plotted in
                  columns in which each column (often plotted
                  <br /> vertically) represents the opening and closing price of
                  a currency trading pair in a given time.
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{
                    marginTop: 10,
                    color: "#26b6d4",
                    marginRight: 0,
                    textAlign: "left",
                  }}
                >
                  (III). Line Chart
                  <br />
                </p>
                <p
                  className="mb-0"
                  style={{ marginTop: 10, marginRight: 0, textAlign: "left" }}
                >
                  This is simply a line graph that runs across a chart surface,
                  and may not give much information,
                  <br /> especially to a newcomer to the Crypto Market.
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
                  (c). Trade Volume Histogram
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  At the bottom of the Price Chart View, there will be a
                  histogram that will show the volumes of trade
                  <br /> of the listed crypto per time.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  The histogram will appear in two colours just like the
                  Japanese candlesticks. A red or purple colour
                  <br /> often depicts a sell while a blue or green represents a
                  buy.
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
                  (d). The Five Items of EdaFace SOC Scorecard
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  A Crypto project must pass EdaFace SOC Scorecard before it can
                  be listed on EdaFace.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Thus, this area will be linked to the Crypto Verification
                  Centre.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Therefore, it is compulsory that the Crypto Scam Check of the
                  Crypto Verification Centre must be completed before any
                  <br /> listing on EdaFace.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  Note that the Crypto Verification Centre will automatedly and
                  independently score a crypto project during its Crypto Scam
                  Check. If the crypto project scores less than 20% of EdaFace
                  SOC Scorecard, EdaFace system will not allow the crypto to
                  list.
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  For more on this and how you can prepare your crypto project
                  to achieve a good score on the EdaFace SOC Scorecard, visit
                  <br /> the Crypto Verification Centre.
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
                  (e). Market values
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  For each crypto, the following information about market values
                  will be displayed:
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (i). All Time Price High
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (ii). All Time Price Low
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (iii). 24-Hour Price Changes
                  <br />
                </p>
                <p className="mb-0" style={{ marginTop: 10 }}>
                  (iv). Return on Investment (ROI) – calculated from the date of
                  the crypto launch.
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

export default ListingPlatform;
