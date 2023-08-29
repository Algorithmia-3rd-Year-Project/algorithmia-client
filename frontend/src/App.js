import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import { CommentProvider } from './views/components/CommentContext';

//pages
import Home from "./views/pages/Home";
import Devlog from "./views/pages/Devlogs";
import Signup from "./views/pages/Signup";
import Login from "./views/pages/Login";
import AddDevlog from "./views/pages/AddDevlog";
import DevlogSingle from "./views/pages/DevlogSingle";
import AdvertiserDashboard from "./views/pages/Admin/AdvertiserDashboard";
import ProfileOverview from "./views/pages/Advertiser/ProfileOverview";
import AdProfile from "./views/pages/Advertiser/ProfileOverview";

import GameUpdate from "./views/pages/GameUpdate";
import GameComplain from "./views/pages/Complaints";

import GameDashboard from "./views/pages/Admin/gameDashboard";

import Profile from "./views/pages/Profile";


import AddPpl from "./views/pages/AddPpl";

import Review from "./views/pages/Reviews"

import DevlogUpdate from "./views/pages/DevlogUpdate";

//components
import Navbar from "./views/components/Navbar";

function App() {
  return (
    <div className="App">
      <CommentProvider>
      <BrowserRouter>
        <Navbar />
        <Login/>
        <Signup/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/devlogs" element={<Devlog />} />
            <Route path="/devlogs/add" element={<AddDevlog />} />

            <Route path="/devlogsingle/:id" element={<DevlogSingle />} />

            <Route path="/profile" element={<Profile />} />


            <Route path="/pplform/add" element={<AddPpl />} />

            <Route path="/reviews" element={<Review />} />

            <Route
              path="/advertiser/dashboard"
              element={<AdvertiserDashboard />}
            />

            <Route
              path="/game/dashboard"
              element={<GameDashboard />}
            />
            <Route path="/advertiser/profile" element={<ProfileOverview />} />
            <Route path="/adprofile" element={<AdProfile />} />

            
            <Route path="/Gameupdate" element={<GameUpdate/>} />
            <Route path="/Complaints" element={<GameComplain/>} />

            <Route path = "/devlogs/update/:id" element={<DevlogUpdate/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CommentProvider>
    </div>
  );
}

export default App;
