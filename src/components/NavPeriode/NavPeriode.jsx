import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NavPeriode = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <>
            <div className="pt-20 px-3">
                <div
                    className="dark:bg-gray-700 border-r-2 dark:border-gray-700 border-gray-300 p-4 pl-7 rounded-xl mb-4 flex items-center justify-between">

                    <h1 className="text-white font-bold text-xl tracking-wide uppercase">Période</h1>

                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Décembre 2024"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto ps-10 p-2 dark:bg-gray-800 dark:border-gray-600 placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            showMonthYearDropdown
                        />


                    </div>
                </div>
            </div>

        </>
    );
};

export default NavPeriode;
