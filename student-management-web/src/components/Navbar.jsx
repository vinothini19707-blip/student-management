import { GraduationCap, Bell } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <GraduationCap size={28} />
        <h2>StudentHub</h2>
      </div>

      <div className="nav-profile">
        <Bell size={20} />
        <span className="avatar">A</span>
        <span>Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;