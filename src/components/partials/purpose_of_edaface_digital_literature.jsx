import Footer2 from "./footer2";
import Nav from "./nav";

const PurposeOfEdafaceDigitalLiterature = () => {
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
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-1 .item-1"
                aria-expanded="true"
                aria-controls="accordion-1 .item-1"
              >
                <strong>PURPOSE OF EDAFACE DIGITAL LITERATURE</strong>
                <br />
                <br />
                <br />
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show item-1"
              role="tabpanel"
              data-bs-parent="#accordion-1"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  EdaFace Digital Literature aims to:
                  <br />
                </p>
                <p className="mb-0" style={{ margin: 0, marginTop: 20 }}>
                  (1). Grant intellectual property right protection to content
                  developers of their creation
                  <br />
                </p>
                <p className="mb-0" style={{ margin: 0, marginTop: 20 }}>
                  (2). Simplify the acts of content development. That is, with
                  just few clicks of buttons, your digital books, songs and
                  plays will be ready for your numerous clients.
                  <br />
                </p>
                <p className="mb-0" style={{ margin: 0, marginTop: 20 }}>
                  (3). Provide a platform for digital content developers (that
                  is, authors, artisans, musicians, etc.) to have direct access
                  to their clients. That is, no more middlemen.
                  <br />
                </p>
                <p className="mb-0" style={{ margin: 0, marginTop: 20 }}>
                  (4). Assist content developers to have full control of the
                  monetization of their products.
                  <br />
                </p>
                <p className="mb-0" style={{ margin: 0, marginTop: 20 }}>
                  (5). Give a consumer the freedom to access full or parts of
                  the contents based on affordability.
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

export default PurposeOfEdafaceDigitalLiterature;
