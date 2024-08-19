// 封装crawler

module.exports = async function(options) {

    // 启动
    const br = await pt.launch();
    // 爬取的url
    const url = 'https://msiwei.ke.qq.com/#';
    // 爬取页面=>新开页面
    const pg = await br.newPage();

    // 跳转页面
    await pg.goto(url,{
        timeout: 30 * 1000,
        waitUntil: 'networkidle2'
    })

    // 爬取结果,处理数据
    const result = await pg.evaluate(()=>{
        // 先获取元素
        const $ = window.$;
        const $item = $('.js-report-link .rotation-chart-item-img');

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
    // 关闭程序
    await br.close()
    
    // 发送消息
    process.send(result)
    // 关闭进程
    setTimeout(()=>{
        process.exit(0)
    },1000)
    


}