import DataType from "sequelize";
export const Billet = (sequelize) => {
    return sequelize.define('billet', {
        id:{
            field:'id_billet',
            type: DataType.INTEGER,
            primaryKey: true
        },
        dateBillet: {
            field: 'dateBillet',
            type: DataType.DATEONLY
        },
        prix: {
            field: 'prix',
            type: DataType.SMALLINT
        }
    }, {
        tableName: 'billet',
        timestamps: false
    })
}