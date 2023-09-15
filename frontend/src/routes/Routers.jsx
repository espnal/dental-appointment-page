
import Home from '../pages/Home';
import Tratamientos from '../pages/Tratamientos';
import Login  from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctor from '../pages/Doctor';
import DoctorDetails from '../pages/DoctorDetails';

import {Routes, Route} from 'react-router-dom';
const Routers = () => {
  return <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/doctor" element={<Doctor/>}/>
            <Route path="/doctor/:id" element={<DoctorDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/tratamientos" element={<Tratamientos/>}/>
          </Routes>
  
}

export default Routers
