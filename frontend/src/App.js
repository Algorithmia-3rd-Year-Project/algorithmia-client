import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./views/pages/Home";
import Devlog from "./views/pages/Devlogs";
import Signup from "./views/pages/Signup";
import Login from "./views/pages/Login";
import AddDevlog from "./views/pages/AddDevlog";

//components
import Navbar from "./views/components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/devlogs" element={<Devlog />} />
            <Route path="/devlogs/add" element={<AddDevlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
