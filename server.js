const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// loading restaurant route
const restaurantRouter = require("./routes/restaurants");

// express routes
app.use("/restaurants", restaurantRouter);

// Loading Server
app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})