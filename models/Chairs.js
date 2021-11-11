const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const ChairsSchema = mongoose.Schema({
Chair_type: String,
Color: String,
Cost: Number
})
module.exports = mongoose.model("Chairs",ChairsSchema);

