const db = require("./migrate");
function addUser(userName, hash) {
  const User = db.User.create({
    userName: userName,
    hash: hash,
  });

  console.log(`added user ${User.id} to db`);
}
async function authenticateUser(username, hash) {
  const user = await db.User.findAll({
    where: {
      userName: username,
    },
    raw: true,
  });
  console.log(user[0].hash);
  if (user[0].hash === hash) {
    return true;
  } else return false;
  //return user;
}

module.exports = {
  addUser: addUser,
  authenticateUser: authenticateUser,
};
