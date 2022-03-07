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

module.exports = {
  addDrink: addDrink,
  deleteDrink: deleteDrink,
};
