import Drawer from "./Drawer.jsx";
import {useState} from "react";
import NavBar from "./NavBar.jsx";

const Navigation = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = (stat) => {
        setDrawerOpen(stat);
    }


    return (
        <>
            <NavBar handleDrawerOpen={handleDrawerOpen} />
            <Drawer isDrawerOpen={isDrawerOpen}/>
        </>
    );
};

export default Navigation;