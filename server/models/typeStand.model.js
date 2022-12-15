import DataType from "sequelize";

export const TypeStand = (sequelize) => {
    return sequelize.define('type_stand', {
            id: {
                field: 'idtypestand',
                type: DataType.INTEGER,
                primaryKey: true
            },
            designation: {
                field: 'designation',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "type_stand",
            timestamps: false
        }
    );
}