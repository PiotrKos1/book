const collection = require("../db/createDb");
const client = require("../db/mongo");

module.exports = {
  fetchBooks: async function (req, res) {
    const insertResult = await collection
      .insertMany([{ title: "oj", a: 1 }])
      .then(() => console.log("dodno do db"))
      .catch(() => console.log("error"))
      .finally(() => client.close());

    res.send(console.log("DOdano!"));
  },
};
