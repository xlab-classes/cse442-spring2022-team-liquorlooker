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

const storeTable = sql.define(
  "storeTable",
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
    tableName: "storeTable",
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

const User = sql.define(
  "User",
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    hash: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
  },
  {
    tableName: "User",
  }
);

const drinkPrice = sql.define(
  "drinkPrice",
  {
    store_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    drink_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    drink_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "drinkPrice",
  }
);

module.exports = {
  sql: sql,
  storeTable: storeTable,
  drink: drink,
  drinkPrice: drinkPrice,
  User: User,
};
