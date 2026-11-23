import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/" className="primary-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;