import productModel from "../models/productModels.js";
import {v2 as cloudinary} from "cloudinary";

const addProduct = async (req, res) => {
    try{
        const {name, price, description, category} = req.body
        const image = req.file;
        let imageUrl = ""
        if(image){
            let result = await cloudinary.uploader.upload(image.path, {resouce_type: 'image'})
            imageUrl = result.secure_url
        }else{
            imageUrl = "https://via.placeholder.com/150"
        }

        const productData = {
            name, description, category, price: Number(price), 
            image: imageUrl,
            date: Date.now()

        }

        console.log(productData);

        const product = new productModel(productData)
        await product.save()

        res.json({success: true, message: "Product added successfully"})
    } catch(error){
        console.log(error)
        res.json({success: false, massage: "Cannot add product"})
    }
}

const listProducts = async (req, res) => {
    try{
        const products = await productModel.find({})
        res.json({success: true, products})
    }catch( error ){
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body._id)
        res.json({success: true, message: "Product removed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const singleProduct = async (req, res) => {
    
}


export {addProduct, listProducts, removeProduct, singleProduct}