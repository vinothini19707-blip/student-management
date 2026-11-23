import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />

          <Route path="students" element={<Students />} />

          <Route
            path="students/:id"
            element={<StudentDetails />}
          />

          <Route path="about" element={<About />} />
        </Route>

        {/* All invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;