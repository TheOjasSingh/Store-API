const Product = require('../models/product')

const getALLProductsStatic = async (req, res)=>{
    const products = await Product.find({featured:true})
    res.status(200).json({products})
}

const getAllProducts = async (req, res)=> {
    res.status(200).json({msg:'products route'})
}

module.exports = {
    getAllProducts,
    getALLProductsStatic,
}