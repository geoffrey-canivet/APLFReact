import './App.css';
import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProfilUser from "./pages/ProfilUser.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profil" element={<ProfilUser />} />
            </Routes>
        </Router>
    );
}

export default App;
