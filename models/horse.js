const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
name: String,
color: String,
price: Number
})
module.exports = mongoose.model("horse",horseSchema)