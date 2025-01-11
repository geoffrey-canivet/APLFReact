import avat from "../../assets/avat.png";
import {useState} from "react";
import ModalAddItemOcc from "../Modals/ModalAddItemOcc.jsx";
import ModalModifProfil from "../Modals/ModalModifProfil.jsx";


const UserProfil = () => {

    // MODAL
    const [currentModal, setCurrentModal] = useState(null);
    const closeModal = () => {
        setCurrentModal(null);
    }



    return (
        <>
            <div className="pt-20 px-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 ">
                    <div className="px-5 py-4 bg-gray-700 rounded-md">
                        {/*username*/}
                        <div className="text-3xl font-bold text-white mb-6 flex items-center space-x-2">
                            <svg
                                className="w-8 h-8 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Profil utilisateur</span>
                        </div>

                        {/*Photo - Infos*/}
                        <div className="flex items-center">
                            {/*Photo*/}
                            <div className="">
                                <img src={avat} width="80px" alt="App Logo"/>
                            </div>
                            {/*infos*/}
                            <div className="ml-3">
                                {/*Status*/}
                                <div className="">
                                    <span
                                        class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Admin</span>
                                </div>
                                {/*Nom*/}
                                <div className="text-xl ml-3 mt-1 mb-1 font-bold text-white">
                                    Geoffreycanivet@gmail.com
                                </div>
                                {/*Autres*/}
                                <div className="italic text-lg ml-3 mt-1 mb-2 font-bold text-gray-500">
                                    Trésorier
                                </div>
                            </div>
                        </div>
                        <hr className="border-t my-4 border-gray-600"/>
                        <div className="">
                            <button type="button"
                                    onClick={() => setCurrentModal("modalModifProfil")}
                                    className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg mt-1 text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                                          clipRule="evenodd"/>
                                </svg>


                                Modifier
                            </button>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-md">
                        {/*historique*/}
                        <div className="text-3xl font-bold text-white mb-6 flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                      clipRule="evenodd"/>
                            </svg>

                            <span>Historique</span>
                        </div>
                        <div className="italic text-md ml-3 mt-1 mb-2 font-bold text-gray-500">
                            10/01/25 - Ajoute dépense
                        </div>
                        <div className="italic text-md ml-3 mt-1 mb-2 font-bold text-gray-500">
                            10/01/25 - Ajoute dépense
                        </div>
                        <div className="italic text-md ml-3 mt-1 mb-2 font-bold text-gray-500">
                            10/01/25 - Ajoute dépense
                        </div>
                        <div className="italic text-md ml-3 mt-1 mb-2 font-bold text-gray-500">
                            10/01/25 - Ajoute dépense
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 px-4 py-4 ">
                    <div className="p-4 bg-gray-700 rounded-md pb-36">
                        <div className="text-3xl font-bold text-white mb-6 flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z"/>
                            </svg>


                            <span>Statistiques</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL */}
            {currentModal === "modalModifProfil" && (
                <ModalModifProfil closeModal={closeModal}  />
            )}
        </>
    );
};

export default UserProfil;