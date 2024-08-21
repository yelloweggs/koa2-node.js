const {INDEX} = require('../configs/page')
const {students} = require('../data/index')


// 中间件
async function indexController(ctx,next){
    await ctx.render('index',{
        INDEX,
        students
    })
}


module.exports={
    indexController,
    
}