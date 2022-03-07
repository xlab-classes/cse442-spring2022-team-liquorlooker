const db = require("./migrate");
async function addDrink(elDrink) {
  const newDrink = await db.drink.create({ drinkName: elDrink });
  console.log("New Drink added with id: ", newDrink.id);
}

async function deleteDrink(drink_name) {
  await db.drink.destroy({
    where: {
      drinkName: drink_name,
    },
  });
}

async function addDrinkToStore(storeName, drinkName) {
  let store_id = await db.storeTable.findOne({
    where: {
      storeName: storeName,
    },
  });
  let drink_id = await db.drink.findOne({
    where: {
      drinkName: drinkName,
    },
  });
  store_id = store_id.id;
  drink_id = drink_id.id;
  db.drinkPrice.create({ store_id: store_id, drink_id: drink_id });
}

module.exports = {
  addDrink: addDrink,
  deleteDrink: deleteDrink,
  addDrinkToStore: addDrinkToStore,
};
