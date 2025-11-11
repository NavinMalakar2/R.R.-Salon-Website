
// import App from './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignIn from './components/Signin';
import SignUp from './components/SignUP';
import Footer from './components/Footer';
import { AuthProvider } from './components/AuthContext';




function App() {
  

  return (
    <>
    <AuthProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      <Footer/>
    </Router> 
    </AuthProvider>
    </>
  )
}

export default App
