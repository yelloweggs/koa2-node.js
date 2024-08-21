const router = require('koa-router')()
      crawlerController = require('../controllers/Crawler')


const {indexController} = require('../controllers/index')

// 重定向到某个页面
router.get('/',indexController)
// router.get('/',async(ctx,next)=>{
//   await ctx.render('index',{
//     title: '小野森森'
//   })
// })

// 爬虫页面
// prefix的意思是统一在路由上加前缀
router.prefix('/crawler')
router.get('/crawl_slider_data',crawlerController.crawlSliderData)



module.exports = router
