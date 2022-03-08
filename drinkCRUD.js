const { drink } = require("./migrate");
const getId = require("./getID");
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

async function getDrinkPricesByName(drinkName) {
  let drinkId = await getId.getDrinkId(drinkName);

  let listOfDrinks = await db.drinkPrice.findAll({
    where: {
      drink_id: drinkId,
    },
  });
  const storeID_Price = [];
  for (curr of listOfDrinks) {
    const storeName = await db.storeTable.findOne({
      where: {
        id: curr.store_id,
      },
    });
    storeID_Price.push([storeName.storeName, curr.drink_price]);
  }
  return storeID_Price;
}

async function updateDrinkPrice(storeName, drinkName, price) {
  const store_id = await getId.getStoreId(storeName);
  const drink_id = await getId.getDrinkId(drinkName);

  const answer = await db.drinkPrice.update(
    { drink_price: price },
    {
      where: {
        store_id: store_id,
        drink_id: drink_id,
      },
    }
  );
  console.log(answer);
}
module.exports = {
  addDrink: addDrink,
  deleteDrink: deleteDrink,
  addDrinkToStore: addDrinkToStore,
  getDrinkPricesByName: getDrinkPricesByName,
  updateDrinkPrice: updateDrinkPrice,
};
