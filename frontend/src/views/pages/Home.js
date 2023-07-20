import { Link } from "react-router-dom";
import DevlogSingle from "./DevlogSingle";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <p>Other Pages</p>
      <Link to="/devlogsingle/649925302740d709ec4399fb">See one devlog</Link>
    </div>
  );
};

export default Home;
