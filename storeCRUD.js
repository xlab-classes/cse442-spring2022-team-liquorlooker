const db = require("./migrate");

async function addStore(storeName, location) {
  const newStore = await db.storeTable.create({
    storeName: storeName,
    location: location,
  });
  console.log("New store added with id: ", newStore.id);
}

async function deleteStore(storeName) {
  await db.storeTable.destroy({
    where: {
      storeName: storeName,
    },
  });
}

module.exports = {
  addStore: addStore,
  deleteStore: deleteStore,
};
