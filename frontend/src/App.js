import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import { CommentProvider } from './views/components/CommentContext';

//pages
import Home from "./views/pages/Home";
import Devlog from "./views/pages/Devlogs";
import Signup from "./views/pages/Signup";
import Login from "./views/pages/Login";
import AddDevlog from "./views/pages/AddDevlog";
import AdvertiserDashboard from "./views/pages/AdvertiserDashboard";
import DevlogSingle from "./views/pages/DevlogSingle";

//components
import Navbar from "./views/components/Navbar";

function App() {
  return (
    <div className="App">
      <CommentProvider>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/devlogs" element={<Devlog />} />
            <Route path="/devlogs/add" element={<AddDevlog />} />

            <Route path="/devlogsingle/:id" element={<DevlogSingle />} />

            <Route
              path="/advertiser/dashboard"
              element={<AdvertiserDashboard />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CommentProvider>
    </div>
  );
}

export default App;
