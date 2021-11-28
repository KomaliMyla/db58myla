const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const ChairsSchema = mongoose.Schema({
Chair_type: String,
Color: String,
Cost: {type: Number, min:[20], max:[2000] }})
module.exports = mongoose.model("Chairs",ChairsSchema);

