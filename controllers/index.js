const {INDEX} = require('../configs/page')
const {students} = require('../data/index')

const pt = require('puppeteer')

// 中间件
async function indexController(ctx,next){
    await ctx.render('index',{
        INDEX,
        students
    })
}

// 爬取的内容
async function ptData(ctx,next){
    // 启动
    const br = pt.launch()
    // 爬取的url
         url = 'https://msiwei.ke.qq.com/#'
    // 爬取页面=>新开页面
         pg = await bs.newPage()

    // 跳转页面
    await pg.goto(url,{
        timeout: 30 * 1000,
        waitUtil: 'networkidle2'
    })

    // 爬取结果,处理数据
    const result = await pg.evaluate((index,item)=>{
        // 先获取元素
        const $ = window.$,
              $item = $('.js-report-link .rotation-chart-item-img')
        let data = []
        // 提取数据
        $item.each((index,item)=>{
            const $el = $(item);

            const dataItem = {
                src: $el.find('img').prop('src')
            }
            data.push(dataItem)
        })

        return data

    })

    console.log(result,'res')
    // 关闭
    await br.close()
}

module.exports={
    indexController,
    ptData
}