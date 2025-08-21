import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    Image: {type: String, require: true},
    category: {type: String, require: true},
    date: {type: Number, require: true}
})

const productModel = mongoose.models.product || mongoose.model('product', productSchema)

export default productModel;