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

async function getStoreLocation(storeName) {
  const store = await db.storeTable.findOne({
    where: {
      storeName: storeName,
    },
  });
  return store.location;
}

async function updateStoreLocation(storeName, newLocation) {
  const answer = await db.storeTable.update(
    { location: newLocation },
    {
      where: {
        storeName: storeName,
      },
    }
  );
  console.log(answer);
}

module.exports = {
  addStore: addStore,
  deleteStore: deleteStore,
  getStoreLocation: getStoreLocation,
  updateStoreLocation: updateStoreLocation,
};
