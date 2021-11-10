const mongoose = require("mongoose")
const ChairsSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Chairs",ChairsSchema)

