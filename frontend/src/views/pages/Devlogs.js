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
    <div className="container mt-3">
      <h3 className="text-center">DevLog Page</h3><hr/>
      <div class="d-flex justify-content-between">
        <div class="p-2 bd-highlight">
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
        <div class="p-2 bd-highlight">
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

      <div className="container mt-3">
        <div className="row g-4">
          {devlogs &&
            devlogs.map((devlog) => (
              <DevlogTile key={devlog._id} devlog={devlog} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Devlog;
