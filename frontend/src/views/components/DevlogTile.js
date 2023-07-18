import image from "../../images/devlog.jpg";
import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DevlogTile = ({ devlog }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card text-center">
        <img className="card-img-top" src={image} alt=".." />
        <div className="card-body">
          <h5 className="card-title">{devlog.title}</h5>
          <p className="card-text">
            {devlog.type}
          </p>
          <Link to="/devlogsingle"><a href="" class="btn btn-primary btn-sm mb-2">View More</a></Link>
          <div className="card-footer text-muted">35 comments</div>
        </div>
      </div>
    </div>
  );
};

export default DevlogTile;
