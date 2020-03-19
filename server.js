const express = require ("express");
const PORT = process.env.PORT || 8080;

const app = express ();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./Develop/db/routes/apiRoutes")(app);
require("./Develop/db/routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});