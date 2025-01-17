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
        color: "#74C0FC",
        data: [
            { id:111, name: "Electricité", price: "200" },
            { id:222, name: "Loyer", price: "850" },
            { id:333, name: "Eau", price: "100" },
        ],
        total: null,
    },
    {
        id: 2,
        title: "Crédit",
        icon: faCreditCard,
        color: "#74C0FC",
        data: [
            { id:444, name: "Visa", price: "300" },
            { id:555, name: "MasterCard", price: "200" },
            { id:666, name: "American Express", price: "100" },
        ],
        total: null,
    },
    {
        id: 3,
        title: "Assurances",
        icon: faUmbrella,
        color: "#74C0FC",
        data: [
            { id:777, name: "Maison", price: "150" },
            { id:888, name: "Voiture", price: "250" },
            { id:999, name: "Santé", price: "200" },
        ],
        total: null,
    },
    {
        id: 4,
        title: "Abonnements",
        icon: faTicket,
        color: "#74C0FC",
        data: [
            { id:11, name: "Netflix", price: "15" },
            { id:22, name: "Spotify", price: "10" },
            { id:33, name: "Amazon Prime", price: "12" },
        ],
        total: null,
    },
    {
        id: 5,
        title: "Courantes",
        icon: faAppleWhole,
        color: "#74C0FC",
        data: [
            { name: "Alimentaire", price: "56", subData: ["30", "7", "19"] },
            { name: "Distributeur boissons", price: "82", subData: ["17", "19", "34", "12"] },
            { name: "Produit néttoyage", price: "133", subData: ["34", "99"] },
        ],
        total: null,
    },
    {
        id: 6,
        title: "Loisirs",
        icon: faPlane,
        color: "#74C0FC",
        data: [
            { name: "Restaurant", price: "37", subData: ["30", "7"] },
            { name: "Cinema", price: "82", subData: ["17", "19", "34", "12"] },
            { name: "Théatre", price: "180", subData: ["34", "47", "99"] },
            { name: "Spectacle", price: "117", subData: ["36", "49", "32"] },
            { name: "Concert", price: "218", subData: ["34", "67", "18", "99"] },
            { name: "Jardinage", price: "140", subData: ["36", "47", "38", "19"] },
            { name: "Décoration", price: "108", subData: ["16", "92"] },
            { name: "Voyage", price: "137", subData: ["34", "46", "18", "39"] },
        ],
        total: null,
    },
    {
        id: 7,
        title: "Occasionnelles",
        icon: faGift,
        color: "#74C0FC",
        data: [
            { name: "Coiffeur", price: "121", subData: ["30", "7", "84"] },
            { name: "Salon de beauté", price: "137", subData: ["34", "46", "18", "39"] },
            { name: "Médecin", price: "189", subData: ["34", "47", "16", "92"] },
            { name: "Médicaments", price: "91", subData: ["49", "10", "32"] },
            { name: "Vêtements", price: "112", subData: ["17", "19", "34", "42"] },
            { name: "Cadeau", price: "76", subData: ["34", "42"] },
            { name: "Scolarité", price: "137", subData: ["13", "19", "33", "72"] },
        ],
        total: null,
    },
    {
        id: 8,
        title: "Divers",
        icon: faThumbtack,
        color: "#74C0FC",
        data: [
            { name: "Taxe", price: "172", subData: ["63", "14", "33", "62"] },
            { name: "Frais bancaire", price: "91", subData: ["34", "18", "39"] },
            { name: "Transport", price: "114", subData: ["17", "19", "34", "44"] },
            { name: "Frais voiture", price: "204", subData: ["34", "67", "84", "19"] },
            { name: "Avocat", price: "117", subData: ["36", "49", "32"] },
            { name: "Comptable", price: "145", subData: ["36", "42", "18", "49"] },
        ],
        total: null,
    },
    {
        id: 9,
        title: "Revenus Actifs",
        icon: faMoneyBill,
        color: "#48AE6F",
        data: [
            { id:44, name: "Salaire", price: "1930" },
            { id:55, name: "Heures supplémentaires", price: "320"},
            { id:66, name: "Honoraires", price: "780",},
        ],
        total: null,
    },
    {
        id: 10,
        title: "Revenus Passifs",
        icon: faThumbtack,
        color: "#48AE6F",
        data: [
            { id:77, name: "Loyers", price: "780"},
            { id:88, name: "Intérêts", price: "70"},
            { id:99, name: "Royalties", price: "150"},
        ],
        total: null,
    },
    {
        id: 11,
        title: "Revenus Exceptionnelles",
        icon: faMoneyBillWave,
        color: "#48AE6F",
        data: [
            { id:98, name: "Ventes d'objets", price: "150"},
            { id:987, name: "Héritages", price: "3.460"},
            { id:65, name: "Gains de loterie", price: "80"},
        ],
        total: null,
    },
    {
        id: 12,
        title: "Divers",
        icon: faSackDollar,
        color: "#48AE6F",
        data: [
            { id:12345, name: "Autres", price: "180"},
        ],
        total: null,
    },
];


export default cardData;