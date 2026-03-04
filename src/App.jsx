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

import PremiumLayout from "./Layout/PremiumLayout";

// import StudentDashboard from "./Components/Students/Dashboard";
// import Course from './Components/Students/Course'
// import Explore from "./Components/Students/Explore";
// import Discuss from "./Components/Students/Discuss";
// import Interview from './Components/Students/Interview';
// import Assessment from './Components/Students/Assesment';
// import Reedem from './Components/Students/Reedem';
// import Purchase from './Components/Students/Purchase';
// import Problems from './Components/Students/Problems'
// import Battle from "./Components/Students/Battle";
// import Projects from "./Components/Students/Projects";
// import Learningpath from "./Components/Students/Learningpath";
// import ProblemDetails from "./Components/Students/ProblemsCards/Playground";
// import Profile from "./Components/Students/Profile"
// import Hackathon from "./Components/Students/Hackathon";

// import HackathonPage from "./Components/Students/HackathonCards/HackathonPage";


import StaffDashboard from "./Components/Pages/Staff/Dashboard/Dashboard";

// import Premium from "./pages/Premium";

// 
// import Module from "./Components/Students/Module";
// import ModuleDetails from "./Components/Students/ModuleCard/ModuleDetails";
// import Help from "./Components/Students/Help";
// import Referral from "./Components/Students/Referral";


// ------------------------- New Links -------------------------
import Index from "./Components/Pages/Student/Dashboard/Index";
import Challenge from './Components/Pages/Student/Challenges/Challenge';
import ChallengeDetails from './Components/Pages/Student/Challenges/ChallengeDetails';
import Submission from "./Components/Pages/Student/Submissions/Subbmission";
import SkillBadge from "./Components/Pages/Student/SkillBadge/Skillbadge";


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
        </Route>

        <Route path="*" element={<Notfound />} />

      </Routes>
    </Router>
  );
}

export default App;
