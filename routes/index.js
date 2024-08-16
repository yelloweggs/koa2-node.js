const router = require('koa-router')()

const {indexController} = require('../controllers/index')

// 重定向到某个页面
router.get('/',indexController)
// router.get('/',async(ctx,next)=>{
//   await ctx.render('index',{
//     title: '小野森森'
//   })
// })


// 直接写内容
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
