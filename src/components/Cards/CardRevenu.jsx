import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartBar, faEllipsis, faPenToSquare, faPlusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import useIncomeStore from "../../store/useIncomeStore.js";
import modalAddIncome from "../Modals/ModalIncome/modalAddIncome.jsx";
import modalupdateIncome from "../Modals/ModalIncome/modalupdateIncome.jsx";
import modalDeleteIncome from "../Modals/ModalIncome/modalDeleteIncome.jsx";
import ModalAddIncome from "../Modals/ModalIncome/modalAddIncome.jsx";
import ModalupdateIncome from "../Modals/ModalIncome/modalupdateIncome.jsx";
import ModalDeleteIncome from "../Modals/ModalIncome/modalDeleteIncome.jsx";
import useExpenseStore from "../../store/useExpenseStore.js";
import ModalChart from "../Modals/ModalChart/ModalChart.jsx";

const CardRevenu = () => {

    // STORE / DB
    const dataIncome = useIncomeStore((state) => state.dataIncome);
    const addIncome = useIncomeStore((state) => state.addIncome);
    const updateIncome = useIncomeStore((state) => state.updateIncome);
    const deleteIncome = useIncomeStore((state) => state.deleteIncome);

    // MODAL
    const [currentModal, setCurrentModal] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [incomeId, setIncomeId] = useState(null);
    // AJOUTER
    const modalAddIncome = (e) => {
        setCurrentModal("modalAddIncome")
        setCategoryId(parseInt(e.currentTarget.id, 10));
    }
    // MODIFIER
    const modalupdateIncome = (e) => {
        setCurrentModal("modalupdateIncome")
        setIncomeId(parseInt(e.currentTarget.id, 10));
    }
    // SUPPRIMER
    const modalDeleteIncome = (e) => {
        const id = parseInt(e.currentTarget.id, 10);
        console.log("Expense ID to delete:", id);
        setIncomeId(id);
        setCurrentModal("modalDeleteIncome");
    };
    // GRAPHIQUE
    const modalGraphique = (e) => {
        setCurrentModal("ModalGraphique")
        setCategoryId(parseInt(e.currentTarget.id, 10));
    }
    // FERMER MODAL
    const closeModal = () => {
        setCurrentModal(null);
    }

    // DROPDOWN ACTION
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdownId((prevId) => (prevId === id ? null : id));
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setOpenDropdownId(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

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
            {(openDropdownId) && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => {
                        setOpenDropdownId(null);

                    }}
                ></div>
            )}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center m-5">
                {dataIncome.slice(0, 4).map((card) => (
                    <div key={card.id}
                         className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* HEADER */}
                        <div className="flex justify-between px-4 pt-2 pb-2 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <FontAwesomeIcon className="mr-3" icon={card.icon} style={{color: "#74C0FC"}}/>
                                {card.title}
                            </h5>
                            <div className="px-0 py-0 flex gap-4">
                                <button className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                        title="Graphique"
                                        id={card.id}
                                        onClick={modalGraphique}>
                                    <FontAwesomeIcon icon={faChartBar}/>
                                </button>
                                <button className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                        title="Ajouter un élément"
                                        id={card.id}
                                        onClick={modalAddIncome}>
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </button>
                            </div>
                        </div>
                        {/* BODY */}
                        <div className="relative w-full h-64 overflow-y-hidden hover:overflow-y-auto custom-scrollbar">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                {card.data.map((item, i) => (
                                    <tr
                                        key={`${card.id}-${i}`}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 relative"
                                    >
                                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2">{item.price}.00</td>
                                        <td className="px-4 py-2 relative">
                                            <button
                                                onClick={() => toggleDropdown(`${card.id}-${i}`)}
                                                className="dropdown text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                            >
                                                <FontAwesomeIcon icon={faEllipsis}/>
                                            </button>
                                            {openDropdownId === `${card.id}-${i}` && (
                                                <div
                                                    className="absolute right-3 mt-2 w-32 border border-gray-600 dark:bg-gray-700 rounded-lg shadow-lg z-50 overflow-hidden"
                                                >
                                                    <button
                                                        id={item.id}
                                                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-500"
                                                        onClick={modalupdateIncome}
                                                    >
                                                        <FontAwesomeIcon icon={faPenToSquare}/> Modifier
                                                    </button>
                                                    <button
                                                        id={item.id}
                                                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-500"
                                                        onClick={modalDeleteIncome}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash}/> Supprimer
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        {/* FOOTER */}
                        <div className="flex justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                            <div className="flex-1 text-center border-r border-gray-300 dark:border-gray-600">
                                <div className="font-semibold text-gray-900 dark:text-white">{card.total} 0 €</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Mois</div>
                            </div>
                            <div className="flex-1 text-center border-r border-gray-300 dark:border-gray-600">
                                <div className="font-semibold text-gray-900 dark:text-white">{(card.total) * 3} €</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Trimestre</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="font-semibold text-gray-900 dark:text-white">{(card.total) * 12} €</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Année</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* MODAL */}
            {currentModal === "modalAddIncome" && (
                <ModalAddIncome
                    closeModal={closeModal}
                    handleAddItem={(newItem) => addIncome(categoryId, newItem)}
                />
            )}
            {currentModal === "modalupdateIncome" && (
                <ModalupdateIncome
                    closeModal={closeModal}
                    incomeId={incomeId}
                    dataIncome={dataIncome}
                    handleUpdateIncome={(updatedIncome) => updateIncome(incomeId, updatedIncome)}
                />
            )}
            {currentModal === "modalDeleteIncome" && (
                <ModalDeleteIncome
                    closeModal={closeModal}
                    handleDeleteIncome={() => {
                        deleteIncome(incomeId);
                    }}
                />
            )}
            {currentModal === "ModalGraphique" && (
                <ModalChart
                    closeModal={closeModal}
                    categoryId={categoryId}
                />
            )}
        </>
    );
};

export default CardRevenu;