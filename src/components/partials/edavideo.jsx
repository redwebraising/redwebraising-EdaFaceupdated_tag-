const EdafaceVideo = () => {
  return (
    <div className="row bac-how mt-1 mb-0 ml-5 mr-5 embed">
      <h2 className="main-heading video-header" style={{ marginTop: "70px" }}>
        Short Videos About EdaFace{" "}
      </h2>

      <div className="col-sm-6">
        <div className="card card-video">
          <div className="card-body">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/K6WZkY1Iq8A"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mt-0">
        <div className="card card-video">
          <div className="card-body">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/3eFn20qV6LA"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdafaceVideo;
