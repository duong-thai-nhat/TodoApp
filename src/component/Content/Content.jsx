import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../../assets/css/Content.css';
import Tasks from '../Tasks/Tasks';
import Notifications from '../Notifications/Notifications';
import Analytics from '../Analytics/Analytics';
import Team from '../Team/Team';

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