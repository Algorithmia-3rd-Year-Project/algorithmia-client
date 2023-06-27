import { useEffect, useState } from "react";

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
    </div>
  );
};

export default Devlog;
