const Sequelize = require("sequelize");

const sql = new Sequelize(
  "mysql://davidliv:50336553@oceanus.cse.buffalo.edu:3306/davidliv_db"
);

try {
  sql.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const store_table = sql.define(
  "store_table",
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    storeName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    location: {
      type: Sequelize.TEXT,
    },
  },
  {
    tableName: "storeName",
  }
);

const drink = sql.define(
  "drink",
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drinkName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "drink",
  }
);

module.exports = {
  sql: sql,
  store_table: store_table,
  drink: drink,
};
