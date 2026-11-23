import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Eye } from "lucide-react";

export const studentData = [
  {
    id: 101,
    name: "Subashini",
    department: "Computer Science",
    email: "suba@gmail.com",
    year: "2nd Year",
  },
  {
    id: 102,
    name: "Lithika",
    department: "Artificial Intelligence",
    email: "lithika@gmail.com",
    year: "2nd Year",
  },
  {
    id: 103,
    name: "Vinothini",
    department: "Information Technology",
    email: "vino@gmail.com",
    year: "3rd Year",
  },
  {
    id: 104,
    name: "Yazhini",
    department: "Electronics",
    email: "yazhini@gmail.com",
    year: "1st Year",
  },
  {
    id: 105,
    name: "Vishali",
    department: "Computer Science",
    email: "vishali@gmail.com",
    year: "3rd Year",
  },
];

function Students() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Students</h1>
      <p className="subtitle">Manage and view student information</p>

      <div className="panel">
        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.email}</td>
                  <td>{student.year}</td>
                  <td>
                    <Link
                      to={`/students/${student.id}`}
                      className="view-btn"
                    >
                      <Eye size={16} /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <p className="no-results">No students found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Students;