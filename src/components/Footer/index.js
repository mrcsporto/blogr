import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer class="bg-footer mt-5 p-5 d-sm-flex flex-sm-row flex-column justify-content-cente text-center text-sm-start">
        <h1 className="text-white fs-1 ms-0 ms-md-5">Blogr</h1>
        <ul className="navbar-nav d-sm-flex flex-sm-row  flex-column flex-grow-1 justify-content-evenly">
          <li className="nav-item">
            <a className='nav-link text-white mb-3 mt-5 mt-sm-0' href="/blogr">
              Product
            </a>
            <ul className="list-group">
              <li><a href="/blogr">Overview</a></li>
              <li><a href="/blogr">Pricing</a></li>
              <li><a href="/blogr">Marketplace</a></li>
              <li><a href="/blogr">Features</a></li>
              <li><a href="/blogr">Integrations</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className='nav-link text-white mb-3 mt-4 mt-sm-0' href="/blogr">
              Company
            </a>
            <ul className="list-group">
              <li><a href="/blogr">About</a></li>
              <li><a href="/blogr">Team</a></li>
              <li><a href="/blogr">Blog</a></li>
              <li><a href="/blogr">Careers</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className='nav-link text-white mb-3 mt-4 mt-sm-0' href="/blogr">
              Connect
            </a>
            <ul className="list-group">
              <li><a href="/blogr">Contact</a></li>
              <li><a href="/blogr">Newsletter</a></li>
              <li><a href="/blogr">LinkedIn</a></li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer;