
import {
    faChartBar,
    faPlusCircle,
    faEllipsis, faTrash, faPenToSquare, faTableList
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardData from "../../data/DB.js";
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import ChartDonut from "../Charts/ChartDonut.jsx";
import {useEffect, useState} from "react";
import DTable from "../Tables/DTable.jsx";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ModalAddItemOcc from "../Modals/ModalAddItemOcc.jsx";
import ModalDatatable from "../Modals/ModalDatatable.jsx";
import ModalChart from "../Modals/ModalChart.jsx";

const CardOccasionnelle = () => {

    // MODAL
    const [currentModal, setCurrentModal] = useState(null);
    const closeModal = () => {
        setCurrentModal(null);
    }

    // AJOUTER UNE DEPENSE
    const handleFormSubmit = (dataForm) => {
        console.log("Recus de la modal:", dataForm);
    }

    return (
        <>
            <style>
                {/*SCROLLBAR*/}
                {`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #74C0FC; /* Couleur de la barre */
                    border-radius: 4px; /* Coins arrondis */
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #58a7e0; /* Couleur au survol */
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background-color: transparent; /* Fond invisible */
                }

                .hover\\:overflow-y-auto:hover {
                    overflow-y: auto; /* Activer le scroll au survol */
                }

                .hover\\:overflow-y-hidden {
                    overflow-y: hidden; /* Désactiver le scroll par défaut */
                }
                `}
            </style>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center m-5">
                {cardData.slice(4, 8).map((card) => (
                    <div
                        key={card.id}
                        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between px-4 pt-2 pb-2 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <FontAwesomeIcon
                                    className="mr-3"
                                    icon={card.icon}
                                    style={{color: "#74C0FC"}}
                                />
                                {card.title}
                            </h5>
                            <div className="px-0 py-0 flex gap-4">
                                <button
                                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                    title="DataTable"
                                    onClick={() => setCurrentModal("modalDatatable")}
                                >
                                    <FontAwesomeIcon icon={faTableList}/>
                                </button>

                                <button
                                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                    title="Graphique"
                                    onClick={() => setCurrentModal("modalChart")}
                                >
                                    <FontAwesomeIcon icon={faChartBar}/>
                                </button>
                                {/*MODAL GRAPHIQUE*/}

                                <button
                                    id={card.id}
                                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                    title="Ajouter un élément"
                                    onClick={() => setCurrentModal("modalAddItemOcc")}
                                >
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </button>
                                {/*MODAL ADD DEPENSE*/}

                            </div>
                        </div>
                        {/* BODY */}
                        <div className="relative w-full h-64 overflow-y-hidden hover:overflow-y-auto custom-scrollbar">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                {card.data.map((item, i) => (
                                    <tr
                                        key={i}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 relative"
                                    >
                                        <td className="px-4 py-2">{item.subData.length}</td>
                                        <td
                                            className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2">{item.total}</td>
                                        <td className="px-4 py-2 relative">
                                            <button
                                                className="dropdown text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                            >
                                                <FontAwesomeIcon icon={faEllipsis}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        {/* FOOTER */}
                        <div className="flex justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                            <div className="flex-1 text-center border-r border-gray-300 dark:border-gray-600">
                                <div className="font-semibold text-gray-900 dark:text-white">{card.total}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Mois</div>
                            </div>
                            <div className="flex-1 text-center border-r border-gray-300 dark:border-gray-600">
                                <div className="font-semibold text-gray-900 dark:text-white">{(card.total) * 3}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Trimestre</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="font-semibold text-gray-900 dark:text-white">{(card.total) * 12}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Année</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* MODAL */}
            {currentModal === "modalAddItemOcc" && (
                <ModalAddItemOcc handleFormSubmit={handleFormSubmit} closeModal={closeModal}/>
            )}
            {currentModal === "modalDatatable" && (
                <ModalDatatable closeModal={closeModal}/>
            )}
            {currentModal === "modalChart" && (
                <ModalChart closeModal={closeModal}/>
            )}
        </>
    );
};

export default CardOccasionnelle;