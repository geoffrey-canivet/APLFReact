import { create } from 'zustand';
import cardDataDB from "../data/DB.js"

// TOTAL CATEGORIES
// (fonction helper)
const calculateTotals = (categories) =>
    categories.map((category) => ({
        ...category,
        total: category.data.reduce((sum, item) => sum + parseFloat(item.price || 0), 0)
    }));

const useIncomeStore = create((set, get) => ({

    // DATA
    dataIncome: calculateTotals(cardDataDB.filter((item) => [9, 10, 11, 12].includes(item.id))) ,

    // AJOUTER REVENU
    addIncome: (categoryId, newItem) =>
        set((state) => {
            const updatedData = state.dataIncome.map((category) =>
                category.id === categoryId
                    ? { ...category, data: [...category.data, newItem] }
                    : category
            );
                return {dataIncome: calculateTotals(updatedData) };
        }),

    // MODIFIER REVENU
    updateIncome: (incomeId, updatedItem) =>
        set((state) => {
            const updatedData = state.dataIncome.map((category) => ({
                ...category,
                data: category.data.map((item) =>
                    item.id === incomeId ? { ...item, ...updatedItem } : item
                )
            }));
                return {dataIncome: calculateTotals(updatedData) };
        }),


    // SUPPRIMER REVENU
    deleteIncome: (incomeId) =>
        set((state) => {
            const updatedData = state.dataIncome.map((category) => ({
                ...category,
                data: category.data.filter((item) => item.id !== incomeId)
            }));
            return { dataIncome: calculateTotals(updatedData) };
        })
}));

export default useIncomeStore;