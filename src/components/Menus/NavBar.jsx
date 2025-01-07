import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCircleExclamation,
    faGear,
    faRightFromBracket,
    faTriangleExclamation,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import logo from "/src/assets/logo-small.png"
import avat from "/src/assets/avat.png"

const NavBar = ({handleDrawerOpen}) => {

    // DROPDOWN
    const [navDropdown, setNavDropdown] = useState(false);
    const toggleNavDropdown = () => {
        setNavDropdown(!navDropdown);
    }
    // DRAWER
    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(() => {
        handleDrawerOpen(drawerOpen);
    }, [drawerOpen]);

    const toggleNavDrawer = () => {
        setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);
    };

    return (
        <>
            <nav
                className="bg-white dark:bg-gray-800 fixed w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap items-center justify-between mx-auto p-3 pl-10 pr-10">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        APPLAB
                    </span>
                        <button
                            id="dbtn"
                            onClick={toggleNavDrawer}
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </a>
                    <div className="relative flex dark:text-white">
                        <div className="text-center">
                            <p className="font-bold text-sm mr-4">Geoffrey</p>
                            <p className="text-sm text-gray-500">Admin</p>
                        </div>

                        <button
                            id="dropdownUserAvatarButton"
                            onClick={toggleNavDropdown}
                            className="flex text-sm bg-gray-800 rounded md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            type="button"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-10 h-10 rounded"
                                src={avat}
                                alt="user photo"
                            />
                        </button>

                        {/* Dropdown menu */}
                        <div id="dropdownAvatar"
                             className={`z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600 ${navDropdown ? "block" : "hidden"}`}>
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <label className="inline-flex items-center  cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked={()=>{}}
                                           onChange={()=>{}}/>
                                    <div
                                        className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span
                                        className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Thème</span>
                                </label>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-600"/>
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div className="font-medium text-xs truncate">
                                    geoffrey.canivet@gmail.com
                                </div>
                            </div>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUserAvatarButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FontAwesomeIcon className="mr-3" icon={faUser}/>Profil
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FontAwesomeIcon className="mr-3" icon={faGear}/>Réglages
                                    </a>
                                </li>
                            </ul>
                            <hr className="border-gray-200 dark:border-gray-600"/>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUserAvatarButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FontAwesomeIcon className="mr-3" icon={faCircleExclamation}/>Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FontAwesomeIcon className="mr-3" icon={faTriangleExclamation}/>Earnings
                                    </a>
                                </li>
                            </ul>
                            <hr className="border-gray-200 dark:border-gray-600"/>
                            <div className="py-2">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    <FontAwesomeIcon
                                        className="mr-3"
                                        icon={faRightFromBracket}
                                    />
                                    Sign out
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;