const getALLProductsStatic = async (req, res)=>{
    res.status(200).json({msg:'products testing route'})
}

const getAllProducts = async (req, res)=> {
    res.status(200).json({msg:'products route'})
}

module.exports = {
    getAllProducts,
    getALLProductsStatic,
}