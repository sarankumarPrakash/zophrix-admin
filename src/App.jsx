import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Newuser from "./pages/Newuser";
import Notfound from "./pages/Notfound";

import StudentLayout from "./Layout/StudentLayout";
import StaffLayout from "./Layout/StaffLayout";
import PublicLayout from "./Layout/PublicLayout";
import Contact from "./pages/Contact";


import ProtectedStudentRoute from "./Routes/protectedStudentRoute";
import ProtectedStaffRoute from "./Routes/ProtectedStaffRoutes";
import GlobalSnackbar from "./Components/Global/Globalsnackbar";



import StaffDashboard from "./Components/Pages/Staff/Dashboard/Dashboard";
import Students from "./Components/Pages/Staff/Students/Student";



function App() {
  return (
    <Router>
      <GlobalSnackbar />
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/new_user" element={<Newuser />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

   

        {/* STAFF ROUTES */}
        <Route
          element={
            <ProtectedStaffRoute>
              <StaffLayout />
            </ProtectedStaffRoute>
          }
        >
          <Route path="/hub" element={<StaffDashboard />} />
          <Route path="/students" element={<Students />} />
        </Route>

        <Route path="*" element={<Notfound />} />

      </Routes>
    </Router>
  );
}

export default App;