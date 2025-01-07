
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

const CardOccasionnelle = () => {


    // DATATABLE
    const [modalDataTableOpen, setModalDataTableOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    function open(card) {
        setModalDataTableOpen(true)
        setCurrentCard(card);
    }
    function close() {
        setModalDataTableOpen(false)
        setCurrentCard(null);
    }

    useEffect(() => {
        currentCard ? currentCard.info.forEach((item) => {
            console.log(`Liste de ${item.name} :`);
            console.log("Détails :", item.detail);
            console.log("Total :", item.total);
            console.log("-------------------------");
        }) : null


    }, [currentCard]);



    return (
        <>
            <style>
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
                                    onClick={() => open(card)}
                                >
                                    <FontAwesomeIcon icon={faTableList}/>
                                </button>
                                {/*MODAL DATATABLE*/}
                                <Dialog open={modalDataTableOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4">
                                            <DialogPanel
                                                transition
                                                className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                            >
                                                <button
                                                    className="absolute top-2 right-2 rounded-full p-1 text-white/70 hover:text-white focus:outline-none"
                                                    onClick={close}
                                                    aria-label="Fermer la modale"
                                                >
                                                    ✕ {/* Icône de croix */}
                                                </button>
                                                <table
                                                    className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                    <tbody>
                                                    {currentCard ? currentCard.info.map((item, i) => (
                                                        <tr
                                                            key={i}
                                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 relative"
                                                        >
                                                            <td className="px-4 py-2">{item.detail.length}</td>
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
                                                    )): null}
                                                    </tbody>
                                                </table>
                                            </DialogPanel>
                                        </div>
                                    </div>
                                </Dialog>


                                <button
                                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                    title="Graphique"
                                    onClick={() => open(card)}
                                >
                                    <FontAwesomeIcon icon={faChartBar}/>
                                </button>

                                <button
                                    id={card.id}
                                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                    title="Ajouter un élément"

                                >
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </button>
                            </div>
                        </div>
                        {/* BODY */}
                        <div className="relative w-full h-64 overflow-y-hidden hover:overflow-y-auto custom-scrollbar">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                {card.info.map((item, i) => (
                                    <tr
                                        key={i}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 relative"
                                    >
                                        <td className="px-4 py-2">{item.detail.length}</td>
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
                        <div className="flex justify-between px-4 py-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
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
        </>
    );
};

export default CardOccasionnelle;