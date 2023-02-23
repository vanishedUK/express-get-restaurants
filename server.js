const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Importing Models
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

// Get Request
app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
});

// Create Request
app.post('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
});

// Update Request
app.put('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.update(req.body);
    res.json(restaurant);
});

// Delete Request
app.delete('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.destroy();
});

// Loading Server
app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})