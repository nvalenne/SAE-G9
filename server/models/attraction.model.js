import DataType from "sequelize";

export const Attraction = (sequelize) => {
    return sequelize.define('attraction', {
            id: {
                field: 'idattraction',
                type: DataType.INTEGER,
                primaryKey: true
            },
            nom: {
                field: 'nom',
                type: DataType.STRING,
            },
            prixAdulte: {
                field: 'prixadulte',
                type: DataType.DECIMAL(5,2),
            },
            prixEnfant: {
                field: 'prixenfant',
                type: DataType.DECIMAL(5,2),
            },
            tailleReq: {
                field: 'taillerequise',
                type: DataType.DECIMAL(3,2),
            },
            recette: {
                field: 'recette',
                type: DataType.DECIMAL(6,2),
            },
            nbrClients: {
                field: 'nbrclientstotal',
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