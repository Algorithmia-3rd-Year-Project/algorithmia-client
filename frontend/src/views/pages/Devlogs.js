import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="dropdown">
              <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filters
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Filter 1</a></li>
                <li><a className="dropdown-item" href="#">Filter 2</a></li>
                <li><a className="dropdown-item" href="#">Filter3</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="dropdown">
              <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort
              </button>
              <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">A-Z Order</a></li>
                <li><a className="dropdown-item" href="#">By Date</a></li>
                <li><a className="dropdown-item" href="#">By Title</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {devlogs &&
          devlogs.map((devlog) => (
            <DevlogTile key={devlog._id} devlog={devlog} />
          ))}
      </div>
    </div>
  );
};

export default Devlog;
