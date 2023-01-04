import "./styles.css";

const Intro = () => {
  return (

    <div className="d-flex flex-column align-items-center">
      <h2 className="title fs-5 mt-5">Designed for the future</h2>

      <div className="container-fluid d-flex flex-wrap flex-row align-items-center">
        <div className="col-sm-6">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Introducing an extensible editor</h5>
              <p className="card-text"> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                change the looks of a blog.</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Robust content management</h5>
              <p className="card-text">Flexible content management enables users to easily move through posts. Increase the usability of your blog
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="illustration"></div>
        </div>
      </div>
    </div>

  )
}

export default Intro;