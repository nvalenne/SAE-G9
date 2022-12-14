import DataType from "sequelize";
export const Emplacement = (sequelize) => {
    return sequelize.define('emplacement', {
        id: {
            field: 'idemplacement',
            type: DataType.INTEGER,
            primaryKey: true
        },
        prix: {
            field: 'prix',
            type: DataType.DECIMAL(6,2),
        },
        taille: {
            field: 'taille',
            type: DataType.DECIMAL(5,2),
        },

    }, {
        tableName: "emplacement",
        timestamps: false
    });
}