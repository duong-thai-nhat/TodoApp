import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../../../../assets/css/Content.css';
import Tasks from '../../../../Pages/Tasks/Tasks';
import Notifications from '../../../../Pages/Notifications/Notifications';
import Analytics from '../../../../Pages/Analytics/Analytics';
import Team from '../../../../Pages/Team/Team';

function SectionContent() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Tasks/>} />
        <Route path="/Tasks" element={<Tasks/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Analytics" element={<Analytics/>} />
        <Route path="/Team" element={<Team/>} />
      </Routes>
    </div>
  )
}

export default SectionContent