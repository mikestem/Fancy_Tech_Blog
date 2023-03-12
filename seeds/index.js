const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const User = [
    {
        username: "Sandwich_Maker",
        password: "sandwiches"
    },
    {
        username: "hamNcheese",
        password: "deliciousHam"
    },
    {
        username: "turkeyClub",
        password: "clubSandwich"
    },

]

const Blog = [
    {
        title: "Sandwich Structure",
        content: "bread, spread, meat, cheese, veggies",
        userId: 1
    },
    {
        title: "Is it a sandwich",
        content: "hotdog?",
        userId: 1
    },
    {
        title: "Best sandwich",
        content: "HAM AND CHEESE",
        userId: 2
    },
    {
        title: "What's the best club?",
        content: "turkey club",
        userId: 3
    },
]

const Comment = [
    {
        body: "nice structure!",
        blogId: 1,
        userId: 1
    },
    {
        body: "no",
        blogId: 3,
        userId: 2
    },
    {
        body: "love it!",
        blogId: 4,
        userId: 1
    },
    {
        body: "NO WAY",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()