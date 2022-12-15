import DataType from "sequelize";

export const Service = (sequelize) => {
    return sequelize.define('service', {
            id: {
                field: 'idservice',
                type: DataType.INTEGER,
                primaryKey: true
            },
            username: {
                field: 'nomservice',
                type: DataType.CHAR(50),
            }
        }, {
            tableName: "service",
            timestamps: false
        }
    );
}
