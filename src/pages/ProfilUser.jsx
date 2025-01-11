import UserProfil from "../components/UserProfil/UserProfil.jsx";
import NavBar from "../components/Navigation/NavBar.jsx";
import Drawer from "../components/Navigation/Drawer.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import React from "react";

const ProfilUser = () => {
    return (
        <>
            <div className="dark:bg-gray-900 min-h-screen">
                <Navigation/>
                <UserProfil/>
            </div>
        </>
    );
};

export default ProfilUser;