const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    students:[
      {
        id: 1,
        name:'张三',
        age: 18,
        score: 78
      },
      {
        id: 2,
        name:'李四',
        age: 19,
        score: 79
      },
      {
        id: 3,
        name:'苏苏',
        age: 18,
        score: 94
      },
      {
        id: 4,
        name:'赵丽安',
        age: 20,
        score: 90
      }
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
