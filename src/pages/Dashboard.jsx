import AccordionsCards from "../components/Accordions/AccordionsCards.jsx";
import NavBar from "../components/Navigation/NavBar.jsx";
import Drawer from "../components/Navigation/Drawer.jsx";
import {useState} from "react";
import NavPeriode from "../components/NavPeriode/NavPeriode.jsx";
import AccordionsTools from "../components/Accordions/AccordionsTools.jsx";
import NavOutils from "../components/NavPeriode/NavOutils.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";

const Dashboard = () => {



    return (
        <>
            <div className="dark:bg-gray-900 min-h-screen">
                <Navigation/>
                <NavPeriode/>
                <AccordionsCards/>
                <NavOutils/>
                <AccordionsTools/>
            </div>

        </>
    );
};

export default Dashboard;