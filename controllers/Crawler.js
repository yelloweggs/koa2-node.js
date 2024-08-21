// 爬虫类

/**
 * 子进程
 */
const {startProcess} = require('../libs/utils')


class Crawler {
    crawlSliderData(){
        startProcess({
            path: '../crawlers/slider',
            async message(data){
                console.log('data: ', data);

            },
            async exit(code){
                console.log('code: ', code);

            },
            async error(err){
                console.log('err: ', err);

            }

        })
    }
}
module.exports = new Crawler();