const express = require("express")
const router = express.Router()

// Importing Models
const {Restaurant} = require("../models/index")
const {sequelize} = require("../db");

// Get Request
router.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
});

// Create Request
router.post('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
});

// Update Request
router.put('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.update(req.body);
    res.json(restaurant);
});

// Delete Request
router.delete('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.destroy();
});

module.exports = router;