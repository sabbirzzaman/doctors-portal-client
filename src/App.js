import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequiredAuth from './Pages/Login/RequiredAuth';
import SignUp from './Pages/Login/SignUp';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPassword from './Pages/Login/ForgetPassword';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from './Pages/Shared/Loading';
import Users from './Pages/Dashboard/Users';
import RequiredAdmin from './Pages/Dashboard/RequiredAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
    const [, loading] =useAuthState(auth);

    if(loading) {
        return <Loading height="100vh"></Loading>
    }

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route
                    path="appointment"
                    element={
                        <RequiredAuth>
                            <Appointment />
                        </RequiredAuth>
                    }
                ></Route>
                <Route path="reviews" element={<Reviews />}></Route>
                <Route path="contact-us" element={<ContactUs />}></Route>
                <Route path='dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>}>
                    <Route index element={<MyAppointment />}></Route>
                    <Route path='appointments' element={<MyAppointment />}></Route>
                    <Route path='users' element={<RequiredAdmin><Users /></RequiredAdmin>}></Route>
                    <Route path='add-doctor' element={<RequiredAdmin><AddDoctor /></RequiredAdmin>}></Route>
                    <Route path='manage-doctors' element={<RequiredAdmin><ManageDoctors /></RequiredAdmin>}></Route>
                </Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<SignUp />}></Route>
                <Route path="forget-password" element={<ForgetPassword />} ></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;
