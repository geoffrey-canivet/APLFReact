import { create } from 'zustand';
import {useEffect} from "react";
import cardDataDB from "../data/DB.js"

const useExpenseStore = create((set, get) => ({

    // Recupération de la DB
    dataBase: cardDataDB,

    // AJOUTER DEPENSE FIXE
    addFixedExpense: (fixedExpense) => {
        set((state) => ({
            dataBase: [...state.dataBase, fixedExpense],
        }));
    },



}));



export default useExpenseStore;
