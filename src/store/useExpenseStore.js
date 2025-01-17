import { create } from 'zustand';
import cardDataDB from "../data/DB.js"

const useExpenseStore = create((set, get) => ({

    // DATA
    dataExpenseFixed: cardDataDB.filter((item) => [1, 2, 3, 4].includes(item.id)),
    dataExpenseOccasional: cardDataDB.filter((item) => [5, 6, 7, 8].includes(item.id)),

    // AJOUTER DEPENSE FIXE
    addFixedExpense: (categoryId, newItem) => {
        set((state) => ({
            dataExpenseFixed: state.dataExpenseFixed.map((category) =>
                category.id === categoryId
                    ? { ...category, data: [...category.data, newItem] }
                    : category
            ),
        }));
    },

    // MODIFIER DEPENSE FIXE
    updateFixedExpense: (expenseId, updatedItem) => {
        set((state) => ({
            dataExpenseFixed: state.dataExpenseFixed.map((category) => ({
                ...category,
                data: category.data.map((item) =>
                    item.id === expenseId ? { ...item, ...updatedItem } : item
                ),
            })),
        }));
        console.log(expenseId, updatedItem);
    },

    // SUPPRIMER DEPENSE FIXE
    deleteFixedExpense: (expenseId) => {
        set((state) => {
            const updatedData = state.dataExpenseFixed.map((category) => ({
                ...category,
                data: category.data.filter((item) => item.id !== expenseId),
            }));
            console.log("Updated state after deletion:", updatedData);
            return { dataExpenseFixed: updatedData };
        });
    },

    // AJOUTER DEPENSES OCCASIONNELLES

    // MODIFIER DEPENSES OCCASIONNELLES

    // SUPPRIMER DEPENSES OCCASIONNELLES





}));



export default useExpenseStore;
