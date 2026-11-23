import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Info } from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h4 className="menu-heading">MENU</h4>

      <NavLink to="/" end className="sidebar-link">
        <LayoutDashboard size={20} />
        Dashboard
      </NavLink>

      <NavLink to="/students" className="sidebar-link">
        <Users size={20} />
        Students
      </NavLink>

      <NavLink to="/about" className="sidebar-link">
        <Info size={20} />
        About
      </NavLink>

      <div className="sidebar-footer">
        <p>Student Management System</p>
        <small>Version 1.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;