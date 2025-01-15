import AccordionsCards from "../components/Accordions/AccordionsCards.jsx";
import NavBar from "../components/Navigation/NavBar.jsx";
import Drawer from "../components/Navigation/Drawer.jsx";
import {useState} from "react";
import TitrePeriode from "../components/BarTitre/TitrePeriode.jsx";
import AccordionsTools from "../components/Accordions/AccordionsTools.jsx";
import TitreOutils from "../components/BarTitre/TitreOutils.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import SliderSlick from "../components/Slider/SliderSlick.jsx";
import SliderSwiper from "../components/Slider/SliderSwiper.jsx";

const Dashboard = () => {



    return (
        <>
            <div className="dark:bg-gray-900 min-h-screen">
                <Navigation/>
                {/*<SliderSlick/>*/}
                <SliderSwiper/>
                <TitrePeriode/>
                <AccordionsCards/>
                <TitreOutils/>
                <AccordionsTools/>
            </div>

        </>
    );
};

export default Dashboard;