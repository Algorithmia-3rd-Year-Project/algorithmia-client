import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./views/pages/Home";
import Devlog from "./views/pages/Devlogs";
import AddDevlog from "./views/pages/AddDevlog";

//components
import Navbar from "./views/components/Navbar";
import DevlogForm from "./views/components/DevlogForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devlogs" element={<Devlog />} />
            <Route path="/devlogs/add" element={<DevlogForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
