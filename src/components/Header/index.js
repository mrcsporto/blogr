import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const handleClick = (element) => {
    element.currentTarget.classList.toggle('toggle-up')
    element.currentTarget.classList.toggle('show')
  };

  const handleToggle = (element) => {
    element.currentTarget.classList.toggle('navbar-toggler-icon-close')
  };

  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)

      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [setWidth])

    return width
  }

  const wide = useWindowWide(400)

  return (
    <nav className="navbar navbar-expand-lg flex-wrap align-content-between p-lg-5 mb-5 " data-bs-theme="dark">
      <div className="bg-pattern"></div>
      <div className="container align-items-baseline col-10">
        <a className="brand me-4 mt-2" href="/blogr" alt="Logo"> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" onClick={handleToggle}></span>
        </button>
        <div className="collapse navbar-collapse mt-5" id="navbarNavDropdown">
          <ul className="navbar-nav shadow-sm-lg">
            <li className="nav-item dropdown">
              <a className='toggle-down nav-link me-md-3 text-white mt-4 mt-md-0' onClick={handleClick} href="/blogr" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul className="dropdown-menu shadow border-0">
                <li><a className="dropdown-item" href="/blogr">Overview</a></li>
                <li><a className="dropdown-item" href="/blogr">Pricing</a></li>
                <li><a className="dropdown-item" href="/blogr">Marketplace</a></li>
                <li><a className="dropdown-item" href="/blogr">Features</a></li>
                <li><a className="dropdown-item" href="/blogr">Integrations</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className='toggle-down nav-link me-md-3 text-white' onClick={handleClick} href="/blogr" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </a>
              <ul className="dropdown-menu shadow border-0">
                <li><a className="dropdown-item" href="/blogr">About</a></li>
                <li><a className="dropdown-item" href="/blogr">Team</a></li>
                <li><a className="dropdown-item" href="/blogr">Blog</a></li>
                <li><a className="dropdown-item" href="/blogr">Careers</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className='toggle-down nav-link me-md-3 text-white' onClick={handleClick} href="/blogr" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Connect
              </a>
              <ul className="dropdown-menu shadow border-0">
                <li><a className="dropdown-item" href="/blogr">Contact</a></li>
                <li><a className="dropdown-item" href="/blogr">Newsletter</a></li>
                <li><a className="dropdown-item" href="/blogr">LinkedIn</a></li>
              </ul>
            </li>
            <li>
              <hr className="w-60 mx-auto"></hr>
              <form>
              {wide <= 500 ?
                <div className="d-grid gap-2 d-md-flex justify-content-md-end justify-content-center buttons">
                  <button className="btn btn-link me-md-1 text-center" type="button">Login</button>
                  <button className="btn btn-primary py-3 mb-4" type="button">Sign Up</button>
                </div> : ""}
                </form>
            </li>
          </ul>
        </div>
        {wide <= 500 ? "" :
          <div className="d-grid gap-2 d-md-flex justify-content-md-end buttons">
            <button className="btn btn-link me-md-1" type="button">Login</button>
            <button className="btn btn-primary py-2" type="button">Sign Up</button>
          </div>}
      </div>
      <div className="container d-flex flex-column flex-wrap col-lg-8 col justify-content-evenly banner-content" >
        <h1 className="title text-white px-4 mx-1 mb-md-4 text-center">A modern publishing platform</h1>
        <p className="fs-6 text-white px-5 text-center">Grow your audience and build your online brand</p>
        <div className="m-2">
          <button className="btn btn-primary py-2 me-3" type="button">Start For Free</button>
          <button className="btn btn-outline-primary py-2" type="button">Learn More</button>
        </div>
      </div>
    </nav>

  );
}

export default Header;


