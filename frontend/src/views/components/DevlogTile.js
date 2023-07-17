import icon from "../../images/user.png";

import { Link } from "react-router-dom";

const DevlogTile = ({ devlog }) => {
  return (
    <div className="devlog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 mb-4">
            <div class="card text-center">
              <img class="card-img-top" src={icon} alt=".." height="300"/>
              <div class="card-body">
                <h5 class="card-title">{devlog.title}</h5>
                <p class="card-text">
                  {devlog.type}
                </p>
                <Link to="/devlogsingle"><a href="" class="btn btn-primary btn-sm">View More</a></Link>
                <div class="card-footer text-muted">35 comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevlogTile;
