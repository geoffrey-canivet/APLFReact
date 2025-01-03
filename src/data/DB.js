import {faCreditCard, faHouse, faTicket, faUmbrella} from "@fortawesome/free-solid-svg-icons";

const cardData = [
    {
        id: 1,
        title: "Charges",
        icon: faHouse,
        info: [
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
        info: [
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
        info: [
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
        info: [
            { name: "Netflix", price: "15" },
            { name: "Spotify", price: "10" },
            { name: "Amazon Prime", price: "12" },
            { name: "Disney+", price: "8" },
            { name: "HBO Max", price: "14" },
            { name: "YouTube Premium", price: "11" },
        ],
        total: null,
    },
];


export default cardData;