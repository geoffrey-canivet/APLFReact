import { create } from 'zustand';
import cardDataDB from "../data/DB.js";

// TOTAL CATEGORIES
// (fonction helper)
const calculateTotals = (categories) =>
    categories.map((category) => ({
        ...category,
        total: category.data.reduce((sum, item) => sum + parseFloat(item.price || 0), 0),
    }));

const useExpenseOccasionalStore = create((set, get) => ({
    // DATA
    dataExpenseOccasional: calculateTotals(
        cardDataDB.filter((item) => [5, 6, 7, 8].includes(item.id))
    ),

    // AJOUTER DÉPENSE OCCASIONNELLE
    addOccasionalExpense: (categoryId, newItem) =>
        set((state) => {
            console.log("Category ID reçu :", categoryId);
            console.log("Nouvel élément brut :", newItem);

            const updatedData = state.dataExpenseOccasional.map((category) => {
                if (category.id === categoryId) {
                    // Vérifiez si `newItem.subData` est un tableau ou une valeur unique
                    const normalizedSubData = Array.isArray(newItem.subData)
                        ? newItem.subData.map((val) => parseFloat(val || 0))
                        : [parseFloat(newItem.subData || 0)];

                    // Recalculez le total de `subData`
                    const updatedPrice = normalizedSubData.reduce(
                        (sum, val) => sum + (isNaN(val) ? 0 : val),
                        0
                    );

                    // Créez un nouvel élément avec le total mis à jour
                    const normalizedItem = {
                        ...newItem,
                        subData: normalizedSubData,
                        price: updatedPrice, // Met le total de `subData` dans `price`
                    };

                    console.log("Élément normalisé :", normalizedItem);

                    // Ajoutez le nouvel élément à la catégorie
                    const updatedCategoryData = [...category.data, normalizedItem];

                    // Recalculez le total de la catégorie
                    const updatedTotal = updatedCategoryData.reduce(
                        (sum, item) => sum + parseFloat(item.price || 0),
                        0
                    );

                    console.log("Données mises à jour pour la catégorie :", updatedCategoryData);
                    console.log("Total recalculé pour la catégorie :", updatedTotal);

                    return {
                        ...category,
                        data: updatedCategoryData,
                        total: updatedTotal, // Mise à jour du total de la catégorie
                    };
                }
                return category; // Aucune modification pour les autres catégories
            });

            console.log("Nouvelles données après mise à jour :", updatedData);

            return { dataExpenseOccasional: updatedData };
        }),



    // AJOUTER UNE SOUS-DONNÉE
    addSubItem: (itemId, newSubItem) =>
        set((state) => {
            const subItem = newSubItem.price;

            const updatedData = state.dataExpenseOccasional.map((category) => {
                const updatedCategoryData = category.data.map((item) => {
                    if (item.name === itemId) {
                        const updatedSubData = [...(item.subData || []), subItem];

                        const updatedPrice = updatedSubData.reduce(
                            (sum, value) => sum + parseFloat(value || 0),
                            0
                        );

                        return {
                            ...item,
                            subData: updatedSubData,
                            price: updatedPrice,
                        };
                    }
                    return item;
                });

                const updatedCategoryTotal = updatedCategoryData.reduce(
                    (sum, item) => sum + parseFloat(item.price || 0),
                    0
                );

                return {
                    ...category,
                    data: updatedCategoryData,
                    total: updatedCategoryTotal,
                };
            });

            return { dataExpenseOccasional: updatedData };
        }),

    // SUPPRIMER UNE DÉPENSE OCCASIONNELLE
    deleteOccasionalExpense: (expenseId) =>
        set((state) => {
            const updatedData = state.dataExpenseOccasional.map((category) => {
                const filteredData = category.data.filter((item) => item.name !== expenseId);

                const updatedCategoryTotal = filteredData.reduce(
                    (sum, item) => sum + parseFloat(item.price || 0),
                    0
                );

                return {
                    ...category,
                    data: filteredData,
                    total: updatedCategoryTotal,
                };
            });

            return { dataExpenseOccasional: updatedData };
        }),
}));

export default useExpenseOccasionalStore;
