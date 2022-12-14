import DataType from "sequelize";

export const Produit = (sequelize) => {
    return sequelize.define('produit', {
            id: {
                field: 'idproduit',
                type: DataType.INTEGER,
                primaryKey: true
            },
            nom: {
                field: 'nomproduit',
                type: DataType.CHAR(50),
            },
        }, {
            tableName: "produit",
            timestamps: false
        }
    );
}