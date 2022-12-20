import { Route, Routes } from 'react-router';
import './App.css';
import JobAd from './components/adComponents/JobAd';
import Dashboard from './components/Dashboard';
import Login from './components/formComponents/Login';
import NavBar from './components/NavBar';
import ProfileInfo from './components/profileComponents/ProfileInfo';
import ProfileInfoEdit from './components/profileComponents/ProfileInfoEdit';
import Signup from './components/formComponents/Signup';


function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/JobAd/:id" element={<JobAd />}></Route>
        <Route path="/profileInfo" element={<ProfileInfo />}></Route>
        <Route path="/profileInfoEdit" element={<ProfileInfoEdit />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
