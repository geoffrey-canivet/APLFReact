import avat from "../../assets/avat.png";


const UserProfil = () => {
    return (
        <>
            <div className="pt-20 px-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 ">
                    <div className="px-5 py-4 bg-gray-700 rounded-md">
                        {/*username*/}
                        <div className="text-3xl font-bold text-white mb-6">
                            Profil utilisateur
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
                                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Admin</span>
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
                                    className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg mt-1 text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                <svg className="w-5 h-5 text-gray-800 dark:text-white mr-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                                          clipRule="evenodd"/>
                                </svg>

                                Modifier
                            </button>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-md">
                        {/*historique*/}
                        <div className="text-3xl font-bold text-white mb-6">
                            Historique
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
                    <div className="p-4 bg-gray-700 rounded-md">
                        <div className="text-3xl font-bold text-white mb-6">
                            Statistiques
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfil;