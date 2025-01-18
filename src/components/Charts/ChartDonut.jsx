import Chart from 'react-apexcharts';
import cardData from "../../data/DB.js";
import {useEffect, useState} from "react";
import useExpenseStore from "../../store/useExpenseStore.js";
import useIncomeStore from "../../store/useIncomeStore.js";
import useExpenseOccasionalStore from "../../store/useExpenseOccasionalStore.js";

const ChartDonut = ({categoryId}) => {

    const [categories, setCategories] = useState(null); // État pour stocker la catégorie sélectionnée
    const [labels, setLabels] = useState([]);
    const [series, setSeries] = useState([]);


    // STORE / DB
    const dataExpenseFixed = useExpenseStore((state) => state.dataExpenseFixed);
    const dataIncome = useIncomeStore((state) => state.dataIncome);
    const dataOccasionel = useExpenseOccasionalStore((state) => state.deleteOccasionalExpense())

    // Mettre à jour `categories` en fonction de `categoryId`
    useEffect(() => {
        let selectedCategory = null;

        if ([1, 2, 3, 4].includes(categoryId)) {
            selectedCategory = dataExpenseFixed.find((item) => item.id === categoryId);
        } else if ([9, 10, 11, 12].includes(categoryId)) {
            selectedCategory = dataIncome.find((item) => item.id === categoryId);
        }

        if (selectedCategory) {
            setCategories(selectedCategory);
        }
    }, [categoryId, dataExpenseFixed, dataIncome, dataOccasionel]);

// Mettre à jour `labels` et `series` en fonction de `categories`
    useEffect(() => {
        if (categories && categories.data) {
            setLabels(categories.data.map((item) => item.name));
            setSeries(categories.data.map((item) => parseFloat(item.price)));
        }
    }, [categories]);


    const generateRandomColors = (count) => {
        return Array.from({ length: count }, () =>
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };



    const chartOptions = {
        // Configuration générale du graphique
        chart: {
            type: 'donut', // Type de graphique : Donut
            background: 'transparent',
            foreColor: '#d35e7b', // Couleur du texte (clair)
            toolbar: {
                show: true, // Affiche la barre d'outils pour télécharger ou interagir
                tools: {
                    download: true, // Téléchargement en PNG, SVG ou CSV
                    selection: true, // Désactive l'outil de sélection (non pertinent ici)
                    zoom: true, // Désactive le zoom
                    zoomin: true, // Désactive le zoom avant
                    zoomout: true, // Désactive le zoom arrière
                    pan: true, // Désactive le déplacement
                    reset: true, // Réinitialise la vue
                },
            },
            animations: {
                enabled: true, // Active les animations
                easing: 'easeinout', // Style d'animation
                speed: 800, // Durée de l'animation
                animateGradually: {
                    enabled: true,
                    delay: 150, // Délai entre les animations des segments
                },
                dynamicAnimation: {
                    enabled: true, // Active les animations dynamiques lors des mises à jour
                    speed: 350, // Durée de l'animation lors d'une mise à jour dynamique
                },
            },
        },

        // Options de style pour les couleurs et les labels
        colors: generateRandomColors(labels.length), // Couleurs des segments
        labels: labels, // Labels pour chaque segment

        // Options de personnalisation spécifiques au Donut
        plotOptions: {
            pie: {
                donut: {
                    size: '70%', // Taille du donut (en pourcentage du conteneur)
                    background: 'transparent', // Couleur de l’arrière-plan du centre
                    labels: {
                        show: true, // Affiche les labels au centre
                        name: {
                            show: true, // Affiche le label central
                            fontSize: '22px', // Taille de la police pour le label
                            fontFamily: 'Arial, sans-serif', // Police du label
                            color: '#333', // Couleur du texte
                            offsetY: -10, // Décalage vertical
                        },
                        value: {
                            show: true, // Affiche la valeur centrale
                            fontSize: '16px', // Taille de la police
                            fontFamily: 'Arial, sans-serif',
                            color: '#666', // Couleur du texte
                            offsetY: 10, // Décalage vertical
                            formatter: (val) => `${val}€`, // Format de la valeur (ajoute €)
                        },
                        total: {
                            show: true, // Affiche un texte total dans le centre
                            label: 'Total', // Texte du label
                            fontSize: '18px', // Taille de la police
                            color: '#000', // Couleur du texte
                            formatter: () => series.reduce((acc, curr) => acc + curr, 0), // Format du texte total
                        },
                    },
                },
            },
        },
        stroke: {
            show: false, // Désactive les bordures des segments
        },

        // Options pour le tooltip (info-bulle)
        tooltip: {
            enabled: true, // Active les info-bulles
            fillSeriesColor: true, // Utilise la couleur du segment
            theme: 'light', // Thème clair
            marker: {
                show: true, // Affiche les marqueurs
            },
            y: {
                formatter: (val) => `${val} ventes`, // Format pour la valeur dans le tooltip
            },
        },

        // Options de responsive (taille dynamique selon l'écran)
                responsive: [
                    {
                        breakpoint: 768, // Pour les écrans de moins de 768px
                        options: {
                            chart: {
                                width: 300, // Largeur du graphique
                            },
                            legend: {
                                position: 'bottom',
                            },
                        },
                    },
                ],

        // Configuration de la légende
        legend: {
            show: true, // Affiche la légende
            position: 'right', // Position de la légende (top, right, bottom, left)
            horizontalAlign: 'center', // Alignement horizontal
            floating: false, // Légende flottante
            fontSize: '14px', // Taille de la police
            fontFamily: 'Arial, sans-serif',
            markers: {
                width: 12, // Taille des marqueurs
                height: 12,
                radius: 12, // Forme ronde
                strokeWidth: 0, // Supprime la bordure autour des marqueurs
                offsetX: -5, // Décalage horizontal du marqueur vers le label
            },
            itemMargin: {
                horizontal: 10, // Espace horizontal entre le marqueur et le label
                vertical: 5, // Espace vertical entre les lignes de légende
            },
            labels: {
                useSeriesColors: true, // Utilise la couleur des séries pour les labels
            },
        },

        // Configuration des labels des axes (inutile pour un Donut mais disponible)
        dataLabels: {
            enabled: true, // Active les labels sur les segments
            formatter: (val) => `${val.toFixed(1)}%`, // Formate les labels en pourcentage
            style: {
                fontSize: '12px', // Taille de la police
                colors: ['#fff'], // Couleur des labels
            },
        },
    };

    // Séries de données pour chaque segment
    const chartSeries = series;

    return (
        <div className="w-full max-w-3xl mx-auto bg-transparent">
            <Chart options={chartOptions} series={chartSeries} type="donut" height={400} />
        </div>
    );
};

export default ChartDonut;