import {useEffect} from "react";
import MySwal from "sweetalert2";
import Swal from "sweetalert2";

const ModalDatatable = ({closeModal}) => {

    useEffect(() => {
        MySwal.fire({
            title: "Courante",
            padding: 0,
            customClass: {
                popup: "custom-popup",
                title: "custom-header",
                htmlContainer: "custom-body",
                actions: "custom-footer",
                confirmButton: "small-confirm-button",
                cancelButton: "small-cancel-button",
            },
            html: `
            <h1>DATATABLE</h1>
            <style>
                .custom-backdrop {
                    background-color: rgba(0, 0, 0, 100)!important;
                }
                .custom-popup {
                    max-width: 450px;
                    background-color: #1F2937;
                    border-radius: 12px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
                .custom-header {
                      padding-left: 0 ;
                      padding-right: 0 ;
                      padding-top: 15px;
                      padding-bottom: 0;
                      margin: 0 !important;
                      background-color: #1F2937;
                      color: #fff;
                      font-size: 1.25rem;
                      border-top-left-radius: 12px;
                      border-top-right-radius: 12px;
                }
                .custom-body {
                        padding: 0 !important;
                      margin: 0 !important;
                      background-color: #1F2937;
                      border-bottom-left-radius: 12px;
                      border-bottom-right-radius: 12px;
                }
            </style>
        `,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                const backdrop = document.querySelector(".swal2-backdrop-show");
                if (backdrop) {
                    backdrop.style.backdropFilter = "blur(5px)";
                    backdrop.style.backgroundColor = "rgba(4,19,35,0.7)";
                }
            },
        }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
                closeModal(); // Appel de la fonction closeModal pour fermer proprement
            }
        });
    }, [closeModal]);


    return (
        <>

        </>
    );
};

export default ModalDatatable;