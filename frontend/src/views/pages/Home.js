import { Link } from "react-router-dom";
import DevlogSingle from "./DevlogSingle";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <p>Other Pages</p>
      <Link to="/devlogsingle">See one devlog</Link>
    </div>
  );
};

export default Home;
