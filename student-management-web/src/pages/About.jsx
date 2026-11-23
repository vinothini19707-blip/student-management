import { GraduationCap } from "lucide-react";

function About() {
  return (
    <div className="panel about-page">
      <GraduationCap size={55} className="about-icon" />

      <h1>About StudentHub</h1>

      <p>
        StudentHub is a simple student management frontend
        application developed using React.
      </p>

      <p>
        It helps users view student records, departments
        and academic information through a multi-page interface.
      </p>

      <h2>Features</h2>

      <ul>
        <li>Dashboard overview</li>
        <li>Student list</li>
        <li>Student search</li>
        <li>Student details</li>
        <li>Multi-page routing</li>
        <li>404 Not Found page</li>
      </ul>
    </div>
  );
}

export default About;