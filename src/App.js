import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/Contact Us/ContactUs';
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

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                    path="/appointment"
                    element={
                        <RequiredAuth>
                            <Appointment />
                        </RequiredAuth>
                    }
                ></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/forget-password" element={<ForgetPassword />} ></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;
