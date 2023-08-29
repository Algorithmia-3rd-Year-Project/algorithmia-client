import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

//components
import DevlogTile from "../components/DevlogTile";

const Devlog = () => {
  const [devlogs, setDevlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const type = urlSearchParams.get('type');

  function reloadPageWithVariable(type) {
    const currentURL = new URL(window.location.href);

  if (currentURL.searchParams) {
    // Check if there are any existing query parameters
      for (const key of currentURL.searchParams.keys()) {
        currentURL.searchParams.delete(key);
      }
    
  } else {
    // If searchParams is not available, create a new one
    currentURL.searchParams = new URLSearchParams();
  }

  currentURL.searchParams.set('type', type);
  const newURL = currentURL.href;
    window.location.href = newURL;
  }

  const fetchDevlogsByType = async (type) => {
    try {
      let response;
      if (type === "News") {
        response = await fetch("/algorithmia/devlogNews");
      } else if (type === "Features") {
        response = await fetch("/algorithmia/devlogFeatures");
      } else {
        response = await fetch("/algorithmia/devlogs");
      }

      const json = await response.json();
      if (response.ok) {
        setDevlogs(json);
      }
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevlogsByType(type);
  }, [type]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <section style={{ backgroundColor: "#002b5b" }}>
      <div className="container pt-3" >
        <h3 className="text-center" style={{color: "white"}}>DevLog Page</h3><hr />
        <div className="d-flex justify-content-between">
          <div className="p-2 bd-highlight">
            <div className="dropdown">
              <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#1a5f7a", border: "#1a5f7a"}}>
                Filters
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => reloadPageWithVariable('News')}>News</button></li>
                <li><button className="dropdown-item" onClick={() => reloadPageWithVariable('Features')}>Features</button></li>
              </ul>
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <div className="dropdown">
              <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#1a5f7a", border: "#1a5f7a"}}>
                Sort
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="devlogSort/atoz">A-Z Order</a></li>
                <li><a className="dropdown-item" href="devlogSort/date">Most recent</a></li>
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
    </section>
  );
};

export default Devlog;
