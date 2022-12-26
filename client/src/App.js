import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/formComponents/Login';
import NavBar from './components/NavBar';
import ProfileInfo from './components/profileComponents/ProfileInfo';
import ProfileInfoEdit from './components/profileComponents/ProfileInfoEdit';
import Signup from './components/formComponents/Signup';
import PageNotFound from './components/404';
import JobDescription from './components/adComponents/JobDescription';
import JobDescription2 from './components/profileComponents/JobDescription';
import SignedInElement from './components/authorizationElements/SignedInElement';
import MyJobAdvertisements from './components/profileComponents/MyJobAdvertisements';
import StudentsTable from './components/studentComponents/StudentsTable';
import { Logout } from './components/formComponents/Logout';
import StudentPage from './components/studentComponents/StudentPage';
import Chart from './components/charts/Chart';
import AddJobAd from './components/profileComponents/AddJobAd';
import Unauthorized from './components/403';
import EditJobAd from './components/profileComponents/EditJobAd';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Routes>
        <Route
          path="/"
          element={
            <SignedInElement>
              <Dashboard />
            </SignedInElement>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/job-ad/:id"
          element={
            // <AdminElement>
            <JobDescription />
            // </AdminElement>
          }
        ></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/my-job-ads/:id" element={<MyJobAdvertisements />}></Route>
        <Route path="/job-ad-details/:id" element={<JobDescription2 />}></Route>
        <Route path="/profileInfo" element={<ProfileInfo />}></Route>
        <Route path="/profileInfoEdit" element={<ProfileInfoEdit />}></Route>
        <Route path="/addJobAd" element={<AddJobAd />}></Route>
        <Route path="/403" element={<Unauthorized />}></Route>
        <Route path="/jobAdverts/edit/:id" element={<EditJobAd />}></Route>
        <Route
          path="/faculty/students"
          element={
            <SignedInElement>
              <StudentsTable />
            </SignedInElement>
          }
        ></Route>
        <Route path="/student-info/:id" element={<StudentPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/charts" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
