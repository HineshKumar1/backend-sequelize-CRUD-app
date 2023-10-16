const db = require('../models/index');

async function addReview(req,res,next){
    try {
        const {rating,description,productId} = req.body;
        const review = db.review.create({
            rating,
            description,
            productId
        })
        res.status(200).send({
            status:true,
            message:"Review data add successfully",
            data: review
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            status:false,
            data:null,
            message:"Failed to add reveiew:" + err
        })
    }
}

async function getAllReview(req,res,next){
    try {
      const reviews =  await db.review.findAll({})  
      res.status(200).send({
        status:true,
        message:"Review data fetched successfully",
        data:reviews
    })
    } catch (err) {
        console.log("Failed to fetch Reviews");
        res.status(500).send({
            status:false,
            data:null,
            message:"Failed to fetch reveiew:" + err
        })
    }
}

module.exports ={
    addReview,
    getAllReview
}