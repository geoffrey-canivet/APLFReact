import Accordions from "../components/Accordions/Accordions.jsx";
import NavBar from "../components/Menus/NavBar.jsx";
import Drawer from "../components/Menus/Drawer.jsx";
import {useState} from "react";
import NavPeriode from "../components/NavPeriode/NavPeriode.jsx";

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
                <Accordions/>
            </div>

        </>
    );
};

export default Dashboard;