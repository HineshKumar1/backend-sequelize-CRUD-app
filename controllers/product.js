const db = require("../models")

async function addProduct(req,res,next){
    try {
        const {title, price,description,published} = req.body

        const product = await db.product.create({
            title, 
            price,
            description,
            published
        })
        res.status(200).send({
            status:true,
            message:"Product Created Successfully",
            data:product
        })
    } catch (err) {
        res.status(500).send({
            status:false,
            data:null,
            message:err
        })
    }
}

async function getAllProducts(req,res,next){
    try {
        const {id} = req.query

        const product = await db.product.findAll({
            where:{
                id:id
            },
            include:[
               { 
                model: db.review,
                as:'review'
            }
            ]
        })
        res.status(200).send({
            status:true,
            message:"Product fetched successfully",
            data:product
        })
    } catch (err) {
        res.status(500).send({
            status:false,
            data:null,
            message:err
        })   
    }
}

async function updateProduct(req,res,next){
    try {
        const {id} = req.query

        const product = await db.product.update(req.body,{
            where:{id:id}
        })
        res.status(200).send({
            status:true,
            message:"Product Update successfully",
            data:product
        })       
    } catch (err) {
        res.status(500).send({
            status:false,
            message:"Product update successfully"
        })
    }
}

async function deleteProduct(req,res,next){
    try {
        const {id} = req.query

        const product = await db.product.destory(req.body,{
            where:{id:id}
        })
        res.status(200).send({
            status:true,
            message:"Product delete successfully",
            data:product
        })       
    } catch (err) {
        res.status(500).send({
            status:false,
            message: err
        })
    }
}
module.exports={
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}