import DataTable from "react-data-table-component";
import "../../styles/global.css"
import useExpenseOccasionalStore from "../../store/useExpenseOccasionalStore.js";

const DTable = ({categoryId}) => {
    /*const data = [
        {
            id: 1,
            title: "Alimentaire",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce A"},
                {price: "7", commerce: "Commerce B"},
                {price: "19", commerce: "Commerce C"},
            ],
        },
        {
            id: 2,
            title: "Cadeaux",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce X"},
                {price: "7", commerce: "Commerce Y"},
                {price: "19", commerce: "Commerce Z"},
            ],
        },
        {
            id: 3,
            title: "Distributeur",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce P"},
                {price: "7", commerce: "Commerce Q"},
                {price: "19", commerce: "Commerce R"},
            ],
        },
        {
            id: 4,
            title: "Alimentaire",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce A"},
                {price: "7", commerce: "Commerce B"},
                {price: "19", commerce: "Commerce C"},
            ],
        },
        {
            id: 5,
            title: "Cadeaux",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce X"},
                {price: "7", commerce: "Commerce Y"},
                {price: "19", commerce: "Commerce Z"},
            ],
        },
        {
            id: 6,
            title: "Distributeur",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce P"},
                {price: "7", commerce: "Commerce Q"},
                {price: "19", commerce: "Commerce R"},
            ],
        },
        {
            id: 7,
            title: "Alimentaire",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce A"},
                {price: "7", commerce: "Commerce B"},
                {price: "19", commerce: "Commerce C"},
            ],
        },
        {
            id: 8,
            title: "Cadeaux",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce X"},
                {price: "7", commerce: "Commerce Y"},
                {price: "19", commerce: "Commerce Z"},
            ],
        },
        {
            id: 9,
            title: "Distributeur",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce P"},
                {price: "7", commerce: "Commerce Q"},
                {price: "19", commerce: "Commerce R"},
            ],
        },
        {
            id: 10,
            title: "Alimentaire",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce A"},
                {price: "7", commerce: "Commerce B"},
                {price: "19", commerce: "Commerce C"},
            ],
        },
        {
            id: 11,
            title: "Cadeaux",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce X"},
                {price: "7", commerce: "Commerce Y"},
                {price: "19", commerce: "Commerce Z"},
            ],
        },
        {
            id: 12,
            title: "Distributeur",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce P"},
                {price: "7", commerce: "Commerce Q"},
                {price: "19", commerce: "Commerce R"},
            ],
        },
        {
            id: 13,
            title: "Alimentaire",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce A"},
                {price: "7", commerce: "Commerce B"},
                {price: "19", commerce: "Commerce C"},
            ],
        },
        {
            id: 14,
            title: "Cadeaux",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce X"},
                {price: "7", commerce: "Commerce Y"},
                {price: "19", commerce: "Commerce Z"},
            ],
        },
        {
            id: 15,
            title: "Distributeur",
            total: 15,
            subData: [
                {price: "30", commerce: "Commerce P"},
                {price: "7", commerce: "Commerce Q"},
                {price: "19", commerce: "Commerce R"},
            ],
        },
    ];*/

    // STORE / DB
    const dataOccasional = useExpenseOccasionalStore((state) => state.dataExpenseOccasional);

    const category = dataOccasional.find((category) => category.id === categoryId);

    if (!category) {
        console.log("Aucune catégorie trouvée pour l'ID :", categoryId);
        return <div>Aucune donnée disponible.</div>;
    }

    const data = category.data || [];



    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const columns = [
        { name: "Nb", selector: (row) => row.subData.length, sortable: true, $grow: 0 },
        { name: "Nom", selector: (row) => row.name, sortable: true, $grow: 1 },
        { name: "Total", selector: (row) => row.price, sortable: true, $grow: 0 },
        { name: "Commerce", cell: (row) => (
                <span
                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Carrefour</span>
            ),
            sortable: true,
            $grow: 1
        },
        {
            name: "Progression", cell: (row) => (
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                        className="h-2.5 rounded-full"
                        style={{
                            width: "45%", // Définir la largeur en fonction de vos données
                            backgroundColor: generateRandomColor(), // Couleur dynamique
                        }}
                    ></div>
                </div>
            ),
            sortable: true,
            $grow: 1
        },

        { name: "Pourcent", selector: (row) => "45%", sortable: true, $grow: 0 },
        { name: "Action", selector: (row) => ". . .", $grow: 0 },
    ];



    const ExpandedComponent = ({ data }) => (
        <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
            <h4>Détails :</h4>
            <ul>
                {data.subData.map((detail, index) => (
                    <li key={index}>
                        <strong>Prix:</strong> {detail} {/* Affiche chaque élément dans `subData` */}
                    </li>
                ))}
            </ul>
        </div>
    );

    const handleRowDoubleClick = (row) => {
        setExpandedRow((prevExpanded) => (prevExpanded === row.id ? null : row.id));
    };

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                expandableRows
                expandOnRowClicked
                fixedHeader
                fixedHeaderScrollHeight="400px"
                expandableRowsHideExpander

                paginationComponentOptions={{
                    rowsPerPageText: "Lignes par page :", // Texte pour la sélection du nombre de lignes
                    rangeSeparatorText: "de", // Texte entre les numéros de page
                    noRowsPerPage: false, // Affiche ou cache le sélecteur du nombre de lignes
                    selectAllRowsItem: true, // Ajoute une option "Toutes les lignes"
                    selectAllRowsItemText: "Toutes", // Texte pour l'option "Toutes les lignes"
                }}
                responsive
                dense
                expandableRowsComponent={ExpandedComponent}
                customStyles={{
                    table: {
                        style: {
                            borderSpacing: "0", // Supprime les espacements entre les cellules
                            margin: "0", // Supprime les marges du tableau
                            backgroundColor: "transparent",
                            borderBottomLeftRadius: "0px", // Pas d'arrondi sur la dernière ligne
                            borderBottomRightRadius: "0px", // Pas d'arrondi sur la dernière ligne
                            "&:last-child": {
                                borderBottomLeftRadius: "0px", // Forcé pour la dernière ligne
                                borderBottomRightRadius: "0px",
                            },
                        },
                    },
                    headRow: {
                        style: {
                            borderBottom: "none", // Supprime la bordure sous la ligne d'en-tête
                            borderTopLeftRadius: "0px", // Arrondi coin haut gauche
                            borderTopRightRadius: "0px", // Arrondi coin haut droit
                            overflow: "hidden", // Assure que l'arrondi est visible
                            backgroundColor: "transparent",
                        },
                    },
                    rows: {
                        style: {
                            borderBottomLeftRadius: "0px", // Pas d'arrondi sur la dernière ligne
                            borderBottomRightRadius: "0px", // Pas d'arrondi sur la dernière ligne
                            "&:last-child": {
                                borderBottomLeftRadius: "0px", // Forcé pour la dernière ligne
                                borderBottomRightRadius: "0px",
                            },
                            minHeight: "72px",
                            backgroundColor: "#1F2937", // Fond vert par défaut
                            '&:hover': {
                                backgroundColor: "#374151", // Fond rouge vif au survol
                            },
                            svg: {
                                fill: "#fff", // Couleur des chevrons
                            },
                        },
                    },
                    headCells: {
                        style: {
                            backgroundColor: "#374151",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "16px",
                            borderBottom: "none",
                            minHeight: "50px",

                        },
                    },
                    cells: {
                        style: {
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "17px",
                            color: "#fff",
                            fontSize: "14px",
                        },
                    },
                    expanderCell: {
                        style: {
                            backgroundColor: "#d2195a", // Fond bleu pour la colonne des chevrons
                        },
                    },
                    expanderButton: {
                        style: {
                            backgroundColor: "inherit", // Pas de fond spécifique pour le bouton
                            svg: {
                                fill: "#fff", // Icônes SVG en blanc pour cohérence
                            },
                        },
                    },
                    pagination: {
                        style: {
                            backgroundColor: "#374151",
                            color: "#fff", // Couleur du texte
                            borderTop: "0px solid #374151", // Bordure supérieure
                            borderBottomLeftRadius: "8px", // Forcé pour la dernière ligne
                            borderBottomRightRadius: "8px",
                        },
                        pageButtonsStyle: {
                            backgroundColor: "#374151", // Fond des boutons
                            color: "#fff", // Couleur du texte des boutons
                            fontSize: "5px",
                            paddingLeft: "7px",
                            width: "30px",
                            height: "30px",
                            borderRadius: "4px",
                            margin: "4px",
                            '&:hover': {
                                backgroundColor: "#4B5563", // Fond des boutons au survol
                            },
                            '&:focus': {
                                outline: "none",
                                backgroundColor: "#6B7280", // Fond des boutons actifs
                            },
                            svg: {
                                fill: "#fff", // Définit la couleur des icônes SVG (blanc)
                                width: "16px", // Largeur des SVGs
                                height: "16px", // Hauteur des SVGs
                            },
                        },
                    },
                }}
            />
        </>



    );
};

export default DTable;
