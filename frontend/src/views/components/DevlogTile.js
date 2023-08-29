import image from "../../images/devlog.jpg";
import pencil from "../../images/pencil.png";
import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DevlogTile = ({ devlog }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card" style={{backgroundColor: "#acdbdf"}}>
        <img className="card-img-top" src={image} alt=".." />
        <div className="card-body">
          <h5 className="card-title">{devlog.title}</h5>
          <p className="card-text">
            {devlog.type}
          </p>
          <Link to={`/devlogsingle/${devlog._id}`} className="btn btn-primary btn-sm mb-2 border-0" style={{backgroundColor: "#1a5f7a"}}>View More</Link>
          <Link to={`/devlogs/update/${devlog._id}`} ><button  className="btn btn-primary" style={{borderRadius: "50%", width: "35px", height: "35px", backgroundImage: `url(${pencil})`, backgroundSize: "60%", backgroundPosition: "center", backgroundRepeat: "no-repeat", marginLeft: "5%", marginTop: "-3%" }}></button></Link>
          <div className="card-footer">35 comments</div>
        </div>
      </div>
    </div>
  );
};

export default DevlogTile;
