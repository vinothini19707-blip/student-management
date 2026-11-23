import { Link } from "react-router-dom";
import { Users, GraduationCap, UserCheck } from "lucide-react";

function Home() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="subtitle">Welcome to Student Management System</p>

      <div className="stats-grid">
        <div className="stat-card">
          <Users className="purple-icon" />
          <p>Total Students</p>
          <h2>120</h2>
        </div>

        <div className="stat-card">
          <GraduationCap className="blue-icon" />
          <p>Total Departments</p>
          <h2>05</h2>
        </div>

        <div className="stat-card">
          <UserCheck className="green-icon" />
          <p>Active Students</p>
          <h2>110</h2>
        </div>
      </div>

      <div className="panel">
        <h2>Welcome to StudentHub</h2>

        <p>
          This application helps manage student information,
          academic details and department records.
        </p>

        <Link to="/students" className="primary-btn">
          View Students
        </Link>
      </div>

      <div className="panel">
        <h2>Department Overview</h2>

        <div className="department-row">
          <span>Computer Science</span>
          <span>40 Students</span>
        </div>

        <div className="department-row">
          <span>Artificial Intelligence</span>
          <span>30 Students</span>
        </div>

        <div className="department-row">
          <span>Information Technology</span>
          <span>25 Students</span>
        </div>

        <div className="department-row">
          <span>Electronics</span>
          <span>25 Students</span>
        </div>
      </div>
    </div>
  );
}

export default Home;