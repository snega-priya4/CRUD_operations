const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,'Enter product name']
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0,
        }
    },
    {
        Timestamp:true
    }
)

const product = mongoose.model("products",productSchema);
module.exports = product;