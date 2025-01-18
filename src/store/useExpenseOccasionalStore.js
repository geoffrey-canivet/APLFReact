import { create } from 'zustand';
import cardDataDB from "../data/DB.js"

// TOTAL CATEGORIES
// (fonction helper)
const calculateTotals = (categories) =>
    categories.map((category) => ({
        ...category,
        total: category.data.reduce((sum, item) => sum + parseFloat(item.price || 0), 0)
    }));

const useExpenseOccasionalStore = create((set, get) => ({

    // DATA
    dataExpenseOccasional: calculateTotals(cardDataDB.filter((item) => [5, 6, 7, 8].includes(item.id))) ,

    // AJOUTER DEPENSE OCCASIONNELLE
    addOccasionalExpense: (categoryId, newItem) =>
        set((state) => {
            console.log("Category ID reçu :", categoryId);
            console.log("Nouvel élément brut :", newItem);

            const updatedData = state.dataExpenseOccasional.map((category) => {
                if (category.id === categoryId) {
                    // Normaliser l'élément ajouté
                    const normalizedItem = {
                        ...newItem,
                        subData: Array.isArray(newItem.subData) ? newItem.subData : [newItem.subData],
                        total: newItem.total !== undefined ? parseFloat(newItem.total) : 0,
                    };

                    console.log("Élément normalisé :", normalizedItem);

                    // Ajouter le nouvel élément
                    const updatedData = [...category.data, normalizedItem];

                    // Recalculer le total
                    const updatedTotal = updatedData.reduce((sum, item) => {
                        const itemTotal = parseFloat(item.total || 0); // Convertir chaque total en nombre
                        return sum + (isNaN(itemTotal) ? 0 : itemTotal); // Ignorer les valeurs invalides
                    }, 0);

                    console.log("Données mises à jour pour la catégorie :", updatedData);
                    console.log("Total recalculé :", updatedTotal);

                    return {
                        ...category,
                        data: updatedData,
                        total: updatedTotal,
                    };
                }
                return category;
            });

            console.log("Nouvelles données après mise à jour :", updatedData);

            return { dataExpenseOccasional: updatedData };
        }),

    addSubItem: (itemId, newSubItem) =>
        set((state) => {
            const subItem = newSubItem.price

            console.log("=== Début de la fonction addSubItem ===");
            console.log("ID de l'élément reçu (string) :", itemId);
            console.log("Nouvelle sous-valeur reçue :", subItem);

            const updatedData = state.dataExpenseOccasional.map((category) => {
                console.log("Catégorie analysée :", category.title);

                const updatedCategoryData = category.data.map((item) => {
                    console.log("Analyse de l'élément :", item.name, "avec ID :", item.id);

                    if (item.name === itemId) { // Comparaison d'IDs en tant que chaînes
                        console.log("Élément correspondant trouvé :", item);

                        // Vérifiez si `subData` est bien un tableau
                        if (!Array.isArray(item.subData)) {
                            console.warn("subData n'est pas un tableau. Valeur actuelle :", item.subData);
                            item.subData = [];
                        }

                        // Ajouter la nouvelle valeur à subData
                        const updatedSubData = [...item.subData, subItem];
                        console.log("SubData après ajout :", updatedSubData);

                        // Recalculer le total de l'élément
                        const updatedTotal = updatedSubData.reduce((sum, value) => {
                            const parsedValue = parseFloat(value || 0);
                            console.log("Ajout au total :", parsedValue, "Valeur courante du total :", sum);
                            return sum + (isNaN(parsedValue) ? 0 : parsedValue);
                        }, 0);
                        console.log("Nouveau total calculé pour l'élément :", updatedTotal);

                        return {
                            ...item,
                            subData: updatedSubData,
                            total: updatedTotal,
                        };
                    }

                    return item;
                });

                // Recalculer le total de la catégorie
                const updatedCategoryTotal = updatedCategoryData.reduce((sum, item) => {
                    const itemTotal = parseFloat(item.total || 0);
                    console.log("Ajout au total de la catégorie :", itemTotal, "Total actuel :", sum);
                    return sum + (isNaN(itemTotal) ? 0 : itemTotal);
                }, 0);
                console.log("Nouveau total calculé pour la catégorie :", updatedCategoryTotal);

                return {
                    ...category,
                    data: updatedCategoryData,
                    total: updatedCategoryTotal, // Mise à jour du total de la catégorie
                };
            });

            console.log("Nouvelles données après mise à jour :", updatedData);
            console.log("=== Fin de la fonction addSubItem ===");

            return { dataExpenseOccasional: updatedData };
        }),

    deleteOccasionalExpense: (expenseId) =>
        set((state) => {
            console.log("ID de la dépense à supprimer (string) :", expenseId);

            // Mise à jour des données en supprimant l'élément correspondant
            const updatedData = state.dataExpenseOccasional.map((category) => {
                const filteredData = category.data.filter((item) => {
                    console.log("Comparaison d'ID :", item.name, "===", expenseId);
                    return item.name !== expenseId; // Assurez-vous que item.id reste une chaîne
                });
                console.log("Données filtrées pour la catégorie :", filteredData);

                // Recalculer le total de la catégorie
                const updatedCategoryTotal = filteredData.reduce(
                    (sum, item) => sum + parseFloat(item.total || 0),
                    0
                );
                console.log("Total mis à jour pour la catégorie :", updatedCategoryTotal);

                return {
                    ...category,
                    data: filteredData,
                    total: updatedCategoryTotal,
                };
            });

            console.log("Nouvelles données après suppression :", updatedData);

            return { dataExpenseOccasional: updatedData };
        }),











}));

export default useExpenseOccasionalStore;