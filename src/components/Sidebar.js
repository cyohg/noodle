import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../styles/Sidebar.css';

function Bar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
  setSidebarOpen(!sidebarOpen);}
  return (
    <div Classname="sidebar">
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
    <Sidebar className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <Menu iconShape="square" className="sidebar__menu">
        <MenuItem className="sidebar__item">Accueil</MenuItem>
        <MenuItem className="sidebar__item">Séries TV</MenuItem>
        <MenuItem className="sidebar__item">Films</MenuItem>
        <MenuItem className="sidebar__item">Nouveautés les plus regardées</MenuItem>
        <MenuItem className="sidebar__item">Ma liste</MenuItem>
      </Menu>
    </Sidebar>
    </div>
  );
};

export default Bar;
