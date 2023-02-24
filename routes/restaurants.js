const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator")

// Importing Models
const {Restaurant} = require("../models/index")
const {sequelize} = require("../db");

// Get Request
router.get('/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
});

// Create Request
router.post('/:id', check(["name", "location", "cuisine"]).not().isEmpty().trim(), async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.json({error: errors.array()});
    } else {
        const restaurant = await Restaurant.create(req.body);
        res.json(restaurant);
    }
});

// Update Request
router.put('/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.update(req.body);
    res.json(restaurant);
});

// Delete Request
router.delete('/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.destroy();
});

module.exports = router;