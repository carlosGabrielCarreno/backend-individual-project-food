const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { loadRecipesInTheDb } = require("./src/helpers/loadRecipesInTheDb.js");
const DB_PORT = process.env.DB_PORT;

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  await loadRecipesInTheDb();
  server.listen(DB_PORT, () => {
    console.log("%s listening at " + DB_PORT); // eslint-disable-line no-console
  });
});
