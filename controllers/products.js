const Product = require('../models/product')

const getALLProductsStatic = async (req, res)=>{
    const products = await Product.find({featured:true})
    res.status(200).json({products, nbHints : products.length})
}

const getAllProducts = async (req, res)=> {
    const {featured, company, name} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i'}
    }
    const products = await Product.find(queryObject)
    res.status(200).json({products, nbHints : products.length})
}

module.exports = {
    getAllProducts,
    getALLProductsStatic,
}