import DataType from "sequelize";

export const Stand = (sequelize) => {
    return sequelize.define('stand', {
            id: {
                field: 'idstand',
                type: DataType.INTEGER,
                primaryKey: true
            },
            nom: {
                field: 'nom',
                type: DataType.CHAR(50),
            },
            prix: {
                field: 'prix',
                type: DataType.CHAR(50),
            },
            recette: {
                field: 'recette',
                type: DataType.STRING,
            },
            nbrClients: {
                field: 'nbrclientstotal',
                type: DataType.CHAR(50),
            },
            attente: {
                field: 'attente',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "stand",
            timestamps: false
        }
    );
}