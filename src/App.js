import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyHistory from './Pages/DashBoard/MyHistory';
import MyReview from './Pages/DashBoard/MyReview';
import Users from './Pages/DashBoard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
  <Navbar></Navbar>
  <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
          
        } />
        <Route path="dashboard" element={<RequireAuth><DashBoard/></RequireAuth>} >
        <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
