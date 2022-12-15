import DataType from "sequelize";

export const Stand = (sequelize) => {
    return sequelize.define('stand', {
            id_stand: {
                field: 'id_stand',
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
            nbr_clients_total: {
                field: 'nbr_clients_total',
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