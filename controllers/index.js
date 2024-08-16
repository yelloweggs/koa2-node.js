const {INDEX} = require('../configs/page')

// 中间件
async function indexController(ctx,next){
    await ctx.render('index',{
        INDEX
    })
}

module.exports={
    indexController
}