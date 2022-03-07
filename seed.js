const {Restaurant} = require("./models/index")
const seedData = require("./seedData");
const {sequelize} = require("./db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    await Restaurant.create(seedData[0])
}

syncSeed()

