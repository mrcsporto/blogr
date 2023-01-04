import "./styles.css";

const Header = () => {
  return (
    <nav class="px-4 navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/#">Blogr</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/#">Overview</a></li>
                <li><a class="dropdown-item" href="/#">Pricing</a></li>
                <li><a class="dropdown-item" href="/#">Marketplace</a></li>
                <li><a class="dropdown-item" href="/#">Features</a></li>
                <li><a class="dropdown-item" href="/#">Integrations</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/#">About</a></li>
                <li><a class="dropdown-item" href="/#">Team</a></li>
                <li><a class="dropdown-item" href="/#">Blog</a></li>
                <li><a class="dropdown-item" href="/#">Careers</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Connect
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/#">Contact</a></li>
                <li><a class="dropdown-item" href="/#">Newsletter</a></li>
                <li><a class="dropdown-item" href="/#">LinkedIn</a></li>
              </ul>
            </li>
          </ul>
        </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-link me-md-1" type="button">Login</button>
            <button class="btn btn-primary py-2" type="button">Sign Up</button>
          </div>
      </div>
    </nav>
  );
}

export default Header;
