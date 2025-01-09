
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

const CardOccasionnelle = () => {

    // // AJOUTER UN ITEM
    const addItem = async (e) => {
        const cardId = parseInt(e.currentTarget.id, 10);
        const SweetAddItem = withReactContent(Swal);
        let categoryName;
        switch (cardId) {
            case 5:
                categoryName = "Courantes";
                break;
            case 6:
                categoryName = "loisirs";
                break;
            case 7:
                categoryName = "Occasionnelles";
                break;
            case 8:
                categoryName = "Divers";
                break;
            default:
                categoryName = "Erreur";
                break;
        }
        // SWEET ALERT
        const { value: formValues } = await SweetAddItem.fire({
            width: "400px",
            title: `${categoryName}`,
            customClass: {
                title: "text-white",
            },
            html: `
                <div class="relative mb-6">
                    
                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                            </svg>
                        </span>
                        <input type="text" id="swal-input1" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom de la dépense">
                    </div>
                </div>
                <div class="flex">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd"/>
                          <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd"/>
                          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                        </svg>
                    </span>
                    <input type="text" id="swal-input2" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prix de la dépense">
                </div>
            `,
            background: "#374151",
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Ajouter",
            cancelButtonText: "Annuler",
            didRender: () => {
                // Réduire le bouton de confirmation
                document.querySelector(".swal2-confirm").classList.add(
                    "bg-blue-500",
                    "text-white",
                    "hover:bg-blue-600",
                    "px-4",
                    "py-2",
                    "text-sm",
                    "rounded"
                );

                // Réduire le bouton d'annulation
                document.querySelector(".swal2-cancel").classList.add(
                    "text-white",
                    "px-4",
                    "py-2",
                    "text-sm",
                    "rounded"
                );
            },
            preConfirm: () => {
                const input1 = document.getElementById("swal-input1").value;
                const input2 = document.getElementById("swal-input2").value;

                if (!input1 || !input2) {
                    Swal.showValidationMessage("Veuillez remplir tous les champs");
                    return null;
                }
                return [input1, input2];
            },
        });
    }

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
                                    <div
                                        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
                                            modalDataTableOpen ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    ></div>
                                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4">
                                            <DialogPanel
                                                transition
                                                className="relative w-full max-w-4xl rounded-md p-9 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                            >
                                                <button
                                                    className="absolute top-3 right-3 rounded-full p-0 text-white/70 hover:text-white focus:outline-none"
                                                    onClick={close}
                                                    aria-label="Fermer la modale"
                                                >
                                                    ✕ {/* Icône de croix */}
                                                </button>
                                                <DTable/>
                                                <div className="bg-gray-700 w-full h-10 rounded-b-lg">
                                                    <p className="text-lg text-gray-900 dark:text-white"></p>
                                                </div>
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
                                    onClick={addItem}
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