const express = require("express");
const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Listening on port ${port}...`));
