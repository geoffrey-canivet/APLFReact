import { useEffect } from "react";
import MySwal from "sweetalert2";
import ReactDOM from "react-dom/client"; // React 18+
import DTable from "../Tables/DTable.jsx";

const ModalDatatable = ({ closeModal, categoryId }) => {
    useEffect(() => {
        let root = null; // Stocke la racine React

        MySwal.fire({
            title: "Courante",
            padding: 0,
            customClass: {
                popup: "custom-popup",
                title: "custom-title",
                htmlContainer: "custom-body",
                actions: "custom-actions",
            },
            html: `
                <div id="datatable-container"></div>
                <style>
                    .custom-backdrop {
				        background-color: rgba(0, 0, 0, 100)!important;
				    }
                    .custom-popup {
                    padding: 50px;
                        background-color: #1F2937;
                        border: 2px solid #4a5568;
                        border-radius: 12px;
                        width: 80vw;
                        max-width: 1200px;
                        overflow: hidden
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                    .custom-title {
                        color: #63b3ed;
                        font-size: 1.25rem;
                        padding-top: 15px;
                        padding-bottom: 15px;
                    }
                    .custom-body {
                        padding-bottom: 20px;
                        padding-top: 0px;
                        padding-left: 15px;
                        padding-right: 15px;
                        color: #cbd5e0;
                        overflow: hidden
                    }
                    .custom-actions {
                        background-color: #1F2937;
                        min-height: 20px;
                    }
                </style>
            `,
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonText: "Confirmer",
            cancelButtonText: "Annuler",
            didOpen: () => {
                const container = document.getElementById("datatable-container");
                if (container) {
                    if (!container._root) {
                        // Si la racine n'existe pas encore, la créer
                        root = ReactDOM.createRoot(container);
                        container._root = root; // Stocker la racine dans une propriété personnalisée
                    } else {
                        // Réutiliser la racine existante
                        root = container._root;
                    }
                    root.render(<DTable categoryId={categoryId} />);
                }
                const backdrop = document.querySelector(".swal2-backdrop-show");
                if (backdrop) {
                    backdrop.style.backdropFilter = "blur(5px)";
                    backdrop.style.backgroundColor = "rgba(4,19,35,0.7)"; // Gris foncé avec 90% d'opacité
                }
            },
            didDestroy: () => {
                const container = document.getElementById("datatable-container");
                if (container && container._root) {
                    container._root.unmount(); // Démonte proprement le composant React
                    delete container._root; // Supprime la référence à la racine
                }
            },
        }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
                closeModal();
            }
        });

        return () => {
            // Cleanup manuel si nécessaire
            const container = document.getElementById("datatable-container");
            if (container && container._root) {
                container._root.unmount();
                delete container._root;
            }
        };
    }, [closeModal]);

    return null;
};

export default ModalDatatable;
