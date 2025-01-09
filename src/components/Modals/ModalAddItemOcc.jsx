import {useEffect} from "react";
import Swal from "sweetalert2";
import MySwal from "sweetalert2";

const ModalAddItemOcc = ({handleFormSubmit, closeModal}) => {

    useEffect(() => {

        MySwal.fire({
            title: "Courante",
            html: `
                <form class="max-w-sm mx-auto">
                    <!--Date-->
                    <label for="inputDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Date</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="number" id="inputDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date">
                    </div>
                    <!--Nom-->
                    <label for="inputNom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Nom</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="text" id="inputNom" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom">
                    </div>
                    <!--Prix-->
                    <label for="inputPrix" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Prix</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="number" id="inputPrix" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prix">
                    </div>
                    <!--Commerce-->
                    <div class="relative">
  <label for="commerce-select" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
    Commerce
  </label>
  <div class="relative">
    <select
      id="commerce-select"
      class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Commerce</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 12H8m4-4v8"
        />
      </svg>
    </div>
  </div>
</div>

                    <!--Commentaire-->
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    <!--Piece jointe-->
                   <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Small file input</label>
<input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file">
                          
                 


  
                      
                    
                    
                </form>
                <input id="name" class="swal2-input" placeholder="Nom" />
                <input id="email" type="email" class="swal2-input" placeholder="Email" />
                
                <style>
         /*       .file-upload-wrapper {
                      display: flex;
                      flex-direction: column;
                      gap: 8px;
                    }*/
                    
                    .custom-file-upload {
                      display: flex;
                      align-items: center;
                      gap: 0;
                    }
                    
                    .file-upload-button {
                      background-color: #374151; /* Couleur de fond */
                      color: white; /* Couleur du texte */
                      padding: 8px 16px;
                      font-size: 14px;
                      font-weight: 500;
                      border: none;
                      border-radius: 6px;
                      cursor: pointer;
                      transition: background-color 0.2s ease-in-out;
}

                    .file-upload-button:hover {
                      background-color: #2563eb; /* Couleur au survol */
                    }
                    
                    .file-name {
                        background-color: #374151;
                      font-size: 14px;
                      color: #4b5563; /* Gris foncé */
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      max-width: 250px;
                      
                    }
                    
                    .hidden {
                      display: none;
                    }
                </style>
            `,
            showCancelButton: true,
            preConfirm: () => {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                if (!name || !email) {
                    Swal.showValidationMessage("Veuillez remplir tous les champs !");
                }
                return { name, email };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleFormSubmit(result.value);
            }
            closeModal()
        });

    }, [handleFormSubmit, closeModal]);


    return (
        <>

        </>
    );
};

export default ModalAddItemOcc;