const sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://davidliv:50336553@oceanus.cse.buffalo.edu:3306/"
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const store_table = sequelize.define("store_table", {
  id: {
    type: sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
      autoIncrement: true,
  },
  storeName: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  location: {
    type: sequelize.TEXT
  },
},
  {
      tableName: "storeName"
  },
);

const drink = sequelize.define("drink", {
    id: {
      type: sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    storeName: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    location: {
      type: sequelize.TEXT
    },
    {
        tableName: "drink"
    },
  );
