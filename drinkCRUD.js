const { drink } = require("./migrate");
const db = require("./migrate");
async function addDrink(elDrink) {
  const newDrink = await db.drink.create({ drinkName: elDrink });
  console.log("New Drink added with id: ", newDrink.id);
}

module.exports = {
  addDrink: addDrink,
};
