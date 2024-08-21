
const pt = require('puppeteer')

module.exports = async function(options) {

    // 启动
    const br = await pt.launch();

    // 爬取页面=>新开页面
    const pg = await br.newPage();

    // 跳转页面
    await pg.goto(options.url,{
        timeout: 30 * 1000,
        waitUntil: 'networkidle2'
    })

    // 爬取结果,处理数据
    const result = await pg.evaluate(options.callback())
    // 关闭程序
    await br.close()
    
    // 发送消息
    process.send(result)
    // 关闭进程
    setTimeout(()=>{
        process.exit(0)
    },1000)
    
}