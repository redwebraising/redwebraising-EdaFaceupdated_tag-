import React from "react";

const donationsModal = () => {
  return (
    <div
      className="modal fade"
      id="donationsModal"
      tabIndex={-1}
      aria-labelledby="donationsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header token-header">
            <h5 className="modal-title" id="donationsModalLabel">
              Welfare Donations
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            "Please, join us in sponsoring orphans and the homeless children in
            Africa by donating to this noble and God-inspired course. <br></br>
            <br></br>You can donate Eda Token, BNB Smartchain (BEP20) or USDT
            Smartchain (BEP20) to: Welfare wallet address:
            0xd08C7af87c2a25cc650610427B6e59Fec58484D8. <br></br>
            <br></br>God bless you for helping the poor child to feed and go to
            school."
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

export default donationsModal;
