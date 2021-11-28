const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const ChairsSchema = mongoose.Schema({
Chair_type: String,
Color: String,
Cost: {type: Number, min:[20], max:[200] }})
module.exports = mongoose.model("Chairs",ChairsSchema);

