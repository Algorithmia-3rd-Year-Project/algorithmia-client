import icon from "../../images/user.png";
import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DevlogTile = ({ devlog }) => {
  return (
    <div className="devlog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="card text-center">
              <img className="card-img-top" src={icon} alt=".." height="300"/>
              <div className="card-body">
                <h5 className="card-title">{devlog.title}</h5>
                <p className="card-text">
                  {devlog.type}
                </p>
                <Link to="/devlogsingle"><a href="" class="btn btn-primary btn-sm">View More</a></Link>
                <div className="card-footer text-muted">35 comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevlogTile;
