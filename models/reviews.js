module.exports = (sequelize,DataTypes) =>{
    const Review = sequelize.define("review",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
        },
    })
    return Review
}