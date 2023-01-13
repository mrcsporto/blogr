import "./styles.css";

const Middle = () => {
  return (
    <>
      <div className="bg-crop overflow-hidden">
        <div className="bg-pattern-circles"></div>
      </div>
      <div className="bg-container ">
        <div className="container d-flex flex-row flex-wrap">
          <div className="illustration-phones col-12 col-sm"></div>
          <div className="card middle-card border-0 d-flex flex-column pe-0 pe-md-5 col-12 col-sm">
            <div className="card-body mb-3 mt-0 mt-md-5">
              <div className="card-title fs-2 fs-md-5 mb-3 mb-md-2">State of the Art Infrastructure</div>
              <div className="card-text">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Middle;