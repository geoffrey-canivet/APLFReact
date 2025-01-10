import AccordionsCards from "../components/Accordions/AccordionsCards.jsx";
import NavBar from "../components/Menus/NavBar.jsx";
import Drawer from "../components/Menus/Drawer.jsx";
import {useState} from "react";
import NavPeriode from "../components/NavPeriode/NavPeriode.jsx";
import AccordionsTools from "../components/Accordions/AccordionsTools.jsx";
import NavOutils from "../components/NavPeriode/NavOutils.jsx";

const Dashboard = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = (stat) => {
        setDrawerOpen(stat);
    }

    return (
        <>
            <div className="dark:bg-gray-900 min-h-screen">
                <NavBar handleDrawerOpen={handleDrawerOpen} />
                <Drawer isDrawerOpen={isDrawerOpen}/>
                <NavPeriode/>
                <AccordionsCards/>
                <NavOutils/>
                <AccordionsTools/>
            </div>

        </>
    );
};

export default Dashboard;