import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//components
import DevlogTile from "../components/DevlogTile";

const Devlog = () => {
  const [devlogs, setDevlogs] = useState(null);

  useEffect(() => {
    const fetchDevlogs = async () => {
      const response = await fetch("/algorithmia/devlogs");
      const json = await response.json();

      if (response.ok) {
        setDevlogs(json);
      }
    };

    fetchDevlogs();
  }, []);

  return (
    <div className="devlog">
      <h2>Devlogs Page</h2>
      <div className="devlogs">
        {devlogs &&
          devlogs.map((devlog) => (
            <DevlogTile key={devlog._id} devlog={devlog} />
          ))}
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="dropdown">
              <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filters
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Filter 1</a></li>
                <li><a class="dropdown-item" href="#">Filter 2</a></li>
                <li><a class="dropdown-item" href="#">Filter3</a></li>
              </ul>
            </div>
          </div>
          
          <div class="col-lg-6 mb-4">
            <div class="dropdown">
              <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">A-Z Order</a></li>
                <li><a class="dropdown-item" href="#">By Date</a></li>
                <li><a class="dropdown-item" href="#">By Title</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Should add the below part to DevlogTile component */}
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-3">
            <div class="card text-center" style={{ width: 350 }}>
              <img class="card-img-top" src="user.png" alt=".." />
              <div class="card-body">
                <h5 class="card-title">Devlog Title</h5>
                <p class="card-text">
                  Here goes the description of the Devlog
                </p>
                <a href="DevlogSingle" class="btn btn-primary btn-sm">View More</a>
                <div class="card-footer text-muted">35 comments</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card text-center" style={{ width: 350 }}>
              <img class="card-img-top" src="user.png" alt=".." />
              <div class="card-body">
                <h5 class="card-title">Devlog Title</h5>
                <p class="card-text">
                  Here goes the description of the Devlog
                </p>
                <a href="DevlogSingle" class="btn btn-primary btn-sm">View More</a>
                <div class="card-footer text-muted">35 comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devlog;