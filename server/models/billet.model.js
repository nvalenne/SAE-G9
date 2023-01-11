import DataType from "sequelize";
export const Billet = (sequelize) => {
    return sequelize.define('billet', {
        id_billet:{
            field:'id_billet',
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date_billet: {
            field: 'datebillet',
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