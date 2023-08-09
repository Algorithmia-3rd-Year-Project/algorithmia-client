import image from "../../images/devlog.jpg";
import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DevlogTile = ({ devlog }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card" style={{backgroundColor: "#002b5b"}}>
        <img className="card-img-top" src={image} alt=".." />
        <div className="card-body">
          <h5 className="card-title" style={{color: "white"}}>{devlog.title}</h5>
          <p className="card-text" style={{color: "white"}}>
            {devlog.type}
          </p>
          <Link to={`/devlogsingle/${devlog._id}`} className="btn btn-primary btn-sm mb-2 border-0" style={{backgroundColor: "#1a5f7a"}}>View More</Link>
          <div className="card-footer" style={{color: "white"}}>35 comments</div>
        </div>
      </div>
    </div>
  );
};

export default DevlogTile;
