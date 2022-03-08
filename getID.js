const db = require("./migrate");
async function getDrinkId(drinkName) {
  let drinkId = await db.drink.findOne({
    where: {
      drinkName: drinkName,
    },
  });
  drinkId = drinkId.id;
  return drinkId;
}

async function getStoreId(storeName) {
  const store = await db.storeTable.findOne({
    where: {
      storeName: storeName,
    },
  });
  return store.id;
}

module.exports = {
  getDrinkId: getDrinkId,
  getStoreId: getStoreId,
};
