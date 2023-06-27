import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <p>Other Pages</p>
      <Link to="/devlogs">See all devlogs</Link>
    </div>
  );
};

export default Home;
