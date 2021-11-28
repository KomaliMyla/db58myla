const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const ChairsSchema = mongoose.Schema({
Chair_type: String,
Color: {type: String, enum: ['White', 'Red','Yellow','Pink', 'Black'], required: function() { return this.Color;}},
Cost: {type: Number, min:[20], max:[2000] }})
module.exports = mongoose.model("Chairs",ChairsSchema);

