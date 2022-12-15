import DataType from "sequelize";

export const Attraction = (sequelize) => {
    return sequelize.define('attraction', {
            id: {
                field: 'id_attraction',
                type: DataType.INTEGER,
                primaryKey: true
            },
            nom: {
                field: 'nom',
                type: DataType.STRING,
            },
            prixAdulte: {
                field: 'prix_adulte',
                type: DataType.DECIMAL(5,2),
            },
            prixEnfant: {
                field: 'prix_enfant',
                type: DataType.DECIMAL(5,2),
            },
            tailleReq: {
                field: 'taille_requise',
                type: DataType.DECIMAL(3,2),
            },
            recette: {
                field: 'recette',
                type: DataType.DECIMAL(6,2),
            },
            nbrClients: {
                field: 'nbr_clients_total',
                type: DataType.INTEGER,
            },
            attente: {
                field: 'attente',
                type: DataType.INTEGER,
            }
        }, {
            tableName: "attraction",
            timestamps: false
        }
    );
}