import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer class="bg-footer mt-5 p-5 d-flex flex-row justify-content-evenly">
        <h1 className="text-white ms-5">Blogr</h1>
        <ul className="navbar-nav d-flex flex-row flex-grow-1 justify-content-evenly">
          <li className="nav-item">
            <a className='nav-link text-white mb-3' href="/#">
              Product
            </a>
            <ul className="list-group">
              <li><a href="/#">Overview</a></li>
              <li><a href="/#">Pricing</a></li>
              <li><a href="/#">Marketplace</a></li>
              <li><a href="/#">Features</a></li>
              <li><a href="/#">Integrations</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className='nav-link text-white mb-3' href="/#">
              Company
            </a>
            <ul className="list-group">
              <li><a href="/#">About</a></li>
              <li><a href="/#">Team</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Careers</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className='nav-link text-white mb-3' href="/#">
              Connect
            </a>
            <ul className="list-group">
              <li><a href="/#">Contact</a></li>
              <li><a href="/#">Newsletter</a></li>
              <li><a href="/#">LinkedIn</a></li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer;