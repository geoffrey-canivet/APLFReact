import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCircleExclamation,
    faGear,
    faRightFromBracket,
    faTriangleExclamation,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import logo from "/src/assets/logo-small.png";
import avat from "/src/assets/avat.png";

const NavBar = ({ handleDrawerOpen }) => {
    // Gestion du dropdown
    const [navDropdown, setNavDropdown] = useState(false);
    const toggleNavDropdown = () => {
        setNavDropdown((prev) => !prev);
    };

    // Gestion du drawer
    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(() => {
        handleDrawerOpen(drawerOpen);
    }, [drawerOpen, handleDrawerOpen]);

    const toggleNavDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <>
            {/* Overlay sombre */}
            {navDropdown && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setNavDropdown(false)} // Ferme le dropdown au clic sur l'overlay
                ></div>
            )}

            <nav className="bg-white dark:bg-gray-800 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap items-center justify-between mx-auto p-3 px-10">
                    {/* Logo et menu */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="App Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              APPLAB
            </span>
                        <button
                            id="dbtn"
                            onClick={toggleNavDrawer}
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* Dropdown utilisateur */}
                    <div className="relative flex items-center dark:text-white">
                        <div className="text-right mr-4">
                            <p className="font-bold text-sm">Geoffrey</p>
                            <p className="text-sm text-gray-500">Admin</p>
                        </div>

                        <button
                            id="dropdownUserAvatarButton"
                            onClick={toggleNavDropdown}
                            className="flex text-sm bg-gray-800 rounded focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            type="button"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded" src={avat} alt="User avatar" />
                        </button>

                        {/* Dropdown menu */}
                        {navDropdown && (
                            <div id="dropdownAvatar" className="z-50 absolute shadow-xl right-5 mt-64 w-44 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 dark:divide-gray-600">
                                {/* Email utilisateur */}
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div className="font-medium text-xs truncate">
                                        geoffrey.canivet@gmail.com
                                    </div>
                                </div>
                                {/* Liens de navigation */}
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownUserAvatarButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <FontAwesomeIcon className="mr-3" icon={faUser} />
                                            Profil
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <FontAwesomeIcon className="mr-3" icon={faGear} />
                                            Réglages
                                        </a>
                                    </li>
                                </ul>
                                <hr className="border-gray-200 dark:border-gray-600" />
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownUserAvatarButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <FontAwesomeIcon
                                                className="mr-3"
                                                icon={faCircleExclamation}
                                            />
                                            Alerte
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <FontAwesomeIcon
                                                className="mr-3"
                                                icon={faTriangleExclamation}
                                            />
                                            Avertissement
                                        </a>
                                    </li>
                                </ul>
                                <hr className="border-gray-200 dark:border-gray-600" />
                                {/* Déconnexion */}
                                <div className="py-2">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        <FontAwesomeIcon
                                            className="mr-3"
                                            icon={faRightFromBracket}
                                        />
                                        Déconnexion
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
