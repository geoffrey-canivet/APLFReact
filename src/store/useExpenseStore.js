import { create } from 'zustand';
import cardDataDB from "../data/DB.js"

// TOTAL CATEGORIES
// (fonction helper)
const calculateTotals = (categories) =>
    categories.map((category) => ({
        ...category,
        total: category.data.reduce((sum, item) => sum + parseFloat(item.price || 0), 0)
    }));

const useExpenseStore = create((set, get) => ({

    // DATA
    dataExpenseFixed: calculateTotals(cardDataDB.filter((item) => [1, 2, 3, 4].includes(item.id))) ,


    // AJOUTER DEPENSE FIXE
    addFixedExpense: (categoryId, newItem) =>
        set((state) => {
            const updatedData = state.dataExpenseFixed.map((category) =>
                category.id === categoryId
                    ? { ...category, data: [...category.data, newItem] }
                    : category
            );
            return { dataExpenseFixed: calculateTotals(updatedData) };
        }),

    // MODIFIER DEPENSE FIXE
    updateFixedExpense: (expenseId, updatedItem) =>
        set((state) => {
            const updatedData = state.dataExpenseFixed.map((category) => ({
                ...category,
                data: category.data.map((item) =>
                    item.id === expenseId ? { ...item, ...updatedItem } : item
                )
            }));
            return { dataExpenseFixed: calculateTotals(updatedData) };
        }),

    // SUPPRIMER DEPENSE FIXE
    deleteFixedExpense: (expenseId) =>
        set((state) => {
            const updatedData = state.dataExpenseFixed.map((category) => ({
                ...category,
                data: category.data.filter((item) => item.id !== expenseId)
            }));
            return { dataExpenseFixed: calculateTotals(updatedData) };
        })



    // AJOUTER DEPENSES OCCASIONNELLES

    // MODIFIER DEPENSES OCCASIONNELLES

    // SUPPRIMER DEPENSES OCCASIONNELLES

}));



export default useExpenseStore;
