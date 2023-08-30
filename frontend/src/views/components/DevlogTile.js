
import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DevlogTile = ({ devlog }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card" style={{backgroundColor: "#acdbdf"}}>
        <img className="card-img-top" src={`devlog_images/${devlog.coverImage}`} alt=".." />
        <div className="card-body">
          <h5 className="card-title">{devlog.title}</h5>
          <p className="card-text">
            {devlog.type}
          </p>
          <Link to={`/devlogsingle/${devlog._id}`} className="btn btn-primary btn-sm mb-2 border-0" style={{backgroundColor: "#1a5f7a"}}>View More</Link>
          <div className="card-footer">35 comments</div>
        </div>
      </div>
    </div>
  );
};

export default DevlogTile;
