// 爬取slider页面  

const crawler = require('../libs/crawler.js')

crawler({
    // 爬取的url
         url : 'https://ke.qq.com/',
         callback(){
            // 先获取元素
            window = global
            const $ = window.$,
                $item = $('.course-card-expo-wrapper');

            let data = []

            // 提取数据 
            $item.each((index,item)=>{
                const $el = $(item),
                      $elLink = $el.find('.js-report-link')

                const dataItem = {
                    // 新增属性attr 固有属性prop
                    cid: $elLink.attr('data-report-position'),
                    href: $elLink.prop('href'),
                    imgUrl: $el.find('.kc-course-card-cover').find('img').prop('src')
                };

                data.push(dataItem)
            })

            return data
        }
    
})