import { useParams, Link } from "react-router-dom";
import { ArrowLeft, UserRound } from "lucide-react";
import { studentData } from "./Students";

function StudentDetails() {
  const { id } = useParams();

  const student = studentData.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return (
      <div className="panel">
        <h2>Student Not Found</h2>
        <p>This student record does not exist.</p>

        <Link to="/students" className="primary-btn">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/students" className="back-link">
        <ArrowLeft size={18} /> Back to Students
      </Link>

      <h1>Student Details</h1>

      <div className="panel details-card">
        <div className="profile-section">
          <div className="profile-icon">
            <UserRound size={40} />
          </div>

          <h2>{student.name}</h2>
          <p>{student.department}</p>
        </div>

        <div className="details-grid">
          <div>
            <span>Student ID</span>
            <strong>{student.id}</strong>
          </div>

          <div>
            <span>Student Name</span>
            <strong>{student.name}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>{student.department}</strong>
          </div>

          <div>
            <span>Academic Year</span>
            <strong>{student.year}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;