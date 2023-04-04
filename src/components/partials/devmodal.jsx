import React from "react";

const devModal = () => {
  return (
    <div
      className="modal fade"
      id="devModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header token-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Under Development
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            The following component is still under development
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn-edaface-intro"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default devModal;
