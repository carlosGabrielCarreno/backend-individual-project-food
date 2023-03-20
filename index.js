const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { loadRecipesInTheDb } = require("./src/helpers/loadRecipesInTheDb.js");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await conn.sync({ force: false });
    // await loadRecipesInTheDb(); // solo se usa la primera vez que se sincroniza la BD
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server: ", error);
  }
}

startServer();
