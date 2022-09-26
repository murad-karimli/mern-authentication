

const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
    name: String,
    amount:Number,
    price:Number,
},
    {
        timestamps: true
    }
)
module.exports=mongoose.model("Goal",goalSchema)