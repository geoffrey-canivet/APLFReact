import {
    faAppleWhole,
    faCreditCard,
    faGift,
    faHouse,
    faPlane, faThumbtack,
    faTicket,
    faUmbrella,
    faMoneyBill, faMoneyBillWave, faSackDollar
} from "@fortawesome/free-solid-svg-icons";

const cardData = [
    {
        id: 1,
        title: "Charges",
        icon: faHouse,
        data: [
            { name: "Electricité", price: "200" },
            { name: "Loyer", price: "850" },
            { name: "Eau", price: "100" },
            { name: "Internet", price: "50" },
            { name: "Téléphone", price: "30" },
            { name: "Electricité", price: "200" },
            { name: "Loyer", price: "850" },
            { name: "Eau", price: "100" },
            { name: "Internet", price: "50" },
            { name: "Téléphone", price: "30" },
            { name: "Autres", price: "70" },
        ],
        total: null,
    },
    {
        id: 2,
        title: "Crédit",
        icon: faCreditCard,
        data: [
            { name: "Visa", price: "300" },
            { name: "MasterCard", price: "200" },
            { name: "American Express", price: "100" },
            { name: "Discover", price: "50" },
            { name: "Diners Club", price: "150" },
            { name: "JCB", price: "80" },
        ],
        total: null,
    },
    {
        id: 3,
        title: "Assurances",
        icon: faUmbrella,
        data: [
            { name: "Maison", price: "150" },
            { name: "Voiture", price: "250" },
            { name: "Santé", price: "200" },
        ],
        total: null,
    },
    {
        id: 4,
        title: "Abonnements",
        icon: faTicket,
        data: [
            { name: "Netflix", price: "15" },
            { name: "Spotify", price: "10" },
            { name: "Amazon Prime", price: "12" },
            { name: "Disney+", price: "8" },
            { name: "HBO Max", price: "14" },
            { name: "YouTube Premium", price: "11" },
        ],
        total: null,
    },
    {
        id: 5,
        title: "Courantes",
        icon: faAppleWhole,
        data: [
            { name: "Alimentaire", total: "15", subData: ["30", "7", "19"]},
            { name: "Distributeur boissons", total: "10", subData: ["17", "19", "34", "12"]},
            { name: "Produit néttoyage", total: "12", subData: ["34", "99"]},
        ],
        total: null,
    },
    {
        id: 6,
        title: "Loisirs",
        icon: faPlane,
        data: [
            { name: "Restaurant", total: "15", subData: ["30", "7"]},
            { name: "Cinema", total: "10", subData: ["17", "19", "34", "12"] },
            { name: "Théatre", total: "12", subData: ["34", "47", "99"] },
            { name: "Spectacle", total: "8", subData: ["36", "49", "32"] },
            { name: "Concert", total: "14", subData: ["34", "67", "18", "99"] },
            { name: "Jardinage", total: "11", subData: ["36", "47", "38", "19"] },
            { name: "Décoration", total: "14", subData: [ "16", "92"] },
            { name: "Voyage", total: "11", subData: ["34", "46", "18", "39"] },
        ],
        total: null,
    },
    {
        id: 7,
        title: "Occasionnelles",
        icon: faGift,
        data: [
            { name: "Coiffeur", total: "15", subData: ["30", "7", "84"]},
            { name: "Salon de beauté", total: "10", subData: ["34", "46", "18", "39"] },
            { name: "Médecin", total: "12", subData: ["34", "47", "16", "92"] },
            { name: "Médicaments", total: "8", subData: [ "49", "10", "32"] },
            { name: "Vêtements", total: "14", subData: ["17", "19", "34", "42"] },
            { name: "Cadeau", total: "11", subData: ["34", "42"] },
            { name: "Scolarité", total: "11", subData: ["13", "19", "33", "72"] }
        ],
        total: null,
    },
    {
        id: 8,
        title: "Divers",
        icon: faThumbtack,
        data: [
            { name: "Taxe", total: "15", subData: ["63", "14", "33", "62"] },
            { name: "Frais bancaire", total: "10", subData: ["34", "18", "39"] },
            { name: "Transport", total: "12", subData: ["17", "19", "34", "44"] },
            { name: "Frais voiture", total: "8", subData: ["34", "67", "84", "19"] },
            { name: "Avocat", total: "14", subData: ["36", "49", "32"] },
            { name: "Comptable", total: "11", subData: ["36", "42", "18", "49"] },
        ],
        total: null,
    },
    {
        id: 9,
        title: "Revenus Actifs",
        icon: faMoneyBill,
        data: [
            { name: "Salaire", total: "1930" },
            { name: "Heures supplémentaires", total: "320"},
            { name: "Honoraires", total: "780",},
        ],
        total: null,
    },
    {
        id: 10,
        title: "Revenus Passifs",
        icon: faThumbtack,
        data: [
            { name: "Loyers", total: "780"},
            { name: "Intérêts", total: "70"},
            { name: "Royalties", total: "150"},
        ],
        total: null,
    },
    {
        id: 11,
        title: "Revenus Exceptionnels",
        icon: faMoneyBillWave,
        data: [
            { name: "Ventes d'objets", total: "150"},
            { name: "Héritages", total: "3.460"},
            { name: "Gains de loterie", total: "80"},
        ],
        total: null,
    },
    {
        id: 12,
        title: "Divers",
        icon: faSackDollar,
        data: [
            { name: "Autres", total: "180"},
        ],
        total: null,
    },
];


export default cardData;