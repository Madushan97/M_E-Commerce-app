import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET/api/products
// @access Public
const getProducts = asyncHandler(async(req, res) => {

    const products = await Product.find({})
    res.json(products)

})

// @desc Fetch single products
// @route GET/api/:id
// @access Public
const getProductById = asyncHandler(async(req, res) => {

    const products = await Product.find({})

    if(product) {

        res.json(product)
    }else {
        res.status(404)
        throw new Error('Product not Found')
    }
})

export {getProductById, getProducts}