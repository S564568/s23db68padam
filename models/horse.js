const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
name: String,
color: {type:String,minlength:2,maxlength:44444},
price: {type:Number,min:4,max:4444444}
})
module.exports = mongoose.model("horse",horseSchema)