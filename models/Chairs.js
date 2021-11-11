const mongoose = require("mongoose")
const ChairsSchema = mongoose.Schema({
costume_type: String,
Cost: String,
Color: Number
})
module.exports = mongoose.model("Chairs",ChairsSchema)

