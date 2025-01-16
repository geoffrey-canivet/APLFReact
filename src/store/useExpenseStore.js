import { create } from 'zustand';
import cardDataDB from "../data/DB.js"

const useExpenseStore = create((set, get) => ({

    // Initialisation de la base de données
    dataExpenseFIxed: cardDataDB.filter((item) => [1, 2, 3, 4].includes(item.id)),

    // AFFICHER LES DEPENSES FIXES
    fetchExpend: () => {

    },

    // AJOUTER DEPENSE FIXE
    addFixedExpense: (categoryId, newItem) => {
        set((state) => ({
            dataExpenseFIxed: state.dataExpenseFIxed.map((category) =>
                category.id === categoryId
                    ? { ...category, data: [...category.data, newItem] }
                    : category
            ),
        }));
    },

    updateTotal: () => {
        set((state) => ({
            dataExpenseFIxed: state.dataExpenseFIxed.map((category) => ({
                ...category,
                total: category.data.reduce(
                    (sum, item) => sum + parseFloat(item.price || 0),
                    0
                ),
            })),
        }));
    },



}));



export default useExpenseStore;
