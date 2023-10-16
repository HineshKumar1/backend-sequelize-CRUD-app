const dbConfig = require("../config/dbConfig")
const {DataTypes, Sequelize} = require("sequelize")

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig,
        dialect:dbConfig.dialect,
        port:dbConfig.PORT
    }

)

sequelize.authenticate().then(()=>{
    console.log("Connected to Database")
}).catch(err=>{
    console.log("Error...",err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.product = require('./products')(sequelize,DataTypes)
db.review = require('./reviews')(sequelize,DataTypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log("Re-sync done successfully");
})

db.product.hasMany(db.review,{
    foreignKey: 'productId',
    as: 'review'
})

db.review.belongsTo(db.product,{
    foreignKey: 'productId',
    as: 'product'
})
module.exports = db