import "./styles.css";

const First = () => {
  return (
    <>
      <h2 className="title fs-2 mt-5 text-center">Designed for the future</h2>

      <div className="row d-flex flex-wrap align-items-center design-section">
        <div className="col-md-6 col-12 order-2 order-md-1">
          <div className="card-body mb-3 px-5 ps-md-5">
            <h5 className="card-title mb-3 fs-4">Introducing an extensible editor</h5>
            <p className="card-text fs-6"> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.</p>
          </div>
        </div>
        <div className="col-md-6 col-12 order-1 order-md-2">
          <div className="illustration-editor "></div>
        </div>
      </div>





    </>

  )
}

export default First;

// <div className="d-flex flex-column align-items-center design-section mb-5">
// <h2 className="title fs-5 mt-5">Designed for the future</h2>
// <div className="d-flex flex-wrap flex-row align-items-center">
//   <div className="col-sm-6">
//     <div className="card border-0">
//       <div className="card-body mb-3">
//         <h5 className="card-title mb-3">Introducing an extensible editor</h5>
//         <p className="card-text"> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
//           The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
//           videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
//           change the looks of a blog.</p>
//       </div>
//       <div className="card-body">
//         <h5 className="card-title mb-3">Robust content management</h5>
//         <p className="card-text">Flexible content management enables users to easily move through posts. Increase the usability of your blog
//           by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6">
//     <div className="illustration-editor"></div>
//   </div>
// </div>
// </div>
// )