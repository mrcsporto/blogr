import "./styles.css";

const Last = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="laptop-section mt-5">
        <div className="col-sm-6">
          <div className="illustration-laptop"></div>
        </div>
        <div className="col-sm-6">
          <div className="card border-0">
            <div className="card-body mb-3 ps-0">
              <h5 className="card-title mb-3">Free, open, simple</h5>
              <p className="card-text"> Blogr is a free and open source application backed by a large community of helpful developers. It supports
                features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            </div>
            <div className="card-body ps-0">
              <h5 className="card-title mb-3">Powerful tooling</h5>
              <p className="card-text">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Last;






