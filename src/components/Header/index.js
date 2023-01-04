import "./styles.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg align-content-start flex-wrap align-content-between p-4">
      <div className="bg-pattern"></div>
        <div className="container-fluid align-items-baseline col-10">
          <a className="navbar-brand me-5" href="/#">Blogr</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle-custom me-md-4 text-white" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <ul className="dropdown-menu shadow border-0">
                  <li><a className="dropdown-item" href="/#">Overview</a></li>
                  <li><a className="dropdown-item" href="/#">Pricing</a></li>
                  <li><a className="dropdown-item" href="/#">Marketplace</a></li>
                  <li><a className="dropdown-item" href="/#">Features</a></li>
                  <li><a className="dropdown-item" href="/#">Integrations</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle-custom me-md-4 text-white" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu shadow border-0">
                  <li><a className="dropdown-item" href="/#">About</a></li>
                  <li><a className="dropdown-item" href="/#">Team</a></li>
                  <li><a className="dropdown-item" href="/#">Blog</a></li>
                  <li><a className="dropdown-item" href="/#">Careers</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle-custom text-white" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Connect
                </a>
                <ul className="dropdown-menu shadow border-0">
                  <li><a className="dropdown-item" href="/#">Contact</a></li>
                  <li><a className="dropdown-item" href="/#">Newsletter</a></li>
                  <li><a className="dropdown-item" href="/#">LinkedIn</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-link me-md-1" type="button">Login</button>
            <button className="btn btn-primary py-2" type="button">Sign Up</button>
          </div>
        </div>
        <div className="container-fluid flex-column col-8 banner-content" >
          <h1 className="title text-white">A modern publishing platform</h1>
          <p className="fs-6 text-white">Grow your audience and build your online brand</p>
          <div className="m-2">
            <button className="btn btn-primary py-2 me-md-3" type="button">Start For Free</button>
            <button className="btn btn-outline-primary py-2" type="button">Learn More</button>
          </div>
        </div>
    
    </nav>
    
  );
}

export default Header;
