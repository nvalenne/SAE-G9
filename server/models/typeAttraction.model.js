import DataType from "sequelize";

export const TypeAttraction = (sequelize) => {
    return sequelize.define('type_attraction', {
            id: {
                field: 'idtypeattraction',
                type: DataType.INTEGER,
                primaryKey: true
            },
            designation: {
                field: 'designation',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "type_attraction",
            timestamps: false
        }
    );
}